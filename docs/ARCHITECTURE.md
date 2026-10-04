# threshingquiz.com 战略定位与产品架构设计

## 一、域名定位与流量切入点 (Domain & Traffic Positioning)

### 1. 域名与竞品对比
* **目标域名**：`threshingquiz.com`
  * **域名属性**：绝对核心 EMD (Exact Match Domain)，100% 契合谷歌搜索热搜词 `threshing quiz`。
  * **相比原版优势**：
    * 竞品 `threshingday.com/quiz.html`：属于单活动单落地页，仅有单一的 9 题 Signet Quiz，无社交分享海报生成、无多维度测试矩阵，且域名意图偏综合日历/活动。
    * 我们的 `threshingquiz.com`：打造为 **The Empyrean / Fourth Wing 专属沉浸式奇幻互动测验第一站**。

### 2. 核心用户画像与搜索意图
* **用户群体**：TikTok / BookTok 庞大读者群、Fourth Wing 原著与剧集期待粉、奇幻爱好者（女性占比 >75%，18-35 岁，美加英澳为主）。
* **用户需求**：
  * "Which dragon bonds with me in Threshing?"（龙选节哪条龙和我结契？）
  * "What is my Signet relic power?"（我的神圣异能是什么？）
  * "Who is my Basgiath soulmate?"（我的军校伴侣是谁？）
  * 测完后**必须能一键生成高颜值羊皮纸龙骑手证书海报**，便于发 TikTok / Instagram Stories / Reddit 讨论。

---

## 二、产品架构与模块设计 (Architecture)

### 1. 测验矩阵 (Quiz Hub)
本站采用**单页沉浸式体验 (SPA) + 多测试无缝切换**模式，无需刷新，极速加载：
1. **The Threshing Dragon Bond Quiz (核心旗舰 - 龙选节结契测试)**
   * 测出结契巨龙：Black Daggertail (Tairn/黑龙)、Golden One (Andarna/金龙)、Blue Daggertail (Sgaeyl/蓝龙)、Green Scorpiontail (Feirge/绿龙)、Red Swordtail 等。
2. **The Signet Relic Quiz (异能印记测试)**
   * 测出专属异能：Lightning Wielder (雷电)、Shadow Wielder (暗影)、Battle Foresight (战局预知)、Inntinnsic (心灵读心)、Ice/Fire Wielder 等。
3. **Basgiath Quadrant & Companion Quiz (军校阵营与灵魂伴侣)**
   * Riders Quadrant (骑兵连)、Healers (医师团)、Scribes (抄写员) 以及角色契合度。

### 2. 交互与视觉规范 (Visual & UX)
* **主视觉风格**：Dark Fantasy Gothic / Gold Foil & Parchment（黑曜石龙鳞黑底 `#0d0f12` + 烫金符文金 `#d4af37` / `#f4e3c2` + 龙焰发光效果）。
* **进度感知**：龙息火炬进度条、选项点击动态微震动反馈。
* **终极杀招 - 龙骑手证书 (Rider Bond Certificate)**：
  * 使用 HTML5 Canvas / SVG 动态渲染带有用户昵称、结契龙种、Signet 印记徽章的高清战功海报。
  * 支持一键【Download Certificate】与【Copy Result to Clipboard】。

### 3. SEO 架构与合规
* **TDK 规范**：
  * Title: `Threshing Quiz - What Dragon & Signet Will Choose You? | Fourth Wing Quiz`
  * Description: `Face the dragons at Threshing. Take the free interactive Fourth Wing dragon bonding and signet quiz with instant results and rider certificates. No sign-up required.`
  * 关键词覆盖：`threshing quiz`, `threshing day quiz`, `fourth wing dragon quiz`, `signet quiz`, `fourth wing quiz buzzfeed`.
* **免责声明 (Disclaimer)**：
  * 严谨添加非官方粉丝网站声明，尊重版权，保障网站长期安全运营。

---

## 三、变现与商业化路线 (Monetization Roadmap)
1. **AdSense / 高单价展示广告位预留**：
   * 题目与题目之间的平滑过渡位；
   * 结果揭晓前的“Ritual Calculating”（仪式感等待 1.5 秒）广告位；
2. **Amazon Associates (图书与周边推荐)**：
   * 结果页底部推荐《Fourth Wing》《Iron Flame》《Onyx Storm》豪华精装版与官方衍生周边。
