import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"张芷境 | Multimodal AI Researcher",description:"张芷境的学术主页。研究方向：多模态大模型后训练、对齐与机器遗忘。",openGraph:{title:"张芷境 | Multimodal AI Researcher",description:"多模态大模型后训练、对齐与机器遗忘研究。",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
