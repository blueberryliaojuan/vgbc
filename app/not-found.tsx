import React from "react";
import Link from "next/link";
export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-oxfordBlue">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-tomato px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <Link href="/">
          <div className="relative inline-block text-sm font-medium text-tomato group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-tomato group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-oxfordBlue border border-current">
              该页面不存在，请返回主页。
            </span>
          </div>
        </Link>
      </button>
    </main>
  );
}
