import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Repo tên "augusinh" (không phải "augusinh.github.io") → đây là PROJECT SITE,
  // phục vụ tại https://augusinh.github.io/augusinh/ chứ không phải root domain.
  site: 'https://augusinh.github.io',
  base: '/augusinh/',

  redirects: {
    '/sach/st-augustine/tu-thuat': '/tu-thuat',
  },
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkRehype: {
      footnoteLabel: 'Chú thích',
      footnoteBackLabel: 'Trở lại nội dung',
    },
  },
  // Lưu ý: Astro tự scan TOÀN BỘ src/pages theo file-based routing.
  // vite.build.rollupOptions.input KHÔNG giới hạn được việc này (không dùng).
  // Muốn build chỉ 1 trang, dùng: npm run build:tu-thuat
  // (xem scripts/build-single-page.mjs) — script tạm ẩn các trang khác
  // trước khi build rồi khôi phục lại ngay sau đó.
});
