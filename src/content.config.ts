import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 2 dạng bài chính: "bai-viet" (article) và "sach" (book) — cùng schema gọn.
const baiViet = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/bai-viet' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      author: z.string().optional(),
      category: z.string().optional(),
      excerpt: z.string().optional(),
      date: z.coerce.date().optional(),
      image: image().optional(),
      heroImage: image().optional(),
      tags: z.array(z.string()).optional().default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const sach = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sach' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      author: z.string().optional(),
      translator: z.string().optional(),
      excerpt: z.string().optional(),
      publishYear: z.string().optional(),
      bookType: z.enum(['spiritual', 'philosophy', 'tu-thuat']).default('spiritual'),
      featured: z.boolean().default(false),
      order: z.number().optional(),
      image: image().optional(),
      draft: z.boolean().default(false),
    }),
});

// Kinh Sách (Bài đọc Giờ Kinh Sách) — nhóm theo mùa phụng vụ
const kinhSach = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/kinh-sach' }),
  schema: () =>
    z.object({
      title: z.string(),
      season: z.string().optional(),
      seasonKey: z.string().optional(),
      source: z.string().optional(),
      excerpt: z.string().optional(),
      liturgy: z.string().optional(),
      rank: z.string().optional(),
      order: z.number().optional(),
      draft: z.boolean().default(false),
    }),
});

const thanhChanPhuoc = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/thanh-chan-phuoc' }),
  schema: () =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      rank: z.enum(['solemn', 'feast', 'memorial', 'none']).default('none'),
      feastDay: z.number().optional(),
      feastMonth: z.number().optional(),
      imageFile: z.string().optional(),
      draft: z.boolean().default(false),
      manualFill: z.boolean().default(false),
    }),
});

const documents = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/documents' }),
  schema: () =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      docType: z.string().optional(),
      lang: z.enum(['vi', 'en']).default('vi'),
      translator: z.string().optional(),
      translatorNote: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const tuThuat = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/tu-thuat' }),
  schema: () =>
    z.object({
      title: z.string(),
      order: z.number(),
      draft: z.boolean().default(false),
    }),
});

const lichSuDong = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lich-su-dong' }),
  schema: () =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      sourceNote: z.string().optional(),
      period: z.string().optional(),
      order: z.number().optional(),
      excerpt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { 'bai-viet': baiViet, sach, 'kinh-sach': kinhSach, 'thanh-chan-phuoc': thanhChanPhuoc, documents, 'tu-thuat': tuThuat, 'lich-su-dong': lichSuDong };
