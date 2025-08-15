import type { Metadata } from "next";
import { Noto_Sans_SC, Exo_2 } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-sc",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-exo-2",
});

export const metadata: Metadata = {
  title: "彼方的她-Aliya | 1000光年的时空对话",
  description: "一场跨越1000光年的时空对话，在浩瀚宇宙中寻找情感的真实连接。探索Aliya的故事，体验前所未有的科幻互动游戏。Steam 98%好评率，十万玩家热评推荐。",
  keywords: [
    "彼方的她",
    "Aliya",
    "Timelink",
    "科幻游戏",
    "互动小说",
    "时空对话",
    "Steam游戏",
    "视觉小说",
    "睡睡狗工作室",
    "TDGame Studio",
    "角色扮演",
    "情感体验",
    "星际通讯",
    "宇宙",
    "爱情",
    "科学",
  ],
  authors: [{ name: "睡睡狗工作室 (TDGame Studio)" }],
  creator: "睡睡狗工作室 (TDGame Studio)",
  publisher: "Anotherindie",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://same-ia55gj1fl2r-latest.netlify.app",
    siteName: "彼方的她-Aliya",
    title: "彼方的她-Aliya | 1000光年的时空对话",
    description: "一场跨越1000光年的时空对话，在浩瀚宇宙中寻找情感的真实连接。探索Aliya的故事，体验前所未有的科幻互动游戏。",
    images: [
      {
        url: "https://same-ia55gj1fl2r-latest.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "彼方的她-Aliya 游戏宣传图",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "彼方的她-Aliya | 1000光年的时空对话",
    description: "一场跨越1000光年的时空对话，在浩瀚宇宙中寻找情感的真实连接。探索Aliya的故事，体验前所未有的科幻互动游戏。",
    images: ["https://same-ia55gj1fl2r-latest.netlify.app/og-image.jpg"],
    creator: "@TDGameStudio",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ff7b54" },
    { media: "(prefers-color-scheme: dark)", color: "#111b2d" },
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#ff7b54",
      },
    ],
  },
  category: "gaming",
  classification: "游戏",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://same-ia55gj1fl2r-latest.netlify.app"),
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      "en-US": "/en",
    },
  },
  verification: {
    google: "your-google-verification-code", // 需要实际的Google验证码
    yandex: "your-yandex-verification-code", // 需要实际的Yandex验证码
    yahoo: "your-yahoo-verification-code", // 需要实际的Yahoo验证码
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "msapplication-TileColor": "#111b2d",
    "msapplication-config": "/browserconfig.xml",
    "application-name": "彼方的她-Aliya",
    "apple-mobile-web-app-title": "彼方的她",
    "format-detection": "telephone=no",
    "theme-color": "#111b2d",
    "color-scheme": "dark light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="language" content="Chinese" />
        <meta name="geo.region" content="CN" />
        <meta name="geo.placename" content="China" />

        {/* Game-specific meta tags */}
        <meta name="game.title" content="彼方的她-Aliya" />
        <meta name="game.subtitle" content="Timelink" />
        <meta name="game.genre" content="科幻互动小说" />
        <meta name="game.platform" content="PC, Steam" />
        <meta name="game.rating" content="98%" />
        <meta name="game.developer" content="睡睡狗工作室" />
        <meta name="game.publisher" content="Anotherindie" />

        {/* Rich snippets structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: "彼方的她-Aliya",
              alternateName: "Aliya: Timelink",
              description: "一场跨越1000光年的时空对话，在浩瀚宇宙中寻找情感的真实连接。",
              genre: ["科幻", "互动小说", "视觉小说"],
              gamePlatform: ["PC", "Steam"],
              developer: {
                "@type": "Organization",
                name: "睡睡狗工作室",
                alternateName: "TDGame Studio",
              },
              publisher: {
                "@type": "Organization",
                name: "Anotherindie",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "100000",
                bestRating: "5",
                worstRating: "1",
              },
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                price: "39.99",
                priceCurrency: "CNY",
                seller: {
                  "@type": "Organization",
                  name: "Steam",
                },
              },
              datePublished: "2024",
              inLanguage: "zh-CN",
              contentRating: "T",
              applicationCategory: "Game",
              operatingSystem: "Windows",
              image: "https://same-ia55gj1fl2r-latest.netlify.app/og-image.jpg",
              url: "https://same-ia55gj1fl2r-latest.netlify.app",
            }),
          }}
        />

        {/* Website structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "彼方的她-Aliya 官方网站",
              url: "https://same-ia55gj1fl2r-latest.netlify.app",
              description: "彼方的她-Aliya游戏官方网站，了解游戏故事、角色、音乐和艺术作品。",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://same-ia55gj1fl2r-latest.netlify.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <ClientBody className={`${notoSansSC.variable} ${exo2.variable}`}>
        {children}
      </ClientBody>
    </html>
  );
}
