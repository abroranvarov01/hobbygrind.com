import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "dremel-8220",
  "phalanx-rotary-tool",
  "bosch-professional-rotary",
  "proxxon-model-building",
  "makita-rt0701c",
  "wen-2305",
  "ryobi-12v-rotary",
  "workpro-cordless-tool",
  "foredom-k2230",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://vixtron.co")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/products/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("grind", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/vox"],
};
