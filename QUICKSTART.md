# 🎯 QUICK START GUIDE

## ✅ Website đã sẵn sàng!

Tất cả files cần thiết đã được tạo trong thư mục `/Users/tanminhtrinh/Desktop/Ah`:

```
Ah/
├── index.html      ✅ Trang web chính
├── style.css       ✅ Thiết kế và màu sắc
├── script.js       ✅ Tương tác và animations
├── README.md       ✅ Hướng dẫn chi tiết
├── DEPLOY.md       ✅ Hướng dẫn deploy lên GitHub Pages
└── .gitignore      ✅ File Git config
```

---

## 🚀 3 CÁCH SỬ DỤNG

### 1️⃣ XEM NGAY (Đơn giản nhất)

Website đã mở trong trình duyệt của bạn! Nếu chưa:
```bash
cd /Users/tanminhtrinh/Desktop/Ah
open index.html
```

---

### 2️⃣ DEPLOY LÊN GITHUB PAGES (Khuyến nghị)

**Đọc file `DEPLOY.md` để xem hướng dẫn chi tiết!**

**Tóm tắt nhanh:**
1. Tạo repository trên GitHub
2. Chạy lệnh:
```bash
cd /Users/tanminhtrinh/Desktop/Ah
git init
git add .
git commit -m "🎨 Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```
3. Vào Settings → Pages → Chọn branch `main` → Save
4. Website sẽ online sau 1-2 phút!

---

### 3️⃣ CHỈNH SỬA & CUSTOMIZE

**Đổi màu sắc:**
- Mở `style.css`
- Tìm `:root` (dòng 11-28)
- Sửa các giá trị màu:
  ```css
  --color-primary: #00f2fe;      /* Màu cyan */
  --color-secondary: #e4158b;    /* Màu pink */
  --color-dark: #324254;         /* Màu xanh đậm */
  ```

**Đổi nội dung:**
- Mở `index.html`
- Tìm text cần sửa và thay đổi
- Ví dụ: Dòng 68-70 để đổi tiêu đề hero

**Đổi hình ảnh:**
- Tìm các thẻ `<img src="...">`
- Thay URL bằng link hình ảnh của bạn

---

## 📊 TÍNH NĂNG WEBSITE

✨ **Thiết kế:**
- ✅ Responsive 100% (Mobile, Tablet, Desktop)
- ✅ Dark mode navbar khi scroll
- ✅ Animations mượt mà
- ✅ Parallax effects
- ✅ Hover effects trên tất cả elements

🎨 **Sections:**
1. ✅ Hero Section - Banner với slogan
2. ✅ About Section - Giới thiệu brand
3. ✅ Evolution Section - 3 sản phẩm skateboard
4. ✅ Roadshow Section - Lịch trình sự kiện (3 thành phố)
5. ✅ Gallery Section - Tặng phẩm và exclusive products
6. ✅ Waitlist Section - Form đăng ký + Contact info
7. ✅ Footer - Links và credits

🔧 **Tương tác:**
- ✅ Mobile menu hoạt động
- ✅ Smooth scroll giữa các sections
- ✅ Form validation
- ✅ Success message khi submit
- ✅ Event click handlers

📱 **SEO & Sharing:**
- ✅ Meta tags đầy đủ
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Favicon
- ✅ Semantic HTML

---

## 🎓 HỌC THÊM

**Muốn tìm hiểu code?**
- Đọc `README.md` - Hướng dẫn đầy đủ
- Mở files trong VS Code để xem comments
- Mỗi section đều có comments giải thích

**Muốn deploy?**
- Đọc `DEPLOY.md` - Hướng dẫn từng bước deploy lên GitHub Pages

**Cần sửa gì?**
- `index.html` - Thay đổi nội dung, cấu trúc
- `style.css` - Thay đổi màu sắc, fonts, spacing
- `script.js` - Thêm/sửa các tương tác

---

## 🐛 TROUBLESHOOTING

**❓ Website không hiển thị đúng?**
- Đảm bảo tất cả 3 files (HTML, CSS, JS) cùng thư mục
- Xóa cache trình duyệt (Cmd/Ctrl + Shift + R)
- Mở DevTools (F12) xem console có lỗi không

**❓ Hình ảnh không hiển thị?**
- Kiểm tra kết nối internet (hình đang dùng từ URL)
- Nếu muốn dùng hình local: tạo folder `images/` và sửa đường dẫn

**❓ Animations không mượt?**
- Có thể do máy yếu hoặc nhiều tabs mở
- Thử tắt các extensions browser
- Test trên incognito mode

---

## 📞 HỖ TRỢ

Nếu gặp vấn đề:
1. Đọc kỹ `README.md`
2. Đọc kỹ `DEPLOY.md`
3. Google tìm kiếm với từ khóa cụ thể
4. Kiểm tra file có bị sửa nhầm không

---

## 🎉 HOÀN THÀNH!

Website của bạn đã sẵn sàng! 

**Bước tiếp theo:**
1. ✅ Đã xem website → Tuyệt vời!
2. 📝 Tùy chỉnh nội dung theo ý bạn
3. 🚀 Deploy lên GitHub Pages (miễn phí)
4. 🔗 Chia sẻ link với mọi người

**Happy coding! 🛹💙**

---

Made with ❤️ by Google Deepmind
