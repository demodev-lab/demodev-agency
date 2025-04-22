"use client";

import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import GACtaButton from "@/components/analytics/ga-cta-button";
import { GA_CTA_EVENTS } from "@/constants/ga";

interface PortfolioItem {
  imageSrc: string;
  title: string;
  description: string;
  alt: string;
  link: string;
}

// 포트폴리오 아이템을 컴포넌트 외부로 이동하여 재렌더링 방지
const portfolioItems: readonly PortfolioItem[] = [
  {
    imageSrc: "/landing/1.png",
    title: "컨설팅 웹사이트",
    description:
      "기획자 수강생분이 자신의 비즈니스를 위해 제작한 웹사이트입니다. 인터랙티브한 애니메이션이 특징입니다.",
    alt: "교육생 포트폴리오 - 비즈니스 컨설팅 웹사이트",
    link: "https://yeonbonglab.vercel.app/",
  },
  {
    imageSrc: "/landing/2.png",
    title: "유통 플랫폼",
    description:
      "개발을 아예 모르는 분이 자신의 비즈니스를 위해 제작한 웹사이트입니다. 모던한 디자인과 3D 애니메이션이 특징입니다.",
    alt: "교육생 포트폴리오 - 유통 플랫폼",
    link: "https://urbane-gp.vercel.app/",
  },
  {
    imageSrc: "/landing/3.png",
    title: "마케팅 대행사 웹사이트",
    description:
      "마케팅 담당자분이 제품 홍보를 위해 직접 만든 웹사이트입니다. 세련된 디자인과 명확한 CTA 구성이 돋보입니다.",
    alt: "교육생 포트폴리오 - 마케팅 대행사 웹사이트",
    link: "https://kiap-test0420.vercel.app/",
  },
  {
    imageSrc: "/landing/4.png",
    title: "세탁 프랜차이즈 웹사이트",
    description:
      "개발을 처음 해보시는 분이 자신의 비즈니스를 위해 제작한 웹사이트입니다. 독특한 컬러감과 모던한 디자인이 특징입니다.",
    alt: "교육생 포트폴리오 - 세탁 프랜차이즈 웹사이트",
    link: "https://laundrytown.vercel.app/",
  },
] as const;

export default function PortfolioGallery() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioItems.map((item, index) => (
          <div key={index}>
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  {item.title}
                  <ArrowRightIcon className="w-4 h-4 ml-2 text-primary-500" />
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700 mb-6">
          이 모든 웹사이트는 코딩 경험이 없는 교육생들이{" "}
          <strong>단 한 번의 수업</strong>으로 만든 결과물입니다
        </p>
        <Link
          href="https://forms.gle/wEK2zqgnSS4GgzVG7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GACtaButton
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
            eventLabel={GA_CTA_EVENTS.onClickMiddleChallengeCTA}
          >
            나도 만들어보기 <ArrowRightIcon className="w-5 h-5 ml-2" />
          </GACtaButton>
        </Link>
      </div>
    </div>
  );
}
