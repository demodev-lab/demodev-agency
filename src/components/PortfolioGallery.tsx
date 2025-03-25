'use client';

import React, { useState, useEffect, memo } from 'react';
import Image from 'next/image';
import {
  ArrowRightIcon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface PortfolioItem {
  imageSrc: string;
  title: string;
  description: string;
  alt: string;
}

interface Position {
  x: number;
  y: number;
}

// 포트폴리오 아이템을 컴포넌트 외부로 이동하여 재렌더링 방지
const portfolioItems: readonly PortfolioItem[] = [
  {
    imageSrc: '/20250322-landing.png',
    title: '비즈니스 컨설팅 웹사이트',
    description:
      '코딩 경험이 없는 교육생이 만든 첫 번째 웹사이트입니다. 프로페셔널한 디자인과 반응형 레이아웃으로 구성되었습니다.',
    alt: '교육생 포트폴리오 - 비즈니스 컨설팅 웹사이트',
  },
  {
    imageSrc: '/20250323-1-landing.png',
    title: '온라인 코스 플랫폼',
    description:
      '디자인 전공자가 처음으로 코딩에 도전해 만든 교육 플랫폼입니다. 직관적인 UI와 모던한 디자인이 특징입니다.',
    alt: '교육생 포트폴리오 - 온라인 코스 플랫폼',
  },
  {
    imageSrc: '/20250323-2-landing.png',
    title: '제품 소개 웹사이트',
    description:
      '마케팅 담당자가 제품 홍보를 위해 직접 만든 웹사이트입니다. 세련된 디자인과 명확한 CTA 구성이 돋보입니다.',
    alt: '교육생 포트폴리오 - 제품 소개 웹사이트',
  },
  {
    imageSrc: '/20250323-3-landing.png',
    title: '크리에이티브 스튜디오',
    description:
      '디자인 에이전시 대표가 자신의 비즈니스를 위해 제작한 웹사이트입니다. 창의적인 레이아웃과 인터랙티브한 요소가 특징입니다.',
    alt: '교육생 포트폴리오 - 크리에이티브 스튜디오',
  },
] as const;

// 개별 포트폴리오 아이템 컴포넌트를 메모이제이션
const PortfolioItemComponent = memo(
  ({
    item,
    onSelect,
  }: {
    item: PortfolioItem;
    onSelect: (src: string) => void;
  }) => (
    <div
      className="overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
      onClick={() => onSelect(item.imageSrc)}
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
        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </div>
  ),
);

PortfolioItemComponent.displayName = 'PortfolioItemComponent';

// 이미지 모달 컴포넌트를 메모이제이션
const ImageModal = memo(
  ({
    selectedImage,
    onClose,
    zoom,
    position,
    isDragging,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onZoomIn,
    onZoomOut,
    onReset,
  }: {
    selectedImage: string;
    onClose: () => void;
    zoom: number;
    position: Position;
    isDragging: boolean;
    onMouseDown: (e: React.MouseEvent) => void;
    onMouseMove: (e: React.MouseEvent) => void;
    onMouseUp: () => void;
    onZoomIn: (e: React.MouseEvent) => void;
    onZoomOut: (e: React.MouseEvent) => void;
    onReset: (e: React.MouseEvent) => void;
  }) => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 backdrop-blur-sm"
      onClick={onClose}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <div
        className="relative max-w-6xl w-full h-auto max-h-[90vh] flex flex-col overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 컨트롤 버튼 */}
        <div className="sticky top-4 right-4 z-10 flex space-x-2 float-right">
          <button
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            onClick={onZoomIn}
            title="확대"
          >
            <PlusIcon className="w-6 h-6 text-gray-800" />
          </button>
          <button
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            onClick={onZoomOut}
            title="축소"
          >
            <MinusIcon className="w-6 h-6 text-gray-800" />
          </button>
          <button
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            onClick={onReset}
            title="원래 크기로"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
          <button
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            title="닫기"
          >
            <XMarkIcon className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* 안내 메시지 */}
        <div className="sticky bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm w-fit mx-auto">
          이미지를 드래그하여 자세히 살펴보세요
        </div>

        <div
          className="relative w-full h-full overflow-visible rounded-lg bg-black flex items-start justify-center cursor-move mt-16"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          <div
            className="transition-transform duration-100 ease-out"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
              transformOrigin: 'top center',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          >
            <Image
              src={selectedImage}
              alt="확대된 포트폴리오 이미지"
              width={1200}
              height={675}
              priority
              quality={100}
              className="w-full h-auto object-contain object-top pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  ),
);

ImageModal.displayName = 'ImageModal';

export default function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  const [dragStartPosition, setDragStartPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  // 이미지 모달이 열릴 때 상태를 초기화합니다
  useEffect(() => {
    if (selectedImage) {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [selectedImage]);

  // 드래그 시작 핸들러
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setDragStartPosition({ x: position.x, y: position.y });
  };

  // 드래그 중 핸들러
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;

    setPosition({
      x: dragStartPosition.x + dx,
      y: dragStartPosition.y + dy,
    });
  };

  // 드래그 종료 핸들러
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 확대 버튼 클릭 핸들러
  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  // 축소 버튼 클릭 핸들러
  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom((prev) => Math.max(prev - 0.25, 1));
  };

  // 이미지 리셋 핸들러
  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioItems.map((item) => (
          <PortfolioItemComponent
            key={item.imageSrc}
            item={item}
            onSelect={setSelectedImage}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700 mb-6">
          이 모든 웹사이트는 코딩 경험이 없는 교육생들이{' '}
          <strong>단 한 번의 수업</strong>으로 만든 결과물입니다
        </p>
        <Link
          href="https://forms.gle/wEK2zqgnSS4GgzVG7"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          나도 만들어보기 <ArrowRightIcon className="w-5 h-5 ml-2" />
        </Link>
      </div>

      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
          zoom={zoom}
          position={position}
          isDragging={isDragging}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onReset={handleReset}
        />
      )}
    </div>
  );
}
