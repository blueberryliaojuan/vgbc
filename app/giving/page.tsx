"use client";
// import Image from "next/image";

export default function GivingPage() {
  return (
    <div className="font-sans antialiased max-w-[1200px] mx-auto">
      {/* Hero Section */}
      <section
        className="bg-white py-16 bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/churchLife/giving-bg.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          {/* 左侧文字 */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-2xl font-bold text-gray-900 mb-4">
              奉献 / Giving
            </h1>
            <p className="text-lg text-gray-700 mb-6 mt-12">
              感谢您支持我们的事工！您的奉献将帮助教会开展更多服务和活动，
              传扬福音，关怀社区。
            </p>
            <button className="bg-oxfordBlue text-white px-4 py-2 rounded">
              了解更多
            </button>
          </div>

          {/* 右侧图片 */}
          <div className="lg:w-1/2 w-full">
            <div className="aspect-video w-full">
              {/* <Image
                src="/churchLife/giving.jpg"
                alt="Giving"
                width={1920}
                height={1080}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                priority
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* 支票奉献 */}
      <section className="bg-greenBackground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-6">支票奉献</h2>
          <div className="bg-white p-10 rounded-lg shadow-lg inline-block">
            <p className="text-lg text-gray-700">
              请将支票抬头填写为：
              <span className="font-semibold ml-2">RGBC</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              （请将支票寄到教会办公室）
            </p>
          </div>
        </div>
      </section>

      {/* 电子转账 */}
      <section className="bg-greenBackground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-6">电子转账 / e-Transfer</h2>
          <div className="bg-white p-10 rounded-lg shadow-lg inline-block">
            <p className="text-lg text-gray-700 mb-2">
              您可以通过电子转账将奉献发送到以下邮箱：
            </p>
            <p className="font-semibold text-xl break-all mb-2">
              V-RGBCfinacial2020@hotmail.com
            </p>
            <p className="text-gray-500 text-sm">
              转账时请在备注中注明您的姓名和奉献用途。
            </p>
          </div>
        </div>
      </section>

      {/* 感谢信息 */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-greenBackground p-10 rounded-lg shadow-lg inline-block">
            <p className="text-lg text-gray-700">
              感谢您的慷慨奉献！您的支持让教会事工得以持续开展，
              祝福您与家人平安喜乐。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
