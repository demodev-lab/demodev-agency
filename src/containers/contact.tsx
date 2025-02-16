'use server';

import Footer from '@/components/footer';

export default async function Contact() {
  return (
    <>
      <div className="w-full flex flex-col min-h-screen">
        <h1 className="text-center">Contact Us</h1>
        <p className="text-center">We would love to hear from you!</p>
      </div>
      <Footer />
    </>
  );
}
