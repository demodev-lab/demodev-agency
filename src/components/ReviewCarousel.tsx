'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const reviews = [
  {
    id: 1,
    image: '/20250323-review1.png',
    alt: '교육생 후기 메시지 1',
  },
  {
    id: 2,
    image: '/20250323-review2.png',
    alt: '교육생 후기 메시지 2',
  },
  {
    id: 3,
    image: '/20250323-review3.png',
    alt: '교육생 후기 메시지 3',
  },
  {
    id: 4,
    image: '/20250322-review.png',
    alt: '교육생 후기 메시지 4',
  },
];

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1,
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1,
    );
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // 자동 슬라이드
  useEffect(() => {
    let slideInterval: NodeJS.Timeout;

    if (isPlaying) {
      slideInterval = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [isPlaying, nextSlide]);

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // 왼쪽으로 스와이프
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // 오른쪽으로 스와이프
      prevSlide();
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl shadow-xl">
      <div
        className="relative w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute top-4 left-4 z-10 bg-primary-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
          <ChatBubbleLeftRightIcon className="w-5 h-5" />
          <span className="font-semibold">실제 교육생 후기</span>
        </div>

        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review) => (
            <div key={review.id} className="w-full flex-shrink-0">
              <div className="relative aspect-[16/9] bg-gray-100">
                <Image
                  src={review.image}
                  alt={review.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* 화살표 네비게이션 */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10"
          onClick={() => {
            prevSlide();
            setIsPlaying(false);
          }}
          aria-label="이전 후기"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10"
          onClick={() => {
            nextSlide();
            setIsPlaying(false);
          }}
          aria-label="다음 후기"
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-800" />
        </button>

        {/* 인디케이터 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToSlide(index);
                setIsPlaying(false);
              }}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-primary-500' : 'bg-white/70'
              }`}
              aria-label={`${index + 1}번 후기로 이동`}
            />
          ))}
        </div>

        {/* 재생/일시정지 버튼 */}
        <button
          className="absolute bottom-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? '일시정지' : '재생'}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
