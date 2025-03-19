'use client';

import {
  CalendarIcon,
  UsersIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface ScheduleCardProps {
  date: string;
  remaining: number;
  isFull: boolean;
}

export default function ScheduleCard({
  date,
  remaining,
  isFull,
}: ScheduleCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border ${
        isFull
          ? 'bg-gray-100 border-gray-200'
          : 'bg-white border-primary-100 hover:border-primary-300'
      } transition-all duration-300 p-6 shadow-sm hover:shadow-md`}
    >
      {isFull && (
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-gray-500 text-white py-1 px-8 rotate-45 text-sm font-medium">
          마감
        </div>
      )}

      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 mb-4">
          <CalendarIcon className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{date}</h3>
        <p className="text-gray-500 mb-4 text-center">토요일 오후 2시-5시</p>

        <div className="flex items-center justify-center w-full mt-2">
          {isFull ? (
            <span className="inline-flex items-center text-gray-500">
              <CheckCircleIcon className="w-5 h-5 mr-1 text-gray-400" />
              마감되었습니다
            </span>
          ) : (
            <span className="inline-flex items-center text-primary-600 font-medium">
              <UsersIcon className="w-5 h-5 mr-1" />
              잔여 {remaining}자리
            </span>
          )}
        </div>

        <div className="mt-6 w-full">
          <Link
            href="https://forms.gle/wEK2zqgnSS4GgzVG7"
            className={`w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg ${
              isFull
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
            } transition-colors`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => isFull && e.preventDefault()}
          >
            {isFull ? '마감됨' : '신청하기'}
          </Link>
        </div>
      </div>
    </div>
  );
}
