# 🎨 Product Showcase Feature

## Tổng quan

Phần **Product Showcase** (Gift for roadshow) đã được thiết kế lại với layout chuyên nghiệp:

### Layout mới:

```
┌─────────────────────────────────────────────────┐
│  ┌──────────────┐         ┌─────────────────┐  │
│  │  LEFT SIDE   │         │   RIGHT SIDE    │  │
│  │              │         │                 │  │
│  │  ┌────────┐  │         │  ┌───────────┐  │  │
│  │  │ Title  │  │         │  │           │  │  │
│  │  │  Desc  │  │         │  │   LARGE   │  │
│  │  │ Price  │  │         │  │   IMAGE   │  │
│  │  └────────┘  │         │  │           │  │
│  │              │         │  └───────────┘  │  │
│  │  ┌─┐ ┌─┐    │         │                 │  │
│  │  │1│ │2│    │         │   with badge    │  │
│  │  └─┘ └─┘    │         │                 │  │
│  │  ┌─┐ ┌─┐    │         │                 │  │
│  │  │3│ │4│    │         │                 │  │
│  │  └─┘ └─┘    │         │                 │  │
│  └──────────────┘         └─────────────────┘  │
└─────────────────────────────────────────────────┘
```

## Cấu trúc

### Bên Trái (Left Side):
1. **Product Info Box**
   - Tiêu đề sản phẩm (Product Title)
   - Mô tả chi tiết (Description)
   - Giá (Price)
   - Background gradient với border

2. **Thumbnails Grid**
   - 4 hình ảnh thu nhỏ
   - Grid 2x2 (responsive)
   - Active state với border màu cyan
   - Hover effects

### Bên Phải (Right Side):
1. **Large Image Display**
   - Hình ảnh lớn của sản phẩm được chọn
   - Background gradient xoay
   - Fade-in animation khi đổi hình
   - "Limited Edition" badge

## Tính năng tương tác

### Click vào Thumbnail:
1. ✅ Hình ảnh lớn được cập nhật với fade animation
2. ✅ Title thay đổi theo sản phẩm
3. ✅ Description cập nhật
4. ✅ Price cập nhật
5. ✅ Active border hiển thị trên thumbnail được chọn

### Hover Effects:
- Thumbnails scale up khi hover
- Smooth transitions
- Visual feedback

## Data Structure

Mỗi thumbnail chứa:
```html
<div class="thumbnail" 
     data-title="Product Name"
     data-desc="Product description..."
     data-price="$XX.XX"
     data-image="url">
  <img src="url" alt="Product">
</div>
```

## Sản phẩm hiện tại

### 1. Premium Skateboard Deck
- **Giá**: $89.99
- **Mô tả**: High-quality skateboard deck with unique graphics...

### 2. Street Style Deck
- **Giá**: $79.99
- **Mô tả**: Bold street-style design with vibrant colors...

### 3. Pro Series Deck
- **Giá**: $99.99
- **Mô tả**: Professional-grade skateboard for advanced riders...

### 4. Classic Cruiser Deck
- **Giá**: $69.99
- **Mô tả**: Smooth cruising deck with a timeless design...

## Responsive Design

### Desktop (≥968px):
- 2 columns: Left (info + thumbnails) | Right (large image)
- Ratio: 1 : 1.2
- Thumbnails: 2x2 grid
- Large image sticky position

### Tablet (480px - 967px):
- Stack vertically
- Thumbnails: 4 columns in single row

### Mobile (<480px):
- Stack vertically
- Thumbnails: 2x2 grid
- Reduced padding

## CSS Animations

### 1. Image Transition
```css
@keyframes fadeInImage {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}
```

### 2. Gradient Rotation
```css
@keyframes rotate-gradient {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
```

### 3. Badge Pulse
```css
@keyframes pulse {
    0%, 100% { transform: rotate(5deg) scale(1); }
    50% { transform: rotate(5deg) scale(1.05); }
}
```

## JavaScript Logic

### Main Handler:
```javascript
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // 1. Update active state
        // 2. Get data attributes
        // 3. Fade out current content
        // 4. Update with new data
        // 5. Fade in new content
    });
});
```

### Transitions:
- Image: 250ms fade + scale
- Text: 150ms opacity
- All smooth easing

## Customization

### Thêm sản phẩm mới:

1. **Thêm thumbnail HTML:**
```html
<div class="thumbnail" data-index="4"
     data-title="New Product"
     data-desc="Description here..."
     data-price="$XX.XX"
     data-image="your-image-url.png">
    <img src="your-image-url.png" alt="New Product">
</div>
```

2. **JavaScript tự động nhận diện** - Không cần sửa code JS!

### Đổi màu sắc:

Trong `style.css`:
```css
.thumbnail.active {
    border-color: var(--color-primary); /* Thay đổi */
}

.image-badge {
    background: var(--color-secondary); /* Thay đổi */
}
```

### Đổi layout:

```css
@media (min-width: 968px) {
    .product-showcase {
        grid-template-columns: 1fr 1fr; /* 50/50 */
        /* hoặc */
        grid-template-columns: 1.5fr 1fr; /* 60/40 */
    }
}
```

## Performance

✅ **Optimized:**
- CSS transitions thay vì JavaScript animations
- Smooth 60fps animations
- No layout shifts
- Minimal repaints

✅ **Accessibility:**
- Semantic HTML
- Keyboard navigable (tab through thumbnails)
- Alt text cho images
- Clear focus states

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Files Modified

1. ✅ `index.html` - HTML structure mới
2. ✅ `style.css` - CSS cho layout và animations
3. ✅ `script.js` - Click handlers và transitions

---

**Made with 💙 for RAPTOR X SCATER**
