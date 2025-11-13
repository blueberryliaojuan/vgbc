// app/api/articles/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // 示例返回
  return NextResponse.json({ message: "Articles API" });
}
