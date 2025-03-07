'use client';

import dynamic from 'next/dynamic';

// 클라이언트 사이드에서만 렌더링되도록 동적 임포트
const PopupNotice = dynamic(() => import('@/components/PopupNotice'), {
  ssr: false,
});

export default function PopupNoticeWrapper() {
  return <PopupNotice />;
}
