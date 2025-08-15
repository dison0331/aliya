"use client";

import { useState, useEffect } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    onClose();
  };

  const menuItems = [
    { id: "hero", label: "首页", icon: "🏠" },
    { id: "explore", label: "游戏世界", icon: "🌌" },
    { id: "features", label: "游戏特色", icon: "⭐" },
    { id: "characters", label: "角色档案", icon: "👥" },
    { id: "gallery", label: "艺术展厅", icon: "🎨" },
    { id: "music", label: "游戏音乐", icon: "🎵" },
    { id: "about", label: "关于游戏", icon: "ℹ️" },
  ];

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 mobile-nav-overlay ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-lg border-l border-orange-500/20 z-50 transform transition-transform duration-300 ease-out mobile-nav-panel ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
          <div
            className={`flex items-center space-x-3 transition-all duration-500 ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: isOpen ? "100ms" : "0ms" }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm glow-icon hover:scale-110 transition-transform">
              A
            </div>
            <div>
              <div className="text-white font-bold text-sm text-glow">彼方的她</div>
              <div className="text-gray-400 text-xs">Aliya</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-700/50 hover:bg-gray-600/50 flex items-center justify-center text-gray-300 hover:text-white transition-all hover:scale-110 hover:rotate-90"
            aria-label="关闭导航菜单"
          >
            ✕
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto p-6">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-800/30 to-gray-700/30 hover:from-orange-500/10 hover:to-orange-400/10 border border-gray-700/30 hover:border-orange-500/30 text-left transition-all duration-300 group transform hover:scale-[1.02] hover:translate-x-1 stagger-animation ${
                  isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
                style={{
                  transitionDelay: isOpen ? `${(index + 1) * 100}ms` : "0ms",
                }}
                aria-label={`导航到${item.label}`}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform glow-icon group-hover:animate-pulse">
                  {item.icon}
                </span>
                <span className="text-gray-300 group-hover:text-white font-medium transition-colors flex-1">
                  {item.label}
                </span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-all transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            ))}
          </div>

          {/* Quick Actions */}
          <div
            className={`mt-8 pt-6 border-t border-gray-700/50 transition-all duration-500 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isOpen ? "800ms" : "0ms" }}
          >
            <h3 className="text-gray-400 text-sm font-medium mb-4 text-glow">快速操作</h3>
            <div className="space-y-3">
              <button
                className="w-full btn-primary text-white font-medium px-4 py-3 text-sm rounded-xl hover:scale-105 transform transition-all"
                aria-label="与Aliya对话"
              >
                与Aliya对话 💬
              </button>
              <button
                className="w-full btn-secondary text-white font-medium px-4 py-3 text-sm rounded-xl hover:scale-105 transform transition-all"
                aria-label="访问Steam商店页面"
              >
                Steam商店页面 🚀
              </button>
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div
          className={`p-6 border-t border-gray-700/50 transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isOpen ? "900ms" : "0ms" }}
        >
          <div className="text-center">
            <p className="text-gray-400 text-xs mb-3 text-glow">
              "宇宙生命之火，重生的爱"
            </p>
            <div className="flex justify-center space-x-3">
              <div
                className="w-6 h-6 bg-gray-700/50 rounded hover:bg-orange-500/20 cursor-pointer transition-all hover:scale-110 hover:rotate-12"
                aria-label="社交媒体链接1"
              ></div>
              <div
                className="w-6 h-6 bg-gray-700/50 rounded hover:bg-orange-500/20 cursor-pointer transition-all hover:scale-110 hover:rotate-12"
                style={{ transitionDelay: "50ms" }}
                aria-label="社交媒体链接2"
              ></div>
              <div
                className="w-6 h-6 bg-gray-700/50 rounded hover:bg-orange-500/20 cursor-pointer transition-all hover:scale-110 hover:rotate-12"
                style={{ transitionDelay: "100ms" }}
                aria-label="社交媒体链接3"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
