// 点击商品卡片跳转到详情页（模拟）
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', function () {
    const id = this.getAttribute('data-id');
    alert(`正在跳转到商品详情页... 商品ID: ${id}`);
    // 实际项目中可使用: window.location.href = `/product.html?id=${id}`;
  });
});

// 轮播图（简单自动轮播）
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

setInterval(nextSlide, 5000); // 每5秒切换一次

// 筛选按钮交互
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});