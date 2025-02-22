import {
  BuildingOfficeIcon,
  CalendarDaysIcon,
  StarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export default async function GuaranteeSection() {
  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="section-subtitle">업계 유일</h2>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            100% 환불 보장
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            저희는 아래 약속을 지키지 못할 경우,{' '}
            <strong className="text-primary-600">100% 환불</strong>을
            보장합니다. 고객님의 신뢰를 최우선으로 생각합니다.
          </p>
        </div>

        <div className="space-y-16">
          <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary-100">
                <BuildingOfficeIcon className="w-12 h-12 text-primary-600" />
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:ml-10">
              <h3 className="text-2xl font-bold text-gray-900">
                외부 하청 금지
              </h3>
              <p className="mt-4 text-gray-600">
                모든 프로젝트는{' '}
                <strong className="text-primary-600">내부 전문가</strong>가 직접
                수행합니다. 외부 하청은 절대 하지 않습니다.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary-100">
                <CalendarDaysIcon className="w-12 h-12 text-primary-600" />
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:ml-10">
              <h3 className="text-2xl font-bold text-gray-900">납기일 준수</h3>
              <p className="mt-4 text-gray-600">
                약속된{' '}
                <strong className="text-primary-600">납기일을 100% 준수</strong>
                합니다. 지연 시 전액 환불을 보장합니다.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary-100">
                <StarIcon className="w-12 h-12 text-primary-600" />
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:ml-10">
              <h3 className="text-2xl font-bold text-gray-900">
                결과물 퀄리티 보장
              </h3>
              <p className="mt-4 text-gray-600">
                <strong className="text-primary-600">기대한 퀄리티</strong>에
                미치지 못할 경우, 고객님의 요청에 따라 100% 환불해 드립니다.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary-100">
                <ShieldCheckIcon className="w-12 h-12 text-primary-600" />
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:ml-10">
              <h3 className="text-2xl font-bold text-gray-900">
                지속적인 유지보수
              </h3>
              <p className="mt-4 text-gray-600">
                프로젝트 종료 후에도{' '}
                <strong className="text-primary-600">
                  6개월 무상 유지보수
                </strong>
                를 약속드립니다. 문제가 발생할 경우 신속하게 대응합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
