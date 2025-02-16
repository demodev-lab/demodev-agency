import Image from 'next/image';

export default async function ScrollContainer() {
  return (
    <div className="pt-16 mt-16">
      <div className="mb-12 text-center">
        <p className="section-title">Our Experience</p>
      </div>

      <div className="scroll-container">
        <div className="scroll-content animate-scroll">
          {/* First set */}
          <div className="logo-item">
            <Image
              src="/seogang.png"
              alt="서강대학교 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/sejong.png"
              alt="세종대학교 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/inno.png"
              alt="이노베이션 아카데미 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/42.png"
              alt="42 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/twig.png"
              alt="twig 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/life.png"
              alt="라해스 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/next.png"
              alt="넥스트 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/gom.png"
              alt="곰표 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/jab-training.png"
              alt="JAB TRAINING 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          {/* Duplicate set for seamless scroll */}
          <div className="logo-item">
            <Image
              src="/seogang.png"
              alt="서강대학교 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/sejong.png"
              alt="세종대학교 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/inno.png"
              alt="이노베이션 아카데미 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/42.png"
              alt="42 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/twig.png"
              alt="twig 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/life.png"
              alt="라해스 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/next.png"
              alt="넥스트 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/gom.png"
              alt="곰표 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
          <div className="logo-item">
            <Image
              src="/jab-training.png"
              alt="JAB TRAINING 로고"
              width={160}
              height={160}
              className="object-contain w-auto h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
