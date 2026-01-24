# 🛹 RAPTOR X SCATER - Premium Skateboard Website

Một website tĩnh hiện đại về ván trượt với thiết kế đẹp mắt, animations mượt mà và đầy đủ tính năng responsive.

![Preview](https://img.shields.io/badge/Status-Ready%20to%20Deploy-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Tính năng

- 🎨 **Thiết kế hiện đại**: Sử dụng color scheme sống động với cyan, pink và dark tones
- 📱 **Hoàn toàn responsive**: Tương thích với mọi thiết bị từ mobile đến desktop
- ⚡ **Hiệu suất cao**: Website tĩnh, tải nhanh, không cần backend
- 🎭 **Animations mượt mà**: Parallax effects, hover animations, scroll animations
- 🎯 **SEO Optimized**: Meta tags đầy đủ, semantic HTML
- ♿ **Accessibility**: ARIA labels, keyboard navigation support
- 📝 **Form tương tác**: Waitlist form với validation

## 📁 Cấu trúc dự án

```
Ah/
├── index.html          # File HTML chính
├── style.css           # Stylesheet với CSS custom properties
├── script.js           # JavaScript cho tương tác
└── README.md          # File hướng dẫn này
```

## 🚀 Cách chạy locally

### Phương pháp 1: Mở trực tiếp file HTML

1. Mở thư mục `/Users/tanminhtrinh/Desktop/Ah`
2. Double-click vào file `index.html`
3. Website sẽ mở trong trình duyệt mặc định

### Phương pháp 2: Sử dụng Live Server (Khuyến nghị)

Nếu bạn có VS Code:

1. Cài extension "Live Server"
2. Right-click vào `index.html`
3. Chọn "Open with Live Server"

### Phương pháp 3: Sử dụng Python

```bash
cd /Users/tanminhtrinh/Desktop/Ah

# Python 3
python3 -m http.server 8000

# Hoặc Python 2
python -m SimpleHTTPServer 8000
```

Sau đó mở trình duyệt và truy cập: `http://localhost:8000`

## 🌐 Deploy lên GitHub Pages

### Bước 1: Tạo Repository trên GitHub

1. Truy cập [GitHub](https://github.com)
2. Click nút "New repository" (màu xanh lá)
3. Đặt tên repository (ví dụ: `raptor-scater-website`)
4. Chọn "Public"
5. Click "Create repository"

### Bước 2: Upload code lên GitHub

Mở Terminal và chạy các lệnh sau:

```bash
cd /Users/tanminhtrinh/Desktop/Ah

# Khởi tạo Git repository
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit: Raptor x Scater website"

# Thêm remote (thay YOUR_USERNAME và YOUR_REPO bằng thông tin của bạn)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

### Bước 3: Kích hoạt GitHub Pages

1. Truy cập repository trên GitHub
2. Click tab "Settings"
3. Scroll xuống phần "Pages" ở sidebar bên trái
4. Trong "Source", chọn branch `main`
5. Chọn folder `/ (root)`
6. Click "Save"

### Bước 4: Truy cập website

Sau vài phút, website sẽ có tại:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## 🎨 Customization

### Thay đổi màu sắc

Mở file `style.css` và chỉnh sửa CSS custom properties:

```css
:root {
    --color-primary: #00f2fe;      /* Cyan */
    --color-secondary: #e4158b;    /* Pink */
    --color-dark: #324254;         /* Dark blue-gray */
    /* ... */
}
```

### Thay đổi hình ảnh

Tất cả URL hình ảnh đều nằm trong file `index.html`. Bạn có thể:
1. Upload hình ảnh của bạn lên hosting (như Imgur, Cloudinary)
2. Thay thế URL trong các thẻ `<img src="...">`

Hoặc tải hình về local:
1. Tạo thư mục `images/` trong project
2. Download các hình ảnh vào thư mục đó
3. Thay đổi src từ URL sang relative path: `src="images/your-image.png"`

### Thay đổi nội dung

Chỉnh sửa các phần text trong file `index.html`:
- Tiêu đề sections
- Mô tả sản phẩm
- Thông tin liên hệ
- Footer

## 📱 Sections

Website bao gồm các sections:

1. **Hero Section**: Banner chính với animation
2. **About Section**: Giới thiệu về Scaters
3. **Evolution Section**: 3 sản phẩm skateboard series
4. **Roadshow Section**: Lịch trình sự kiện
5. **Gallery Section**: Tặng phẩm và exclusive products
6. **Waitlist Section**: Form đăng ký với thông tin liên hệ
7. **Footer**: Links và credits

## 🛠️ Công nghệ sử dụng

- **HTML5**: Semantic markup, accessibility features
- **CSS3**: 
  - Custom Properties (CSS Variables)
  - Flexbox & Grid Layout
  - Animations & Transitions
  - Media Queries cho responsive
- **JavaScript (Vanilla)**:
  - Smooth scrolling
  - Mobile menu toggle
  - Form handling
  - Intersection Observer API
  - Parallax effects

## 🎯 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

Dự án này được tạo cho mục đích demo. Tất cả hình ảnh thuộc về chủ sở hữu gốc.

## 👨‍💻 Development

Nếu muốn phát triển thêm:

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Vào thư mục
cd YOUR_REPO

# Mở với editor yêu thích
code .
```

## 🐛 Troubleshooting

### Website không hiển thị đúng trên GitHub Pages

1. Kiểm tra tên file phải là `index.html` (chữ thường)
2. Đảm bảo file ở root directory
3. Xóa cache trình duyệt (Ctrl/Cmd + Shift + R)
4. Kiểm tra Console trong DevTools xem có lỗi gì không

### Hình ảnh không hiển thị

1. Kiểm tra URL có chính xác không
2. Thử truy cập trực tiếp URL hình ảnh xem có mở được không
3. Một số hosting có thể block hotlinking - hãy tải hình về local

## 📞 Support

Nếu có vấn đề, hãy tạo Issue trên GitHub repository.

---

**Made with ❤️ and 🛹**

Design inspired by modern skate culture and street aesthetics.
