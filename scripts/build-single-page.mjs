// scripts/build-single-page.mjs
//
// Astro luôn build TOÀN BỘ trang trong src/pages (file-based routing) —
// không có cách nào giới hạn qua astro.config.mjs. Script này:
//   1. Di chuyển mọi trang KHÔNG PHẢI tu-thuat ra khỏi src/pages (tạm thời)
//   2. Thay index.astro bằng 1 trang redirect nhẹ về /tu-thuat/
//   3. Chạy `astro build`
//   4. Khôi phục lại y nguyên src/pages, dù build thành công hay lỗi
//
// Kết quả: dist/ chỉ chứa trang tu-thuat + fragment + sitemap/robots liên quan.
//
// Dùng: npm run build:tu-thuat

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const root = process.cwd();
const pagesDir = path.join(root, 'src/pages');
const backupDir = path.join(os.tmpdir(), `osavn-pages-backup-${Date.now()}`);

// Những gì GIỮ LẠI trong src/pages
const KEEP = new Set(['tu-thuat.astro', 'tu-thuat']);

const REDIRECT_INDEX = `---
// Đảm bảo luôn có dấu "/" giữa base và "tu-thuat/", dù base có hay không có trailing slash
const base = import.meta.env.BASE_URL.replace(/\\/?$/, '/');
return Astro.redirect(\`\${base}tu-thuat/\`, 301);
---
`;

function moveOutUnwanted() {
  fs.mkdirSync(backupDir, { recursive: true });
  const entries = fs.readdirSync(pagesDir);
  for (const entry of entries) {
    if (KEEP.has(entry)) continue;
    fs.renameSync(path.join(pagesDir, entry), path.join(backupDir, entry));
  }
  // Trang chủ tạm thời: redirect thẳng sang /tu-thuat/
  fs.writeFileSync(path.join(pagesDir, 'index.astro'), REDIRECT_INDEX, 'utf8');
}

function restore() {
  // Xoá index.astro redirect tạm (nó không có bản backup vì bị ghi đè, không phải move)
  const tmpIndex = path.join(pagesDir, 'index.astro');
  if (fs.existsSync(tmpIndex)) fs.rmSync(tmpIndex);

  const entries = fs.readdirSync(backupDir);
  for (const entry of entries) {
    fs.renameSync(path.join(backupDir, entry), path.join(pagesDir, entry));
  }
  fs.rmSync(backupDir, { recursive: true, force: true });
}

let exitCode = 0;
try {
  console.log('→ Tạm ẩn các trang khác, chỉ giữ lại tu-thuat...');
  moveOutUnwanted();

  console.log('→ Chạy astro build...');
  const result = spawnSync('npx', ['astro', 'build'], {
    stdio: 'inherit',
    cwd: root,
    shell: process.platform === 'win32',
  });
  exitCode = result.status ?? 1;
} catch (err) {
  console.error(err);
  exitCode = 1;
} finally {
  console.log('→ Khôi phục lại toàn bộ src/pages...');
  restore();
}

process.exit(exitCode);
