"use client";
import Image from "next/image";

export default function MinistriesPage() {
  return (
    <div className="font-sans antialiased max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Title */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">VGBC 事工介绍</h1>
        <p className="text-lg text-gray-600">
          我们的事工旨在帮助您在信仰中成长、建立属灵连结，
          并在各年龄层与生命阶段中一同经历基督的爱。
        </p>
      </section>

      {/* 主日敬拜 */}
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-24">
        <div className="lg:w-1/2">
          <Image
            src="/churchLife/VGBC11.jpg"
            alt="主日敬拜"
            width={1920}
            height={1080}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="lg:w-1/2 lg:text-left text-center">
          <h2 className="text-3xl font-bold mb-4">主日敬拜</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            每周日，我们聚集一起敬拜神、聆听神的话语，
            并通过祷告与诗歌一同经历神的同在。
            欢迎无论是否有信仰背景，都加入我们的敬拜。
          </p>
          <p className="text-gray-600">时间：每周日下午 15:00</p>
          <p className="text-gray-600">地点：VGBC教会大堂</p>
        </div>
      </section>

      {/* 属天敬拜祷告会 */}
      <section className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-24">
        <div className="lg:w-1/2">
          <Image
            src="/churchLife/VGBC03.jpg"
            alt="属天敬拜祷告会"
            width={1920}
            height={1080}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="lg:w-1/2 lg:text-left text-center">
          <h2 className="text-3xl font-bold mb-4">属天敬拜祷告会</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            我们每周五晚上一同来到神面前，用敬拜、祷告、分享来寻求神的心意。
            这是一个安静又充满能力的时刻，
            无论你是在寻找方向、需要代祷、或想更亲近神，都欢迎参与。
          </p>
          <p className="text-gray-600">时间：每周五 晚上 7:30</p>
          <p className="text-gray-600">地点：VGBC教会大堂</p>
          <p className="text-gray-600">形式：敬拜、代祷、分享、安静在主前</p>
        </div>
      </section>

      {/* alpha课程 */}
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-24">
        <div className="lg:w-1/2">
          <Image
            src="/churchLife/VGBC09.jpg"
            alt="alpha启发课程"
            width={1920}
            height={1080}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="lg:w-1/2 lg:text-left text-center">
          <h2 className="text-3xl font-bold mb-4">alpha启发课程</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            alpha启发课程是为慕道朋友与初信者预备的信仰基础课程，
            帮助您了解基督信仰、圣经的核心信息，并与弟兄姊妹建立连结。
          </p>
          <p className="text-gray-600">
            内容：信仰核心、耶稣是谁、救恩、祷告等
          </p>
          <p className="text-gray-600">时间：周二下午 18:00（每年3期）</p>
          <p className="text-gray-600">地点：VGBC教会大堂</p>
        </div>
      </section>

      {/* 团契小组 */}
      <section className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-24">
        <div className="lg:w-1/2">
          <Image
            src="/churchLife/VGBC12.jpg"
            alt="团契小组"
            width={1920}
            height={1080}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="lg:w-1/2 lg:text-left text-center">
          <h2 className="text-3xl font-bold mb-4">团契小组</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            团契小组是教会生活的重要部分，我们在小组中一起查经、祷告、分享生命，
            并互相支持。适合不同年龄、阶段、兴趣的弟兄姊妹参与。
          </p>
          <p className="text-gray-600">形式：查经 / 分享 / 活动 / 祷告</p>
          <p className="text-gray-600">时间：</p>
          <p className="text-gray-600">地点：</p>
        </div>
      </section>

      {/* 青少年主日学 */}
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-24">
        <div className="lg:w-1/2">
          <Image
            src="/churchLife/VGBC05.jpg"
            alt="青少年主日学"
            width={1920}
            height={1080}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="lg:w-1/2 lg:text-left text-center">
          <h2 className="text-3xl font-bold mb-4">青少年主日学</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            我们关心青少年的属灵成长与生命发展，
            主日学为他们提供扎根圣经、建立品格、建立信仰的环境。
          </p>
          <p className="text-gray-600">对象：中学阶段学生</p>
          <p className="text-gray-600">时间：每周日下午 15:00</p>
          <p className="text-gray-600">地点：VGBC教会主日学教室</p>
        </div>
      </section>

      {/* 儿童主日学 */}
      <section className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-24">
        <div className="lg:w-1/2">
          <Image
            src="/churchLife/VGBC05.jpg"
            alt="儿童主日学"
            width={1920}
            height={1080}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="lg:w-1/2 lg:text-left text-center">
          <h2 className="text-3xl font-bold mb-4">儿童主日学</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            儿童是神宝贵的礼物，我们为不同年龄的孩子准备了活泼、有趣、
            以圣经为中心的课程，帮助孩子从小认识并经历神。
          </p>
          <p className="text-gray-600">对象：学龄前至小学</p>
          <p className="text-gray-600">时间：每周日下午 15:00</p>
          <p className="text-gray-600">地点：VGBC教会主日学教室</p>
        </div>
      </section>
    </div>
  );
}
