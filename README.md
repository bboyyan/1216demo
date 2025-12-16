# LUMIÈRE SPA 官方網站

> 頂級美胸按摩品牌官網 - 使用 Astro + React + Framer Motion 打造

## 🌟 專案簡介

LUMIÈRE SPA 是一個定位為「頂級、私密、專業」的美胸按摩品牌官方網站。本專案採用現代化的技術堆疊，提供雜誌質感的視覺體驗與流暢的動畫效果。

## 🛠️ 技術堆疊

- **框架**: [Astro](https://astro.build/) v5.16.5
- **UI 庫**: [React](https://react.dev/) v19.2.3
- **動畫**: [Framer Motion](https://www.framer.com/motion/) v12.0.0
- **樣式**: [Tailwind CSS](https://tailwindcss.com/) v4.1.18
- **圖示**: [Lucide React](https://lucide.dev/)
- **語言**: TypeScript

## ✨ 特色功能

### 設計特色
- 🎨 **雜誌風格排版** - 大氣留白、襯線字體、高品質攝影
- 💎 **毛玻璃效果** - Glassmorphism 導覽列與懸浮元件
- 🌊 **流暢動畫** - Framer Motion 驅動的滾動觸發與微互動
- 📱 **完美響應式** - 桌機版圓角卡片容器 / 手機版滿版設計

### 功能亮點
- ⚡ **懸浮預約選單** - 桌機版破格式設計
- 📲 **手機版固定按鈕** - 底部懸浮預約 CTA
- 🎭 **全螢幕選單動畫** - 手機版漢堡選單展開效果
- 🖼️ **畫中畫裝飾** - 品牌理念區的視覺亮點

## 📁 專案結構

```
1216demo/
├── doc/                    # 專案文件
│   ├── PRD.md             # 產品需求文件
│   ├── code.md            # 原始參考程式碼
│   └── plan.md            # 實作計畫
└── src/                   # Astro 專案
    ├── src/
    │   ├── components/    # React 元件
    │   │   ├── Navbar.tsx
    │   │   ├── Hero.tsx
    │   │   ├── Philosophy.tsx
    │   │   ├── SignatureTreatment.tsx
    │   │   ├── Stats.tsx
    │   │   ├── CTA.tsx
    │   │   ├── Footer.tsx
    │   │   └── MobileFloatingBtn.tsx
    │   ├── pages/
    │   │   └── index.astro
    │   └── styles/
    │       └── global.css
    └── public/
```

## 🚀 快速開始

### 安裝依賴

```bash
cd src
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

開啟瀏覽器訪問 [http://localhost:4321](http://localhost:4321)

### 建置生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 🎨 設計系統

### 色彩計畫

| 用途 | 色碼 | 說明 |
|------|------|------|
| 背景色 (外) | `#F2F0EB` | 淺米灰 |
| 背景色 (內) | `#FAFAFA` | 極致白 |
| 文字主色 | `#171717` | 深黑 |
| 文字副色 | `#737373` | 灰色 |
| 品牌強調色 | `#FB7185` | 玫瑰金/粉 |

### 字體規範

- **標題**: Playfair Display (襯線體)
- **內文**: Cormorant Garamond (襯線體)
- **UI**: Sans-serif (系統預設)

## 📱 響應式斷點

- **手機版**: < 768px
- **桌機版**: ≥ 768px

## 📄 授權

© 2024 LUMIÈRE SPA. All Rights Reserved.

## 👨‍💻 開發者

Built with ❤️ by [bboyyan](https://github.com/bboyyan)
