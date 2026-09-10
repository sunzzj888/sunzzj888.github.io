import { ArrowUpRight, Github, Mail, MapPin } from "lucide-react";

const publications = [
  { venue: "ACL 2026 · Main", title: "SGPVT: Self-Generated Proximal Visual Tokens for Mitigating Collateral Damage in MLLM Unlearning", authors: "张芷境（共同一作）等", summary: "提出自生成近端视觉令牌与双流对抗训练，在完全遗忘目标概念的同时，使近端概念保留准确率提升 3–5%。", links: [{ label: "Paper", href: "https://aclanthology.org/2026.acl-long.442.pdf" }] },
  { venue: "KDD 2027 · Under Review", title: "What to Edit Next: Visually Grounded Follow-up Recommendation for Image Editing", authors: "张芷境（第一作者）等", summary: "构建视觉对齐的多模态追问推荐框架并上线千问 App；14 天 A/B 实验中 CTR +32.70%，图像留存率 +16.32%。", links: [] },
  { venue: "AAAI 2026 · Under Review", title: "SPACE: Source-Free Concept Unlearning for Multimodal Large Language Models", authors: "张芷境（第一作者）等", summary: "提出基于代理的无源概念遗忘范式，在无法访问目标视觉数据时，通过语义锚点与更新方向约束实现有效遗忘。", links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.09868" }] },
];

const experience = [
  ["2026.08 — 至今", "蚂蚁 · 百灵基座大模型", "基座后训练算法实习生 · Agentic RL", "参与 Agent 能力后训练与强化学习对齐，覆盖 40K+ SFT 轨迹、sandbox rollout、过程与结果奖励联合优化。"],
  ["2026.03 — 至今", "阿里巴巴 · 千问事业群", "多模态后训练算法实习生", "负责 Qwen3-VL-8B 图像编辑追问推荐从数据构建、后训练到上线评估的完整链路。"],
  ["2025.02 — 2025.07", "科大讯飞 · 洛阳研究院", "多模态大模型算法实习生", "构建覆盖 70+ 疾病的多模态指令数据，疾病召回率由 33% 提升至 74%。"],
  ["2024.07 — 2025.01", "华为上海研究所", "大模型应用算法实习生 · 代码智能 Agent", "参与百万行级代码库的需求解析、RAG 检索、代码生成与静态校验链路。"],
];

export default function Home() {
  return <>
    <header className="topbar"><a className="brand" href="#home">ZHIJING ZHANG</a><nav aria-label="页面导航"><a href="#home">About</a><a href="#news">News</a><a href="#publications">Publications</a><a href="#experience">Experience</a><a href="#education">Education</a></nav></header>
    <main className="layout" id="home">
      <aside className="profile">
        <div className="portrait" aria-label="张芷境姓名缩写"><span>ZZ</span><i /></div>
        <h1>张芷境</h1><p className="english-name">Zhijing Zhang</p><p className="role">M.S. Student · Southeast University</p>
        <div className="contact-list"><a href="mailto:1213760905@qq.com"><Mail size={16}/> Email</a><span><MapPin size={16}/> Nanjing, China</span><a href="https://github.com/sunzzj888" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a></div>
        <p className="interest-label">Research Interests</p><div className="interests"><span>Multimodal LLMs</span><span>Post-training</span><span>Alignment</span><span>Machine Unlearning</span></div>
      </aside>
      <div className="content">
        <section className="about"><p className="eyebrow">ABOUT ME</p><h2>让多模态模型<br/><em>学会，也懂得忘记。</em></h2><p>我是东南大学计算机技术硕士研究生，研究聚焦于<strong>多模态大模型后训练、对齐与机器遗忘</strong>。我关注如何在提升模型能力的同时，使其知识边界更加可靠，并将研究方法落地到真实的大规模产品中。</p><p>目前，我在蚂蚁百灵基座大模型团队参与 Agentic RL 方向研究，并在阿里巴巴千问事业群开展多模态后训练工作。我也曾在科大讯飞与华为从事多模态模型和代码智能 Agent 研发。</p><div className="availability"><span/> Open to research collaborations</div></section>
        <section id="news"><div className="section-title"><span>01</span><h2>🔥 News</h2></div><ul className="news-list"><li><time>2026.08</time><p>加入蚂蚁百灵基座大模型团队，开展 Agentic RL 与后训练研究。</p></li><li><time>2026.06</time><p><strong>SGPVT</strong> 被 ACL 2026 Main Conference 接收。</p></li><li><time>2026.03</time><p>加入阿里巴巴千问事业群，负责多模态图片编辑追问推荐。</p></li><li><time>2025.11</time><p>获东南大学一等学业奖学金。</p></li></ul></section>
        <section id="publications"><div className="section-title"><span>02</span><h2>📝 Publications</h2></div><div className="publication-list">{publications.map((paper) => <article className="publication" key={paper.title}><div className="pub-mark"><span>{paper.venue.split(" · ")[0]}</span><small>{paper.venue.split(" · ")[1]}</small></div><div><h3>{paper.title}</h3><p className="authors">{paper.authors}</p><div className="paper-links">{paper.links.map(link => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={13}/></a>)}</div><p className="tldr"><strong>TL;DR:</strong> {paper.summary}</p></div></article>)}</div></section>
        <section id="experience"><div className="section-title"><span>03</span><h2>🔬 Research Experience</h2></div><div className="experience-list">{experience.map(item => <article key={item[1]}><time>{item[0]}</time><div><h3>{item[1]}</h3><h4>{item[2]}</h4><p>{item[3]}</p></div></article>)}</div></section>
        <section id="projects"><div className="section-title"><span>04</span><h2>🚀 Selected Project</h2></div><div className="project-card"><div><p className="eyebrow">2023 — 2025 · CORE ALGORITHM LEAD</p><h3>MontageAI</h3><p>全流程自动化视频内容生产 Agent 系统。设计 Vitex 视频形式化描述体系，在 50 万级素材库上实现 82% 精准语义匹配，支持日均 300+ 视频自动化生产。</p></div><dl><div><dt>82%</dt><dd>语义匹配准确率</dd></div><div><dt>−60%</dt><dd>内容制作成本</dd></div></dl></div></section>
        <section id="education"><div className="section-title"><span>05</span><h2>🎓 Education & Honors</h2></div><div className="education-grid"><div><h3>东南大学</h3><p>计算机技术 · 硕士（推免）</p><time>2025.09 — 2028.06</time><p>软件工程 · 学士</p><time>2021.09 — 2025.06</time></div><ul><li><time>2025</time>东南大学一等学业奖学金</li><li><time>2024</time>东南大学至善奖学金</li><li><time>2023</time>全球校园人工智能算法精英大赛 · 国家一等奖</li></ul></div></section>
        <footer><p>© 2026 Zhijing Zhang · Built with curiosity in Nanjing.</p><a href="#home">Back to top ↑</a></footer>
      </div>
    </main>
  </>;
}
