# Team Taiwan - World No. 1 (台灣隊 - 世界第一)

A multi-language website showcasing Taiwan's "World No. 1" achievements in Industry, Agriculture, Medical, and Sports over the last 200 years.
這是一個展示台灣過去 200 年來在工業、農業、醫療和體育領域「世界第一」成就的多語系網站。

## 🏗 Directory Architecture (目錄結構)

```text
team_taiwan/
├── index.php               # Main landing page (首頁)
├── category.php            # PHP-based category handler (PHP 分類處理)
├── assets/                 # Global assets (全域資源)
│   ├── css/
│   │   ├── style.css       # Global styles (全域樣式)
│   │   └── timeline.css    # Timeline specific styles (時間軸專用樣式)
│   └── js/
│       └── timeline.js     # Timeline logic & sort (時間軸邏輯與排序)
├── config/                 # Site configuration (網站設定)
│   └── config.php          # Smarty & DB config (Smarty 與資料庫設定)
├── Libs/                   # Third-party libraries (第三方函式庫)
│   ├── Parsedown.php       # Markdown parser (Markdown 解析器)
│   └── smarty-5.3.1/       # Smarty Template Engine (Smarty 模板引擎)
├── scripts/                # Utility scripts (工具腳本)
│   └── deploy.sh           # Deployment script (部署腳本)
├── view/                   # Smarty templates (Smarty 模板)
│   ├── header.tpl          # Global header (全域頁首)
│   ├── footer.tpl          # Global footer (全域頁尾)
│   └── index.tpl           # Homepage layout (首頁佈局)
├── [category]/             # Content categories (內容分類)
│   ├── en/                 # English content (英文內容)
│   │   ├── index.html      # Category shell (分類頁面)
│   │   ├── manifest.json   # Event list (事件清單)
│   │   └── [YYYY-MM-DD]/   # Event folder (事件資料夾)
│   │       ├── default.md  # Story content (故事內容)
│   │       └── img/        # Event images (事件圖片)
│   └── tw/                 # Traditional Chinese content (繁體中文內容)
│       ├── index.html
│       ├── manifest.json
│       └── [YYYY-MM-DD]/
│           ├── default.md
│           └── img/
└── .gitignore              # Git ignore rules (Git 忽略規則)
```

## 🚀 Deployment (部署)

To deploy the website to the production server:
要將網站部署到正式伺服器：

```bash
./scripts/deploy.sh
```

The script uses `rsync` to push files to `pi@www:/var/www/html/team_taiwan/` and automatically sets the necessary permissions for the Smarty template engine.
該腳本使用 `rsync` 將檔案推送到 `pi@www:/var/www/html/team_taiwan/`，並自動為 Smarty 模板引擎設定必要的權限。

## 🛠 Features (功能)

- **Interactive Timeline (互動式時間軸)**: Vertical scrolling with sticky date markers and latest-first sorting. (垂直滾動，附帶固定日期標記，且最新事件排在最前。)
- **Multi-language (多語系)**: Full support for Traditional Chinese and English. (完整支援繁體中文與英文。)
- **Markdown-based (基於 Markdown)**: Content is managed via easy-to-edit Markdown files. (內容透過易於編輯的 Markdown 檔案管理。)
- **Dynamic Modal (動態彈窗)**: Detailed stories and images are fetched on-demand. (詳細故事與圖片採隨選讀取。)
