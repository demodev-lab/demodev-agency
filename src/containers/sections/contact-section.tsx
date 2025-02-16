'use server';

import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid';

export default async function ContactSection() {
  return (
    <div id="contact" className="w-full py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                <span className="text-primary-600">자신있는 프로젝트만</span>{' '}
                진행합니다
              </h2>
              <p className="mb-12 text-lg text-gray-600">
                100% 내부 개발팀의 철저한 품질 관리와 파격적인 환불 보장제도를
                제공합니다.
                <br className="hidden md:block" />
                <span className="inline-block mt-2 font-semibold text-primary-600">
                  2025년 딱 1개만 더
                </span>{' '}
                추가 진행 합니다.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="tel:010-4718-8591"
                className="flex items-center gap-3 px-4 py-2 text-white rounded bg-primary-700"
              >
                <PhoneIcon className="w-4 h-4" />
                010-4718-8591
              </Link>
              <Link
                href="mailto:sunghyun4718@gmail.com"
                className="flex items-center gap-3 px-4 py-2 bg-white border rounded text-primary-600 border-primary-600"
              >
                <EnvelopeIcon className="w-4 h-4" />
                sunghyun4718@gmail.com
              </Link>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="form-label">이름</label>
              <input type="text" placeholder="홍길동" className="form-input" />
            </div>
            <div>
              <label className="form-label">이메일</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">문의내용</label>
              <textarea
                placeholder="프로젝트에 대해 설명해주세요."
                rows={4}
                className="form-input"
              ></textarea>
            </div>
            <button className="w-full btn-primary">문의하기</button>
          </form>
        </div>
      </div>
    </div>
  );
}
