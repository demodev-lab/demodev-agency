export default async function OutsourcingSection() {
  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            많은 개발사는{' '}
            <span className="px-2 py-1 text-white rounded-md bg-primary-700">
              외부 하청에 일을 넘깁니다
            </span>
            <br className="mb-4" />
            <span className="block mt-3 text-black">알고 계신가요?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Problem Card 1 */}
          <div className="p-8 transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl">
            <div className="mb-6">
              <h3 className="mb-4 text-xl font-bold md:text-2xl text-primary-600">
                기대했던 일정은 물거품이 되었어요
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-[400px] break-keep">
                &ldquo;처음엔 빠른 개발을 약속했지만, 시간이 지날수록 일정은
                계속 미뤄졌어요. 원래 개발팀이 아닌 하청업체가 작업을 맡고
                있었더라고요. 상황은 복잡해졌고, 결국 프로젝트는 기약 없이
                지연되었습니다.&rdquo;
              </p>
            </div>
            <div className="text-sm font-medium text-gray-500">
              예비창업패키지 창업가
            </div>
          </div>

          {/* Problem Card 2 */}
          <div className="p-8 transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl">
            <div className="mb-6">
              <h3 className="mb-4 text-xl font-bold md:text-2xl text-primary-600">
                완성된 결과물이 쓸 수 없는 상태였습니다
              </h3>
              <p className="leading-relaxed text-gray-600">
                &ldquo;몇 개월을 기다려 개발이 끝났다고 들었지만, 결과물은 제
                요구사항과 전혀 달랐어요. 그때서야 알게 되었죠. 외주업체가
                중간에 다른 개발사에 하청을 준 사실을요.&rdquo;
              </p>
            </div>
            <div className="text-sm font-medium text-gray-500">
              초기 라운드 창업가
            </div>
          </div>

          {/* Problem Card 3 */}
          <div className="p-8 transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl">
            <div className="mb-6">
              <h3 className="mb-4 text-xl font-bold md:text-2xl text-primary-600">
                이틀이 지나도 아무 소식이 없었습니다
              </h3>
              <p className="leading-relaxed text-gray-600">
                &ldquo;문제가 발생해 바로 수정이 필요했어요. 하지만 아무리
                연락해도 답이 없었습니다. 이유는 간단했죠. 하청업체가 응답하지
                않고 있었던 겁니다. 외주사도 어찌할 바를 몰라 답변만
                지연되었죠.&rdquo;
              </p>
            </div>
            <div className="text-sm font-medium text-gray-500">
              중소 무역회사 대표님
            </div>
          </div>

          {/* Problem Card 4 */}
          <div className="p-8 transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl">
            <div className="mb-6">
              <h3 className="mb-4 text-xl font-bold md:text-2xl text-primary-600">
                생각지 못한 비용이 눈덩이처럼 불어났어요
              </h3>
              <p className="leading-relaxed text-gray-600">
                &ldquo;계약 당시엔 기본 포함이라고 했던 기능들이 없다고
                하더군요. 하청업체에서 추가 개발이 필요하다며 새로 견적을
                제시했어요. 계획했던 예산을 훨씬 초과해버렸습니다.&rdquo;
              </p>
            </div>
            <div className="text-sm font-medium text-gray-500">
              무역 솔루션 회사 대표님
            </div>
          </div>
        </div>

        {/* Solution Message */}
        <div className="mt-16 text-center">
          <p className="text-xl font-bold md:text-2xl text-primary-600">
            Exceed IT는 자체 인력으로만 개발합니다
          </p>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            모든 과정을 직접 관리하고 소통하여 이러한 문제들을 원천 차단합니다
          </p>
        </div>
      </div>
    </div>
  );
}
