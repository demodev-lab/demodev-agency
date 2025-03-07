'use client';

import { useState, useEffect } from 'react';

export default function PopupNotice() {
  const [isOpen, setIsOpen] = useState(false);
  // 상담 페이지 URL (원하는 링크로 변경 가능)
  const consultationUrl = 'https://forms.gle/Ye7ciWPw1cCofgUf7';

  useEffect(() => {
    // 쿠키 확인
    const popupClosed = localStorage.getItem('popupClosed');
    const lastClosed = localStorage.getItem('popupClosedTime');
    const now = new Date().getTime();

    // 24시간(86400000 밀리초) 이내에 닫은 적이 없으면 팝업 표시
    if (!popupClosed || (lastClosed && now - parseInt(lastClosed) > 86400000)) {
      setIsOpen(true);
    }
  }, []);

  const closePopup = (dontShowFor24h = false) => {
    setIsOpen(false);

    if (dontShowFor24h) {
      // 24시간 동안 열지 않기 옵션 선택 시
      localStorage.setItem('popupClosed', 'true');
      localStorage.setItem('popupClosedTime', new Date().getTime().toString());
    }
  };

  const handleConsultClick = () => {
    // 새 창에서 링크 열기
    window.open(consultationUrl, '_blank');
    // 팝업 닫기
    closePopup(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="relative w-11/12 max-w-md p-0 mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* 상단 컬러 바 */}
        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>

        {/* 닫기 버튼 */}
        <button
          onClick={() => closePopup(false)}
          className="absolute text-gray-400 top-3 right-3 hover:text-gray-600 transition-colors"
          aria-label="닫기"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-6">
          {/* 아이콘 */}
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* 제목 */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
            무료 상담 안내
          </h3>

          {/* 내용 */}
          <p className="text-base text-gray-700 mb-6 leading-relaxed text-center">
            <span className="text-xl md:text-2xl font-extrabold text-red-600 block mb-3">
              더 이상 외주 견적 사기 당하지 마세요!
            </span>
            현직 개발사 대표와 영재고 출신 CTO가
            <br />
            <span className="font-semibold">무상으로 상담</span>해드립니다.
          </p>

          {/* 버튼 영역 */}
          <div className="flex flex-col space-y-3">
            <button
              onClick={handleConsultClick}
              className="w-full py-3 px-4 text-white font-medium bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-md"
            >
              무료 상담 받기
            </button>
            <button
              onClick={() => closePopup(true)}
              className="w-full py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              24시간 동안 열지 않기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
