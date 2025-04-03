'use client';

import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import FaqItem from '@/components/faq-item';
import { useState } from 'react';

interface FaqType {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqType[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-8 mb-6">
            <div className="flex items-center justify-center">
              <QuestionMarkCircleIcon className="w-8 h-8 text-primary-500" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl">
            자주 묻는 질문
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12">
            궁금한 점이 있으신가요? 아래에서 답을 찾아보세요.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[400px]">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
