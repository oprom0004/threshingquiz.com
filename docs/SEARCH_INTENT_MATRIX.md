# 搜索意图与多页面流量承接矩阵 (Search Intent & Landing Page Matrix)

## 一、核心关键词意图与承接方案 (Keyword vs. Architecture)

针对当前《Fourth Wing / Threshing Day》热搜词群，我们采取 **“单核心 EMD 顶级域名 (`threshingquiz.com`) + 专题落地页群 (Topic Landing Pages)”** 架构，零成本吃下全部搜索意图，避免分散外链与域名投资：

| 搜索词 (Keyword) | 核心用户意图 | 承接 URL 路径 | 页面核心卖点与截流策略 |
| :--- | :--- | :--- | :--- |
| **`threshing quiz`**<br>`threshing day quiz` | 寻找龙选节结契互动测验 | `https://threshingquiz.com/` | **首页核心 EMD 承接**：3合1沉浸式测验、动态余烬背景、可定制考生姓名的高清证书海报导出。 |
| **`signet quiz`**<br>`fourth wing signet quiz` | 寻找超能力觉醒测试 | `https://threshingquiz.com/signet-quiz/` | **独立测验内页**：测出雷电、暗影、读心等专属异能，附带 Navarrian 档案图鉴。 |
| **`quadrant quiz`**<br>`basgiath war college quiz` | 寻找军校分院测试 | `https://threshingquiz.com/quadrant-quiz/` | **独立测验内页**：测定骑兵连、抄写员、医师团或步兵团归属。 |
| **`dragonkind game`**<br>`dragonkind rebecca yarros quiz`<br>`dragonkind threshing day game` | 寻找官方 Dragonkind 游戏攻略与入口 | `https://threshingquiz.com/dragonkind-game/` | **攻略与截流页**：深度解构官方 4 分钟被烧死等待机制，提供 **“等官方 CD 期间无需等待的即时重试模拟器”**。 |
| **`fourth wing game online`**<br>`the empyrean game` | 寻找 Fourth Wing 网页版游戏（大类泛词） | `https://threshingquiz.com/fourth-wing-game-online/` | **泛流量聚合页**：集合全套在线可玩模拟器，强调免注册、免等待、全端自适应。 |
| **`fourth wing dragons`**<br>`dragon breeds / tail types` | 寻找原著 6 大颜色与 5 大尾型图鉴 | `https://threshingquiz.com/dragon-codex/` | **百科图鉴内页**：纯正中世纪排版，提供龙种战术级位全解析。 |

---

## 二、Cloudflare Pages 部署结构规范

项目完全采用纯静态 HTML/CSS/JS 构建，无任何构建编译负担（Zero Build Step）：

```text
threshingquiz.com/
│
├── index.html                     # 首页 (EMD: threshing quiz)
├── style.css                      # 全局暗黑奇幻高定样式
├── quizzes.js                     # 完整题库与结果矩阵
├── app.js                         # 交互引擎与 Canvas 证书生成
│
├── signet-quiz/
│   └── index.html                 # /signet-quiz/
│
├── quadrant-quiz/
│   └── index.html                 # /quadrant-quiz/
│
├── dragonkind-game/
│   └── index.html                 # /dragonkind-game/
│
├── fourth-wing-game-online/
│   └── index.html                 # /fourth-wing-game-online/
│
├── dragon-codex/
│   └── index.html                 # /dragon-codex/
│
└── docs/                          # 战略、竞品与架构全套文档
    ├── ARCHITECTURE.md
    ├── COMPETITOR_ANALYSIS.md
    ├── IMPLEMENTATION.md
    └── SEARCH_INTENT_MATRIX.md
```

在 Cloudflare Pages 中直接关联 GitHub 仓库，Build Command 保持为空，Output Directory 设为根目录即可实现秒级极速上线与全球边缘 CDN 分发。
