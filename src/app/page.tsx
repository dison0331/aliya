"use client";

import { useState, useEffect } from "react";
import MobileNav from "../components/MobileNav";

export default function Home() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Prevent scroll when mobile nav is open
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMobileNavOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 nav-blur border-b border-white/10 transition-all duration-300 ${
          scrollY > 50 ? "bg-gray-900/95 shadow-lg shadow-black/20" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className={`flex items-center space-x-3 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg glow-icon hover:scale-110 transition-transform cursor-pointer">
                A
              </div>
              <div>
                <div className="text-white font-bold text-lg text-glow">彼方的她</div>
                <div className="text-gray-400 text-xs">1000光年的时空对话</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-orange-400 hover:text-orange-300 font-medium hover:scale-105 transition-all"
              >
                首页
              </button>
              <button
                onClick={() => scrollToSection("explore")}
                className="text-gray-300 hover:text-white flex items-center space-x-1 hover:scale-105 transition-all"
              >
                <span>🌌</span>
                <span>游戏世界</span>
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-300 hover:text-white flex items-center space-x-1 hover:scale-105 transition-all"
              >
                <span>👥</span>
                <span>角色档案</span>
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-300 hover:text-white flex items-center space-x-1 hover:scale-105 transition-all"
              >
                <span>📚</span>
                <span>漫画集</span>
              </button>
              <button
                onClick={() => scrollToSection("music")}
                className="text-gray-300 hover:text-white flex items-center space-x-1 hover:scale-105 transition-all"
              >
                <span>🎵</span>
                <span>游戏音乐</span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white flex items-center space-x-1 hover:scale-105 transition-all"
              >
                <span>ℹ️</span>
                <span>关于游戏</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileNavOpen(true)}
              className="md:hidden w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 flex flex-col items-center justify-center space-y-1 transition-all group"
            >
              <div className="w-5 h-0.5 bg-gray-300 group-hover:bg-orange-400 transition-colors"></div>
              <div className="w-5 h-0.5 bg-gray-300 group-hover:bg-orange-400 transition-colors"></div>
              <div className="w-5 h-0.5 bg-gray-300 group-hover:bg-orange-400 transition-colors"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden hero-pattern min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-20 left-10 w-96 h-96 bg-blue-900/40 rounded-full blur-3xl floating"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-purple-900/30 rounded-full blur-3xl floating"
            style={{animationDelay: "3s", transform: `translateY(${scrollY * -0.05}px)`}}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl floating"
            style={{animationDelay: "1.5s", transform: `translate(-50%, -50%) translateY(${scrollY * 0.08}px)`}}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h1
            className={`text-6xl md:text-7xl font-bold mb-6 gradient-text font-exo transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            彼方的她-Aliya
          </h1>
          <h2
            className={`text-2xl md:text-3xl text-gray-300 mb-8 font-exo text-glow transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Aliya: Timelink
          </h2>
          <p
            className={`text-xl text-gray-400 mb-4 transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            一场跨越 <span className="text-orange-400 font-bold glow-icon">1000光年</span> 的时空对话
          </p>
          <p
            className={`text-lg text-gray-500 mb-12 transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            在浩瀚宇宙中寻找情感的真实连接
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <button className="btn-primary text-white font-medium px-8 py-4 text-lg hover:scale-105 transform transition-all">
              与Aliya对话 💬
            </button>
            <button
              onClick={() => scrollToSection("explore")}
              className="btn-secondary text-white font-medium px-8 py-4 text-lg hover:scale-105 transform transition-all"
            >
              探索游戏世界 🚀
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-gray-500 text-sm mb-4">来访更多更多</p>
          <button
            onClick={() => scrollToSection("explore")}
            className="w-6 h-6 mx-auto bg-orange-500 rounded-full animate-bounce glow-icon hover:scale-110 transition-transform cursor-pointer"
          ></button>
        </div>
      </section>

      {/* Explore World Section */}
      <section id="explore" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-exo text-glow">
            探索彼方的世界
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            深入了解Aliya的故事、世界观和精美的艺术作品
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Character Archives */}
            <div className="feature-card p-8 rounded-2xl group">
              <div className="text-4xl mb-4 glow-icon group-hover:scale-125 transition-transform duration-300">👥</div>
              <h3 className="text-2xl font-bold mb-4 font-exo group-hover:text-orange-400 transition-colors">角色档案</h3>
              <p className="text-gray-400">
                了解Aliya和她的伙伴们的深层故事
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-orange-400 hover:text-orange-300 text-sm font-medium">
                  了解更多 →
                </button>
              </div>
            </div>

            {/* Game World */}
            <div className="feature-card p-8 rounded-2xl group">
              <div className="text-4xl mb-4 glow-icon group-hover:scale-125 transition-transform duration-300">🌌</div>
              <h3 className="text-2xl font-bold mb-4 font-exo group-hover:text-orange-400 transition-colors">游戏世界</h3>
              <p className="text-gray-400">
                探索科幻世界观和五重维度系统
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-orange-400 hover:text-orange-300 text-sm font-medium">
                  了解更多 →
                </button>
              </div>
            </div>

            {/* Art Gallery */}
            <div id="gallery" className="feature-card p-8 rounded-2xl group">
              <div className="text-4xl mb-4 glow-icon group-hover:scale-125 transition-transform duration-300">🎨</div>
              <h3 className="text-2xl font-bold mb-4 font-exo group-hover:text-orange-400 transition-colors">艺术展厅</h3>
              <p className="text-gray-400">
                欣赏高质量CG图片和美术作品
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-orange-400 hover:text-orange-300 text-sm font-medium">
                  了解更多 →
                </button>
              </div>
            </div>

            {/* Game Music */}
            <div id="music" className="feature-card p-8 rounded-2xl group">
              <div className="text-4xl mb-4 glow-icon group-hover:scale-125 transition-transform duration-300">🎵</div>
              <h3 className="text-2xl font-bold mb-4 font-exo group-hover:text-orange-400 transition-colors">游戏音乐</h3>
              <p className="text-gray-400">
                沉浸在理科浪漫主义的音乐世界
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-orange-400 hover:text-orange-300 text-sm font-medium">
                  了解更多 →
                </button>
              </div>
            </div>

            {/* About Game */}
            <div id="about" className="feature-card p-8 rounded-2xl group">
              <div className="text-4xl mb-4 glow-icon group-hover:scale-125 transition-transform duration-300">ℹ️</div>
              <h3 className="text-2xl font-bold mb-4 font-exo group-hover:text-orange-400 transition-colors">关于游戏</h3>
              <p className="text-gray-400">
                了解开发团队和游戏背后的故事
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-orange-400 hover:text-orange-300 text-sm font-medium">
                  了解更多 →
                </button>
              </div>
            </div>

            {/* COSMOS Community */}
            <div className="feature-card p-8 rounded-2xl group">
              <div className="text-4xl mb-4 glow-icon group-hover:scale-125 transition-transform duration-300">🌟</div>
              <h3 className="text-2xl font-bold mb-4 font-exo group-hover:text-orange-400 transition-colors">COSMOS社区</h3>
              <p className="text-gray-400">
                加入玩家社区，分享同人创作
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-orange-400 hover:text-orange-300 text-sm font-medium">
                  了解更多 →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 relative section-curve">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text font-exo">
            为什么选择彼方的她？
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300">
              <div className="text-3xl glow-icon group-hover:scale-110 transition-transform">🚀</div>
              <div>
                <h3 className="text-2xl font-bold mb-3 font-exo group-hover:text-orange-400 transition-colors">创新游戏机制</h3>
                <p className="text-gray-400">
                  现实时间同步的互动设计，前所未有的沉浸感
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300">
              <div className="text-3xl glow-icon group-hover:scale-110 transition-transform">🎨</div>
              <div>
                <h3 className="text-2xl font-bold mb-3 font-exo group-hover:text-orange-400 transition-colors">高品质制作</h3>
                <p className="text-gray-400">
                  精美的CG艺术和治愈系原声音乐
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300">
              <div className="text-3xl glow-icon group-hover:scale-110 transition-transform">💖</div>
              <div>
                <h3 className="text-2xl font-bold mb-3 font-exo group-hover:text-orange-400 transition-colors">深刻情感体验</h3>
                <p className="text-gray-400">
                  上万玩家落泪的故事，跨越时空的真实情感
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300">
              <div className="text-3xl glow-icon group-hover:scale-110 transition-transform">⭐</div>
              <div>
                <h3 className="text-2xl font-bold mb-3 font-exo group-hover:text-orange-400 transition-colors">口碑载道</h3>
                <p className="text-gray-400">
                  Steam 98%好评率，十万玩家热评推荐
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="btn-primary text-white font-medium px-12 py-4 text-xl hover:scale-110 transform transition-all duration-300">
              立即体验游戏 🎮
            </button>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text font-exo">
            角色档案
          </h2>
          <p className="text-xl text-gray-400 mb-16">
            邂逅来自不同时空的伙伴们
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card p-8 rounded-2xl text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                👩‍🚀
              </div>
              <h3 className="text-xl font-bold mb-4 font-exo">Aliya</h3>
              <p className="text-gray-400 text-sm">
                来自1000光年外的神秘少女，承载着文明的希望与爱
              </p>
            </div>

            <div className="feature-card p-8 rounded-2xl text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                🤖
              </div>
              <h3 className="text-xl font-bold mb-4 font-exo">AI助手</h3>
              <p className="text-gray-400 text-sm">
                智能伙伴，帮助你理解跨越时空的复杂科学概念
              </p>
            </div>

            <div className="feature-card p-8 rounded-2xl text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                🧑‍🔬
              </div>
              <h3 className="text-xl font-bold mb-4 font-exo">科学家团队</h3>
              <p className="text-gray-400 text-sm">
                致力于星际通讯研究的顶尖科学家们
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50 bg-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Game Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text font-exo">彼方的她-Aliya</h3>
              <p className="text-gray-400 mb-4">
                一场跨越1000光年的时空对话，
              </p>
              <p className="text-gray-400 mb-6">
                在浩瀚宇宙中寻找情感的真实连接。
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-2xl glow-icon">🚀</div>
                <div>
                  <p className="text-white font-semibold">Steam好评如潮</p>
                  <p className="text-gray-400 text-sm">98%好评率</p>
                </div>
              </div>
            </div>

            {/* Development Team */}
            <div>
              <h3 className="text-xl font-bold mb-6 font-exo">开发团队</h3>
              <div className="space-y-3 text-gray-400">
                <p>睡睡狗工作室 (TDGame Studio)</p>
                <p>发行商：Anotherindie</p>
                <p>音乐：Azure_Lag, 相楠味</p>
                <p>美术：PicPicky, 安九九, 余狗, 470</p>
              </div>
            </div>

            {/* Creator Guide */}
            <div>
              <h3 className="text-xl font-bold mb-6 font-exo">同人创作指引</h3>
              <div className="space-y-3 text-gray-400">
                <p>欢迎创作同人作品</p>
                <p>请尊重原作价值观</p>
                <p>非商业用途自由分享</p>
                <p>商业用途请联系授权</p>
              </div>

              <div className="flex space-x-4 mt-6">
                <div className="w-8 h-8 bg-gray-700/50 rounded hover:bg-gray-600 cursor-pointer transition-all border border-gray-600/50 hover:border-orange-400/50 hover:scale-110"></div>
                <div className="w-8 h-8 bg-gray-700/50 rounded hover:bg-gray-600 cursor-pointer transition-all border border-gray-600/50 hover:border-orange-400/50 hover:scale-110"></div>
                <div className="w-8 h-8 bg-gray-700/50 rounded hover:bg-gray-600 cursor-pointer transition-all border border-gray-600/50 hover:border-orange-400/50 hover:scale-110"></div>
                <div className="w-8 h-8 bg-gray-700/50 rounded hover:bg-gray-600 cursor-pointer transition-all border border-gray-600/50 hover:border-orange-400/50 hover:scale-110"></div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800/50 mt-12 pt-8 text-center">
            <p className="text-gray-500 mb-4">
              © 2024 睡睡狗工作室. 本网站为同人作品展示，非官方网站
            </p>
            <div className="flex justify-center items-center space-x-2 text-gray-600">
              <div className="text-2xl glow-icon">🌟</div>
              <p className="text-sm">"宇宙生命之火，重生的爱"</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              className="btn-secondary text-white font-medium px-6 py-3 hover:scale-105 transition-all"
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              返回顶部 ↑
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
