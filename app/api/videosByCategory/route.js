// app/api/videosByCategory/route.js
export async function GET(req) {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = "UCyPYd9QV01Okikic7IlL-Mw"; // 固定频道 ID

    // 1️⃣ 获取频道播放列表
    const plRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&key=${API_KEY}`
    );

    if (!plRes.ok) {
      throw new Error(`获取播放列表失败，状态码: ${plRes.status}`);
    }

    const plData = await plRes.json();
    if (!plData.items || plData.items.length === 0) {
      return new Response(JSON.stringify({ error: "该频道没有播放列表" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = {};

    // 2️⃣ 遍历播放列表，获取每个播放列表的视频
    for (const pl of plData.items) {
      const playlistId = pl.id;
      const categoryTitle = pl.snippet.title;

      const vidRes = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=20&key=${API_KEY}`
      );

      if (!vidRes.ok) continue;

      const vidData = await vidRes.json();

      const videos = (vidData.items || []).map((item) => ({
        videoId: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails?.medium?.url,
      }));

      if (videos.length > 0) {
        result[categoryTitle] = videos;
      }
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
