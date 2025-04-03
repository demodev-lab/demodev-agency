import Image from 'next/image';

export default async function ScrollContainerSection() {
  return (
    <div className="w-full pb-20 bg-gray-50">
      <div className="mx-auto max-w-7xl bg-gray-50">
        <div className="mb-16 text-center">
          <p className="section-title">Our Experience</p>
        </div>
        <div className="scroll-container">
          <div className="scroll-content animate-scroll">
            {/* First set */}
            <div className="logo-item">
              <Image
                src="/experience-seogang.png"
                alt="서강대학교 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experience-sejong.png"
                alt="세종대학교 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experience-inno.png"
                alt="이노베이션 아카데미 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experience-42.png"
                alt="42 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experience-twig.png"
                alt="twig 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experience-life.png"
                alt="라해스 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experience-nxr.png"
                alt="넥스트 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experience-gompyo.png"
                alt="곰표 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experience-jab-training.png"
                alt="JAB TRAINING 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            {/* Duplicate set for seamless scroll */}
            <div className="logo-item">
              <Image
                src="/experience-seogang.png"
                alt="서강대학교 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experience-sejong.png"
                alt="세종대학교 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experiinno.png"
                alt="이노베이션 아카데미 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experience-42.png"
                alt="42 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experience-twig.png"
                alt="twig 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experience-life.png"
                alt="라해스 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experience-nxr.png"
                alt="넥스트 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experience-gompyo.png"
                alt="곰표 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/experience-jab-training.png"
                alt="JAB TRAINING 로고"
                width={160}
                height={160}
                className="object-contain w-auto h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
