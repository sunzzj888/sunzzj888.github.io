# 张芷境 · Academic Homepage

适用于 `username.github.io` 的静态学术主页。

## 发布

1. 在 GitHub 新建名为 `你的用户名.github.io` 的公开仓库。
2. 将本目录内容推送到仓库的 `main` 分支。
3. 在仓库 **Settings → Pages → Build and deployment** 中选择 **GitHub Actions**。
4. 等待 `Deploy to GitHub Pages` 工作流完成，访问 `https://你的用户名.github.io/`。

## 本地运行

```bash
pnpm install
pnpm dev
```

页面内容主要位于 `app/page.tsx`，全局样式位于 `app/globals.css`。
