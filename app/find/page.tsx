"use client";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="font-sans  max-w-[1200px] mx-auto">
      {/* Hero Section */}
      <section
        className="bg-white py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/churchLife/contact-bg.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 relative z-10">
          {/* 左侧文字 */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-2xl font-bold text-gray-900 mb-4">
              联系我们 / Contact Us
            </h1>
            <p className="text-lg text-gray-700 mb-6 mt-12">
              欢迎随时联系我们。无论您有任何问题、需要帮助，或者想了解教会活动，
              我们都乐意为您提供支持。
            </p>
          </div>

          {/* 右侧图片或装饰 */}
          <div className="lg:w-1/2 w-full">
            <div className="aspect-video w-full">
              <Image
                src="/churchLife/VGBC06.jpg"
                alt="location"
                width={1920}
                height={1080}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 地址信息 */}
      <section className="bg-greenBackground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-6">教会地址 / Address</h2>
          <div className="bg-white p-10 rounded-lg shadow-lg inline-block text-left">
            <p className="text-lg text-gray-700 mb-2">
              温哥华浸信会福音堂 (VGBC)
            </p>
            <p className="text-gray-700 mb-2">
              3320 Crown Street, Vancouver, B.C, Canada
            </p>
            <p className="text-gray-500 text-sm">
              停车提示：教会前方及附近街道可停车，周日高峰期建议提前到达。
            </p>
          </div>
        </div>
      </section>

      {/* 地图 */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-6">地图 / Map</h2>
          <div className="aspect-video w-full rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.123456789!2d-123.1234567!3d49.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867123456789ab%3A0xcdef1234567890!2s3320%20Crown%20St%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 联系方式提示 */}
      <section className="bg-greenBackground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-10 rounded-lg shadow-lg inline-block">
            <p className="text-lg text-gray-700 mb-2">
              想了解更多信息或有任何问题，请随时联系我们：
            </p>
            <p className="text-gray-900 font-semibold mb-1">
              电话: +1 (604) 123-4567
            </p>
            <p className="text-gray-900 font-semibold mb-1">
              邮箱: info@vgbc.org
            </p>
            <p className="text-gray-500 text-sm mt-2">
              我们期待您的来访与交流！
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
