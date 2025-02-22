export default async function TestimonialSection() {
  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="section-subtitle">고객 후기</h2>
          <p className="section-title">고객들의 생생한 이야기</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 bg-white rounded-lg">
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100">
                  <span className="text-xl font-bold text-primary-700">J</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">JAB TRAINING</h4>
                <p className="text-sm text-gray-600">복싱 트레이닝 센터</p>
              </div>
            </div>
            <p className="mb-6 text-gray-600">
              &quot;예약 시스템 도입 후 업무 효율이 200% 향상되었습니다.
              고객들도 편리하게 이용하고 있어 매우 만족스럽습니다.&quot;
            </p>
            <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
          </div>

          <div className="p-8 bg-white rounded-lg">
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100">
                  <span className="text-xl font-bold text-primary-700">G</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">(주)곰표</h4>
                <p className="text-sm text-gray-600">식품 유통 기업</p>
              </div>
            </div>
            <p className="mb-6 text-gray-600">
              &quot;프로젝트 기획부터 개발까지 모든 과정이 체계적이었고,
              결과물도 기대 이상이었습니다. 특히 소통이 원활했던 점이
              인상적이었습니다.&quot;
            </p>
            <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
          </div>

          <div className="p-8 bg-white rounded-lg">
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100">
                  <span className="text-xl font-bold text-primary-700">A</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">알바들 모여라</h4>
                <p className="text-sm text-gray-600">커뮤니티 플랫폼</p>
              </div>
            </div>
            <p className="mb-6 text-gray-600">
              &quot;사용자 경험을 최우선으로 고려한 디자인과 안정적인 개발로
              서비스 런칭 후 사용자 유입이 꾸준히 증가하고 있습니다.&quot;
            </p>
            <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
