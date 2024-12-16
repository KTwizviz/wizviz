import type { Metadata } from "next";
import "../css/index.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
