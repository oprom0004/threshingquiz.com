# ThreshingQuiz.com - Implementation & Deployment Guide

## 1. 项目概览 (Overview)
本项目为针对顶级奇幻热搜词 **"threshing quiz"**（《Fourth Wing / 第四翼》核心情节）打造的高沉浸感互动测验与社交裂变单页应用 (SPA)。

- **核心域名**：`threshingquiz.com`
- **竞品对照**：`threshingday.com/quiz.html`
- **代码结构**：
  - [index.html](file:///i:/jp/code/threshingquiz.com/index.html)：SEO 优化完整架构、暗黑奇幻双边框布局、Canvas 渲染层。
  - [style.css](file:///i:/jp/code/threshingquiz.com/style.css)：黑曜石与烫金中世纪奇幻风格、动态发光粒子与自适应移动端。
  - [quizzes.js](file:///i:/jp/code/threshingquiz.com/quizzes.js)：三大旗舰测试数据库（龙选节契约测试、异能印记测试、军校分院测试）。
  - [app.js](file:///i:/jp/code/threshingquiz.com/app.js)：答题流状态机、余烬粒子动画、HTML5 Canvas 高清契约证书生成器与一键下载/分享剪贴板功能。

---

## 2. 核心功能矩阵 (Features)

### 2.1 三合一测试引擎 (Triple Quiz Hub)
1. **The Threshing Dragon Bond**（核心旗舰）：测定结契巨龙（黑龙 Tairn、金龙 Andarna、蓝龙 Sgaeyl、绿龙 Feirge 等）。
2. **Awakened Signet Quiz**（异能印记）：测定专属超能力（雷电掌控者、暗影编织者、战局预知、读心者）。
3. **Basgiath Quadrant Placement**（军校阵营）：测定所属分院（骑兵连、抄写员、医师团、步兵团）。

### 2.2 社交裂变爆款点 (Viral Engine)
* **HTML5 Canvas 动态契约海报**：
  * 测试结束后，程序在前端自动实时绘制一张 **800x500 高清中世纪龙骑手结契证书**。
  * 包含专属金色边框、徽章、评级、战斗属性。
  * **一键下载为 PNG 图片**（读者可直接上传至 TikTok #booktok / Instagram Stories / Twitter）。
  * **一键复制分享文案**：“⚔️ I took the Threshing Quiz and bonded with TAIRN! Discover yours at threshingquiz.com”。

### 2.3 零摩擦用户体验 (Zero-Friction UX)
* **无需注册，无需输入邮箱**。
* 秒级加载（零外部大型重量级依赖，纯原生高性能 JavaScript）。
* 带有仪式感的声音与动效：判断结果时的“巨龙审判”符文加载过渡（1.6 秒心理悬念）。

---

## 3. 部署与上线指南 (Deployment)

### 静态托管推荐（免费且极速）：
1. **Cloudflare Pages**：
   * 将 `threshingquiz.com` 仓库推送到 GitHub。
   * 在 Cloudflare Pages 中直接连接仓库发布，开启全站 Edge CDN 加速与 SSL。
2. **Vercel / Netlify**：
   * 直接拖拽目录或 Git Push 上线。

---

## 4. 后续流量扩展与运营建议 (Growth Plan)
1. **TikTok / BookTok 种草**：
   * 录制 15 秒测试并生成海报的过程，配上热门 Fourth Wing 音频（如 *“I do not answer to human customs”* 原声台词）。
   * 话题标签：`#fourthwing #threshingday #threshingquiz #booktok #tairn #xadenriorson`。
2. **变现开启 (Monetization)**：
   * 结果页底部可适时加入 Amazon Associates 推广位（挂《Onyx Storm》等系列新书预售与周边）。
   * 流量突破后申请 Google AdSense。
