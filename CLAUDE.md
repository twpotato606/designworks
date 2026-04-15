# Claude Code Instructions — designworks

## 設計準則（強制遵守）

**在生成、修改任何 UI 介面、HTML、CSS 或元件之前，必須先閱讀並遵守以下設計準則：**

```
design-guideline/B2B-UX-Portfolio-Design-Guideline.md
```

這份文件是本專案的唯一設計標準來源（Single Source of Truth）。任何視覺或互動決策都必須與其一致。

---

## 生成介面前的強制流程

每次生成或修改 UI 時，依序執行以下步驟：

1. **讀取設計準則**
   - 讀取 `design-guideline/B2B-UX-Portfolio-Design-Guideline.md`
   - 確認該次任務涉及哪些章節（色彩、字型、元件、版型等）

2. **對照準則規格**
   - 色彩：只使用準則第 1 章定義的 token
   - 字型：Archivo（標題）+ Space Grotesk（內文），尺寸依第 2 章 type scale
   - 間距：依第 3 章 spacing token，不自行發明數值
   - 元件：依第 5 章 component library 規格實作
   - 互動：依第 8 章 interaction patterns（scale 僅允許用於 overflow-hidden 圖片容器內）

3. **執行 Pre-Delivery Checklist**
   - 對照準則第 14 章 checklist，逐項確認後才輸出程式碼

---

## 絕對禁止事項

以下行為在任何情況下都不被允許：

- 使用 emoji 作為 UI 圖示（用 Lucide SVG 替代）
- 使用 AI 紫色 / 粉色漸層（`purple`, `pink`, `fuchsia`, `violet` 系列）
- 在可點擊元素上省略 `cursor-pointer`
- 使用 `outline-none` 而不提供替代 focus ring
- body text 小於 16px
- 色彩對比低於 4.5:1（WCAG AA）
- 在 light mode 使用透明度低於 `/80` 的 glass card
- 使用工具 badge 牆或 emoji 裝飾

---

## 快速參照（不需重讀全文時使用）

| 需求 | 規格 |
|------|------|
| 主色 | `#0F172A` (slate-900) |
| CTA / 連結色 | `#0369A1` (sky-700) |
| 背景 | `#F8FAFC` (slate-50) |
| 內文色 | `#020617` (slate-950) |
| 次要文字 | `#475569` (slate-600) |
| 邊框 | `#E2E8F0` (slate-200) |
| 標題字型 | Archivo |
| 內文字型 | Space Grotesk |
| 圓角 | `rounded-xl` (元件), `rounded-lg` (按鈕) |
| 過渡動畫 | `transition-colors duration-150` 或 `duration-200` |
| 容器寬度 | `max-w-7xl` (版面), `max-w-3xl` (內文) |
| 內距 | px-4 (mobile) / px-6 (tablet) / px-8 (desktop) |
| 圖示庫 | Lucide Icons，w-5 h-5，stroke-width 1.5 |
| Z-index 層級 | nav: z-50, modal: z-100, toast: z-200 |

---

## 專案結構

```
designworks/
├── index.html          # 首頁 / 作品集入口
├── civs.html           # Case study — CIVS
├── mdm.html            # Case study — MDM
├── predatorsense.html  # Case study — PredatorSense
├── vision360.html      # Case study — Vision360
├── cv.html             # 履歷頁
├── style.css           # 全域樣式
├── script.js           # 全域腳本
└── design-guideline/
    └── B2B-UX-Portfolio-Design-Guideline.md  ← 設計準則
```

---

## 頁面架構規範

所有頁面遵循準則第 4 章的 section 順序：

**首頁：** Nav → Hero（含 Metrics 嵌入）→ Selected Work → Approach → About → Contact + Footer

**Case Study 頁：** Header (dark) → Challenge → Research → Insights → Design Process → Solution → Outcomes → Next Case Study

---

## 回應規範

- 回應使用繁體中文
- 程式碼輸出使用英文（HTML / CSS / JS）
- 不主動加入設計準則以外的風格或元件
- 修改現有元件前，先閱讀該檔案的當前程式碼
