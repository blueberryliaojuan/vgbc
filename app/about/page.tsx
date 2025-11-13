import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white font-sans antialiased max-w-[1200px] mx-auto">
      {/* ✅ HERO 区域 */}
      <section className="py-20">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                        flex flex-col lg:flex-row items-center gap-12"
        >
          {/* 左侧文字 */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              欢迎来到 VGBC
            </h1>
            <p className="text-lg text-gray-700">
              温哥华浸信会福音堂是一个以福音为中心、
              以社区为导向的教会。我们渴望每一个来到这里的人
              都能经历上帝的爱、真理与更新。
            </p>
          </div>

          {/* 右侧图片 */}
          <div className="lg:w-1/2 w-full">
            <div className="aspect-video w-full">
              <Image
                src="/churchLife/VGBC10.jpg"
                alt="VGBC Church"
                width={1920}
                height={1080}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 我们是谁 */}
      <section className="bg-greenBackground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">我们是谁</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            VGBC 是一个多元的信仰群体，由来自不同背景、 不同年龄的人组成。
            我们的核心是敬拜、圣经教导、团契生活和社区服务。
            不论你是否有教会背景，我们都欢迎你与我们一同探索信仰。
          </p>
        </div>
      </section>

      {/* 信仰告白 */}
      <section className="bg-greenBackground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">信仰告白</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div
              className="bg-oxfordBlue text-white w-40 h-40 rounded-xl 
                flex items-center justify-center text-lg font-semibold shadow text-center px-4"
            >
              我们相信 圣父、圣子、圣灵 独一真神
            </div>

            <div
              className="bg-oxfordBlue text-white w-40 h-40 rounded-xl 
                flex items-center justify-center text-lg font-semibold shadow text-center px-4"
            >
              我们相信 圣经是 神所默示的话语
            </div>

            <div
              className="bg-oxfordBlue text-white w-40 h-40 rounded-xl 
                flex items-center justify-center text-lg font-semibold shadow text-center px-4"
            >
              我们相信 耶稣基督 是唯一救主
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 核心价值 */}
      <section className="bg-greenBackground py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            我们的核心价值
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-3">敬拜 Worship</h3>
              <p className="text-gray-600">
                我们以真诚与谦卑的心敬拜神， 在赞美中经历祂的同在与更新。
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-3">真理 Truth</h3>
              <p className="text-gray-600">
                圣经是我们信仰与生活的根基， 我们渴望按神的真理而活。
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-3">团契 Fellowship</h3>
              <p className="text-gray-600">
                在爱中连接彼此，互相扶持， 一起走在信仰成长的道路上。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 聚会时间 & 地点（可选） */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            主日聚会时间与地点
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-greenBackground p-8 rounded-2xl shadow text-left">
              <h3 className="text-xl font-semibold mb-2">主日敬拜</h3>
              <p className="text-gray-600">每周日 15:00 PM</p>
            </div>

            <div className="bg-greenBackground p-8 rounded-2xl shadow text-left">
              <h3 className="text-xl font-semibold mb-2">地址</h3>
              <p className="text-gray-600">3320 Crown Street, Vancouver, B.C</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
