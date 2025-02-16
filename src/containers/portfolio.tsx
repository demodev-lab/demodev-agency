'use server';

import Footer from '@/components/footer';

export default async function Portfolio() {
  return (
    <>
      <div className="w-full flex flex-col min-h-screen">
        <h1 className="text-center">Portfolio</h1>
        <p className="text-center">Here are some of our recent works!</p>
      </div>
      <Footer />
    </>
  );
}
