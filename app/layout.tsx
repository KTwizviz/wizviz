import type { Metadata } from "next";
import "../css/index.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Noto_Sans_KR } from "next/font/google";
import QueryProviders from "@/providers/query-provider";
import Script from "next/script";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kt wiz_wizviz",
  description: "한국 야구의 10번째 심장 kt wiz 야구단 공식 홈페이지",
  icons: {
    icon: "/logo_ktwiz_kr.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        strategy="afterInteractive"
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&libraries=services&autoload=false`} />
      <body className={notoSansKr.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <QueryProviders>{children}</QueryProviders>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
