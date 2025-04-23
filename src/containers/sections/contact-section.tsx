"use client";

import { useState, useEffect, FormEvent, useRef } from "react";
import Link from "next/link";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import createNotionPage from "@/actions/notion";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1.5rem",
    padding: "2.5rem",
    maxWidth: "450px",
    width: "90%",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    backdropFilter: "blur(8px)",
    zIndex: 1000,
  },
};

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    Modal.setAppElement(document.body);
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const content = formData.get("content") as string;

      await createNotionPage(name, email, content);
      setModalMessage("문의가 성공적으로 접수되었습니다.");
      setIsModalOpen(true);
      formRef.current?.reset();
    } catch (err) {
      setModalMessage("문의 접수 중 오류가 발생했습니다.");
      setIsModalOpen(true);
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full py-24 relative overflow-hidden">
      {isMounted && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={customStyles}
          contentLabel="문의 결과"
        >
          <div className="text-center">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full">
              <SparklesIcon className="w-10 h-10 text-primary-600" />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              {modalMessage}
            </h2>
            <p className="mb-8 text-gray-600">
              빠른 시간 내에 답변 드리겠습니다. 감사합니다.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="button-3d px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-medium hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-lg"
            >
              확인
            </button>
          </div>
        </Modal>
      )}

      <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8 relative z-10">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-primary-50 text-primary-600 text-sm font-medium">
            <SparklesIcon className="w-4 h-4 mr-2" />
            상담 문의
          </div>
          <h2 className="text-4xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500">
              자신있는 프로젝트만
            </span>{" "}
            진행합니다
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            100% 내부 개발팀의 철저한 품질 관리와 파격적인 환불 보장제도를
            제공합니다
          </p>
        </div>

        {/* 문의 폼 */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                <span className="text-primary-600 text-sm font-medium">
                  빠른 응답
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-6">
                상담 문의하기
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    이름
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="홍길동"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    이메일
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    문의내용
                  </label>
                  <textarea
                    name="content"
                    placeholder="프로젝트에 대해 설명해주세요."
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 text-white rounded-lg font-medium transition-all ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary-600 hover:bg-primary-500"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <ArrowPathIcon className="w-5 h-5 animate-spin mr-2" />
                      <span>처리중...</span>
                    </>
                  ) : (
                    <>
                      문의하기
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center mt-2">
                  제출하신 정보는 문의 답변 목적으로만 사용됩니다
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* 빠른 문의 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* 전화 문의 */}
          <Link
            href="tel:010-4718-8591"
            className="pl-2 block text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors"
          >
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 mr-4">
                  <PhoneIcon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  전화 문의
                </h4>
              </div>
              <span>010-4718-8591</span>
            </div>
          </Link>

          {/* 이메일 문의 */}
          <Link
            href="mailto:demo.dev.connect@gmail.com"
            className="pl-2 block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors break-all"
          >
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 mr-4">
                  <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  이메일 문의
                </h4>
              </div>
              <span>demo.dev.connect@gmail.com</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
