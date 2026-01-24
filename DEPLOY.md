# 🚀 HƯỚNG DẪN DEPLOY LÊN GITHUB PAGES

## Bước 1️⃣: Tạo tài khoản GitHub (nếu chưa có)
1. Truy cập: https://github.com/signup
2. Đăng ký tài khoản miễn phí

## Bước 2️⃣: Tạo Repository mới
1. Đăng nhập GitHub
2. Click nút **"+"** góc trên bên phải → chọn **"New repository"**
3. Điền thông tin:
   - **Repository name**: `raptor-scater` (hoặc tên bạn thích)
   - **Description**: `Premium skateboard website`
   - Chọn **Public**
   - ❌ KHÔNG tick vào "Add a README file"
4. Click **"Create repository"**

## Bước 3️⃣: Upload code lên GitHub

### Cách 1: Dùng Terminal (Khuyến nghị)

Mở Terminal và chạy từng lệnh sau:

```bash
# Vào thư mục dự án
cd /Users/tanminhtrinh/Desktop/Ah

# Khởi tạo Git
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "🎨 Initial commit: Raptor x Scater website"

# Kết nối với GitHub (THAY YOUR_USERNAME và YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Đổi branch thành main
git branch -M main

# Push lên GitHub
git push -u origin main
```

**LƯU Ý**: Thay `YOUR_USERNAME` bằng username GitHub của bạn và `YOUR_REPO` bằng tên repository bạn vừa tạo.

**Ví dụ**:
```bash
git remote add origin https://github.com/tanminhtrinh/raptor-scater.git
```

### Cách 2: Dùng GitHub Desktop (Dễ hơn)

1. Tải GitHub Desktop: https://desktop.github.com/
2. Đăng nhập vào GitHub
3. File → Add Local Repository
4. Chọn thư mục `/Users/tanminhtrinh/Desktop/Ah`
5. Click "Publish repository"

### Cách 3: Upload trực tiếp trên web

1. Vào repository vừa tạo trên GitHub
2. Click **"uploading an existing file"**
3. Kéo thả hoặc chọn tất cả files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `.gitignore`
4. Click **"Commit changes"**

## Bước 4️⃣: Kích hoạt GitHub Pages

1. Vào repository trên GitHub
2. Click tab **"Settings"** (⚙️)
3. Kéo xuống sidebar bên trái, click **"Pages"**
4. Trong phần **"Source"**:
   - Branch: chọn **`main`**
   - Folder: chọn **`/ (root)`**
5. Click **"Save"**
6. Đợi 1-2 phút

## Bước 5️⃣: Truy cập website 🎉

Website của bạn sẽ có địa chỉ:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

**Ví dụ**: `https://tanminhtrinh.github.io/raptor-scater/`

---

## ⚡ Deploy nhanh trong 2 phút

Copy và paste vào Terminal (nhớ sửa USERNAME và REPO):

```bash
cd /Users/tanminhtrinh/Desktop/Ah && \
git init && \
git add . && \
git commit -m "🎨 Initial commit" && \
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git && \
git branch -M main && \
git push -u origin main
```

Sau đó vào GitHub Settings → Pages → chọn main branch → Save.

---

## 🔄 Cập nhật website sau khi đã deploy

Khi bạn chỉnh sửa code và muốn cập nhật:

```bash
cd /Users/tanminhtrinh/Desktop/Ah
git add .
git commit -m "✨ Update: mô tả thay đổi của bạn"
git push
```

Website sẽ tự động cập nhật sau 1-2 phút!

---

## ❓ Troubleshooting

### ❌ Lỗi: "Permission denied"
- Chưa đăng nhập Git: `git config --global user.email "email@example.com"`
- Chưa xác thực: Tạo Personal Access Token trên GitHub

### ❌ Website không hiển thị
- Đợi thêm 5 phút
- Xóa cache trình duyệt (Ctrl/Cmd + Shift + R)
- Kiểm tra file tên phải là `index.html` (chữ thường)

### ❌ Hình ảnh không hiển thị
- URL hình ảnh bị chặn → tải về local
- Tạo thư mục `images/` và đổi đường dẫn

---

## 📞 Cần trợ giúp?

1. Kiểm tra file README.md để biết thêm chi tiết
2. Google: "github pages not working"
3. Xem GitHub Status: https://www.githubstatus.com/

---

**Chúc bạn deploy thành công! 🎉🛹**
