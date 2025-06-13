// 點擊導覽項目滾動到對應區塊
document.addEventListener('DOMContentLoaded', () => {
  // 獲取所有導覽項目和內容區塊
  const aboutNav = document.getElementById('aboutNav');
  const portfolioNav = document.getElementById('portfolioNav');
  const contactNav = document.getElementById('contactNav');
  
  const aboutSection = document.getElementById('aboutSection');
  const portfolioSection = document.getElementById('portfolioSection');
  const contactSection = document.getElementById('contactSection');
  
  // 導覽列點擊事件處理 - 滾動到指定區域(不再設置active狀態)
  aboutNav.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
  
  portfolioNav.addEventListener('click', () => {
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
  });
  
  contactNav.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
  
  // 監聽滾動事件，但不再更新導航欄選中狀態
  const mainContent = document.querySelector('.main-content');
  mainContent.addEventListener('scroll', () => {
    // 移除了根據滾動位置更新導航欄選中狀態的代碼
  });
  
  // 檢查元素是否在視窗中(保留以供需要時使用)
  function isElementInViewport(el, container) {
    const rect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    return (
      rect.top >= containerRect.top &&
      rect.top < containerRect.bottom - 100
    );
  }
}); 