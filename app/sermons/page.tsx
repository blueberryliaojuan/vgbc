"use client";

import useSWR from "swr";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function VideosByCategory() {
  const { data, error } = useSWR("/api/videosByCategory", fetcher);

  if (error) return <div>加载失败</div>;
  if (!data) return <div>加载中…</div>;

  const sectionsOrder = [
    "主日信息",
    "圣经易读学校",
    "威斯敏斯特小要理问答",
    "属天的敬拜",
    "福音布道会",
    "见证分享",
    "2024 圣诞聚会",
  ];

  const latestVideo = data["主日信息"][0];

  return (
    <main className="bg-white font-sans antialiased max-w-[1200px] mx-auto">
      {/* Hero 区 */}
      <section className="hero py-12 px-8 flex flex-col md:flex-row items-center gap-8 bg-greenBackground">
        <div className="flex-1 ">
          <h1 className="text-xl font-bold text-persianGreen mb-4">最新视频</h1>
          <h2 className="text-2xl text-oxfordBlue font-bold mb-4">
            {latestVideo.title}
          </h2>
          <a
            href={`https://www.youtube.com/watch?v=${latestVideo.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            观看视频
          </a>
        </div>
        <div className="flex-1">
          <Image
            src={latestVideo.thumbnail}
            width={480}
            height={270}
            alt={latestVideo.title}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* 视频分类区块 */}
      {sectionsOrder.map((category, index) => {
        const videos = data[category] || [];
        if (videos.length === 0) return null;

        return (
          <section key={category} className="px-8 py-8">
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="relative group px-4 md:px-8">
              {/* 独立按钮：每个swiper都有自己的prev/next */}
              <div
                className={`swiper-button-prev swiper-button-prev-${index}`}
              ></div>
              <div
                className={`swiper-button-next swiper-button-next-${index}`}
              ></div>

              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                navigation={{
                  prevEl: `.swiper-button-prev-${index}`,
                  nextEl: `.swiper-button-next-${index}`,
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {videos.map((video) => (
                  <SwiperSlide key={video.videoId}>
                    <div className="flex flex-col items-center">
                      <a
                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={video.thumbnail}
                          width={320}
                          height={180}
                          alt={video.title}
                          className="rounded-lg"
                        />
                      </a>
                      <p className="mt-2 text-center">{video.title}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        );
      })}
    </main>
  );
}
