"use client";
// import Header from "../components/Header";
// import Contact from "../components/Contact";
import Image from "next/image";
// import Link from "next/link";

export default function HomePage() {
  return (
    <div className="font-sans antialiased max-w-[1200px] mx-auto">
      {/* Hero Section */}
      {/* <section className="bg-platinum text-oxfordBlue text-center py-20">
        <h1 className="text-4xl font-bold mb-4">RGBC</h1>
        <p className="mb-8">敬拜、社区与成长的地方</p>
        <button className="bg-oxfordBlue text-white px-6 py-3 rounded">
          观看视频
        </button>
      </section> */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          {/* 左侧文字 */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-2xl font-bold text-gray-900 mb-4">
              VGBC, 您属灵的家园
            </h1>
            <p className="text-lg text-gray-700 mb-6 mt-12">
              我们的教会致力于传递信仰、服务社区，并帮助每个人在灵性上成长。欢迎加入我们的聚会和活动，经历来自基督的爱。
            </p>
            <button className="bg-oxfordBlue text-white px-4 py-2 rounded">
              了解更多
            </button>

            {/* 统计数据 */}
            {/* <div className="flex flex-wrap gap-6 mt-4 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <span className="text-2xl font-bold text-green-600">300+</span>
                <p className="text-gray-600">聚会/活动</p>
              </div>
              <div className="text-center lg:text-left">
                <span className="text-2xl font-bold text-orange-500">50+</span>
                <p className="text-gray-600">牧师/志愿者</p>
              </div>
              <div className="text-center lg:text-left">
                <span className="text-2xl font-bold text-red-500">1000+</span>
                <p className="text-gray-600">小时讲道/课程</p>
              </div>
            </div> */}
          </div>

          {/* 右侧视频 */}
          <div className="lg:w-1/2 w-full">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/uMWJiD43Ctk?si=3VWCgwvwUYFqx0UC"
                title="VGBC 教会介绍视频"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="bg-greenBackground text-center py-20 px-4">
        <h2 className="text-2xl font-bold mb-4">我们的使命</h2>
        <p className="max-w-3xl mx-auto mb-10">
          我们的使命是分享耶稣基督的爱与福音信息，建立一个欢迎的社区，让人们在信仰中成长，彼此支持，并在爱中同行。
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* 灵命成长 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex-1 flex flex-col items-center">
            <div className="bg-oxfordBlue rounded-full w-16 h-16 flex items-center justify-center mb-4 text-white text-2xl">
              🌱
            </div>
            <h3 className="font-semibold mb-2">灵命成长</h3>
            <p className="text-sm text-gray-700">
              提供属灵指导和团契活动，帮助每个人在信仰中不断成长。
            </p>
          </div>

          {/* 祝福社区 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex-1 flex flex-col items-center">
            <div className="bg-oxfordBlue rounded-full w-16 h-16 flex items-center justify-center mb-4 text-white text-2xl">
              🏘️
            </div>
            <h3 className="font-semibold mb-2">祝福社区</h3>
            <p className="text-sm text-gray-700">
              关心社区需要，开展各类活动，传递爱与温暖。
            </p>
          </div>

          {/* 外展与服务 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex-1 flex flex-col items-center">
            <div className="bg-oxfordBlue rounded-full w-16 h-16 flex items-center justify-center mb-4 text-white text-2xl">
              🤝
            </div>
            <h3 className="font-semibold mb-2">外展与服务</h3>
            <p className="text-sm text-gray-700">
              组织义工和服务项目，把福音和爱带到更多需要的人群。
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section className="bg-white py-16">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                  flex flex-col lg:flex-row items-center gap-12"
        >
          {/* 左侧文字 */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-2xl font-bold text-gray-900 mb-4">
              VGBC的服事
            </h1>
            <p className="text-lg text-gray-700 mb-6 mt-12">
              除了周日敬拜，我们还提供圣经学习小组、青年活动、祷告聚会等，
              帮助您在信仰中成长，建立关系，并互相支持。
            </p>
            <button className="bg-oxfordBlue text-white px-4 py-2 rounded">
              了解更多
            </button>
          </div>

          {/* 右侧图片（视频区域也一样处理） */}
          <div className="lg:w-1/2 w-full">
            <div className="aspect-video w-full">
              <Image
                src="/churchLife/VGBC07.jpg"
                alt="VGBC service"
                width={1920}
                height={1080}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          {/* 左侧文字 */}
          <div className="lg:w-1/2 w-full">
            <div className="aspect-video">
              <Image
                src="/churchLife/VGBC06.jpg"
                alt="VGBC history"
                width={1920}
                height={1080}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>

          {/* 右侧视频 */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-2xl font-bold text-gray-900 mb-4">
              我们的历史
            </h1>
            <p className="text-lg text-gray-700 mb-6 mt-12">
              2001
              年，由五个基督徒家庭在南方浸信会的支持下，在温哥华创立教会。我们的使命是向讲中文的人群分享福音，传播耶稣基督的爱。
            </p>
            <p className="text-lg text-gray-700 mb-6 mt-12">
              在神的恩典下，我们于 2011 年 9 月在 Dunbar
              举行首次敬拜。十年来，我们从小教会成长为稳定发展的社区，感谢神的带领。
            </p>
            <button className="bg-oxfordBlue text-white px-4 py-2 rounded">
              了解更多
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
