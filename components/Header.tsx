"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-oxfordBlue border-b border-gray-300">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto py-4 px-6 lg:py-8">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            {/* 大屏 logo */}
            <div className="hidden lg:block">
              <Image
                src="/logoHorizantalBlue.png"
                alt="VGBC Logo"
                height={60}
                width={200}
                style={{ height: "60px", width: "auto" }}
                priority
              />
            </div>
            {/* 小屏 logo */}
            <div className="block lg:hidden">
              <Image
                src="/logoNewBlue.png"
                alt="VGBC Logo Small"
                height={50}
                width={50}
                style={{ height: "50px", width: "auto" }}
                priority
              />
            </div>
          </div>
        </Link>

        {/* 导航（大屏） */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/about">VGBC介绍</Link>
          <Link href="/service">事工</Link>
          <Link href="/sermons">视频</Link>
          {/* <Link href="/new">新朋友</Link> */}
          <Link href="/giving">奉献</Link>
          <Link href="/find">联系我们</Link>
        </nav>

        {/* 注册按钮（大屏） */}
        <div className="hidden lg:block">
          <Link
            href="#"
            className="bg-white text-oxfordBlue px-4 py-2 rounded hover:bg-gray-200"
          >
            注册
          </Link>
        </div>

        {/* 汉堡菜单按钮（小屏） */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={40} /> : <HiMenu size={40} />}
          </button>
        </div>
      </div>

      {/* 小屏展开菜单 */}
      {/* 小屏展开菜单 */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center space-y-6">
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-medium"
          >
            VGBC介绍
          </Link>
          <Link
            href="/service"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-medium"
          >
            事工
          </Link>
          <Link
            href="/sermons"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-medium"
          >
            视频
          </Link>
          {/* <Link
            href="/new"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-medium"
          >
            新朋友
          </Link> */}
          <Link
            href="/giving"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-medium"
          >
            奉献
          </Link>
          <Link
            href="/find"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-medium"
          >
            联系我们
          </Link>
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="bg-white text-oxfordBlue px-6 py-2 rounded border border-oxfordBlue hover:bg-gray-100"
          >
            注册
          </Link>
        </div>
      )}
    </header>
  );
}
