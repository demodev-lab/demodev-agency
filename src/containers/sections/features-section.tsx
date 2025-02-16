import {
  ClockIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  ReceiptPercentIcon,
} from '@heroicons/react/24/outline';
import ScrollContainer from '@/containers/sections/scroll-container-section';

export default async function FeatureSection() {
  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="section-subtitle">우리가 특별한 이유</h2>
          <p className="section-title">Why Us?</p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-4">
          <div className="p-8 transition-all duration-300 bg-white rounded-xl hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-primary-50 rounded-xl">
              <ClockIcon className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-gray-900">
              24/7 피드백
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              언제든 답답한 기다림 없이
              <br />
              실시간 응대를 약속드립니다
            </p>
          </div>

          <div className="p-8 transition-all duration-300 bg-white rounded-xl hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-primary-50 rounded-xl">
              <CurrencyDollarIcon className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-gray-900">
              추가금 제로
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              계약 이후 추가 비용 없이
              <br />
              약속된 결과물을 제공합니다
            </p>
          </div>

          <div className="p-8 transition-all duration-300 bg-white rounded-xl hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-primary-50 rounded-xl">
              <RocketLaunchIcon className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-gray-900">
              빠른 결과물
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              효율적인 개발 프로세스로
              <br />
              신속한 결과물을 전달합니다
            </p>
          </div>

          <div className="p-8 transition-all duration-300 bg-white rounded-xl hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-primary-50 rounded-xl">
              <ReceiptPercentIcon className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-gray-900">가격실명제</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              투명한 가격 정책으로
              <br />
              신뢰할 수 있는 견적 제공
            </p>
          </div>
        </div>
        <ScrollContainer />
      </div>
    </div>
  );
}
