# SEO Guide - RAPTOR X SCATER Website

## 📋 Tổng quan

Website đã được tối ưu hóa SEO với các thành phần sau:

### ✅ Đã triển khai

1. **Meta Tags**
   - Meta description
   - Meta keywords
   - Meta robots
   - Canonical URL
   - Open Graph tags (Facebook)
   - Twitter Card tags
   - Theme color

2. **Structured Data (JSON-LD)**
   - Organization schema
   - Website schema
   - Contact information
   - Social media links

3. **Heading Structure**
   - H1: Hero title (chính)
   - H2: Section titles (About, Roadshow, Waitlist)
   - H3: Subsection titles (Evolution)
   - H4: Product/Gallery titles
   - H5: Contact/Social titles

4. **Sitemap.xml**
   - Đã tạo file sitemap.xml với tất cả các sections
   - Bao gồm priority và changefreq

5. **Robots.txt**
   - Cho phép tất cả search engines crawl
   - Chỉ định vị trí sitemap

## 🔧 Cần cập nhật

### 1. Thay đổi URL trong các file

Bạn cần thay thế `https://your-username.github.io/your-repo/` bằng URL thực tế của website trong các file sau:

- `index.html` (meta tags, structured data)
- `sitemap.xml` (tất cả các URLs)
- `robots.txt` (sitemap location)

**Ví dụ:**
```html
<!-- Thay đổi từ -->
<link rel="canonical" href="https://your-username.github.io/your-repo/">

<!-- Thành -->
<link rel="canonical" href="https://scaters.co.uk/">
```

### 2. Cập nhật lastmod trong sitemap.xml

Cập nhật ngày `lastmod` trong `sitemap.xml` khi bạn thay đổi nội dung:

```xml
<lastmod>2024-01-15</lastmod>  <!-- Cập nhật ngày hiện tại -->
```

### 3. Thêm alt text cho images

Đảm bảo tất cả images đều có alt text mô tả rõ ràng:

```html
<!-- Tốt -->
<img src="..." alt="RAPTOR X SCATER Premium Skateboard - Evolution Series">

<!-- Không tốt -->
<img src="..." alt="image1">
```

## 📊 Submit lên Search Engines

### Google Search Console

1. Truy cập [Google Search Console](https://search.google.com/search-console)
2. Thêm property (URL của website)
3. Verify ownership
4. Submit sitemap: `https://your-domain.com/sitemap.xml`

### Bing Webmaster Tools

1. Truy cập [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Thêm site
3. Verify ownership
4. Submit sitemap

## 🎯 Best Practices

### Content
- ✅ Sử dụng keywords tự nhiên trong nội dung
- ✅ Viết nội dung chất lượng, hữu ích
- ✅ Cập nhật nội dung thường xuyên

### Technical SEO
- ✅ Mobile-friendly (responsive design)
- ✅ Fast loading time
- ✅ Clean URL structure
- ✅ Proper heading hierarchy
- ✅ Alt text cho images

### Social Media
- ✅ Open Graph tags đã được thêm
- ✅ Twitter Card tags đã được thêm
- ✅ Social media links trong structured data

## 📈 Monitoring

Sau khi deploy, theo dõi:
- Google Search Console: Indexing status, search queries
- Google Analytics: Traffic, user behavior
- PageSpeed Insights: Performance scores

## 🔍 Kiểm tra SEO

Sử dụng các tools sau để kiểm tra:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 📝 Notes

- Sitemap.xml và robots.txt phải được đặt ở root directory
- Đảm bảo cả hai files đều accessible: `https://your-domain.com/sitemap.xml` và `https://your-domain.com/robots.txt`
- Cập nhật sitemap khi thêm/xóa pages mới
