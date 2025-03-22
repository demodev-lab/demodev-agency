'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-start">
          <span className="bg-primary-100 text-primary-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
            Q
          </span>
          <h3 className="text-xl font-bold text-gray-900">{question}</h3>
        </div>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="px-5 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600 ml-11">{answer}</p>
        </div>
      )}
    </div>
  );
}
