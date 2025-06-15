// 點擊導覽項目滾動到對應區塊
document.addEventListener('DOMContentLoaded', () => {
  // 獲取所有導覽項目和內容區塊
  const aboutNav = document.getElementById('aboutNav');
  const portfolioNav = document.getElementById('portfolioNav');
  const contactNav = document.getElementById('contactNav');
  const menuButton = document.getElementById('menuButton');
  const closeButton = document.getElementById('closeButton');
  const navigationRail = document.getElementById('navigationRail');
  
  const aboutSection = document.getElementById('aboutSection');
  const portfolioSection = document.getElementById('portfolioSection');
  const contactSection = document.getElementById('contactSection');
  
  // 關閉選單的函數
  const closeMenu = () => {
    navigationRail.classList.remove('open');
    // 不需要再顯示menu按鈕，因為它一直都是顯示的
  };

  // 開啟選單的函數
  const openMenu = () => {
    // 先顯示導航欄，但保持在-100%位置
    navigationRail.style.display = 'block';
    // 強制重繪
    navigationRail.offsetHeight;
    // 添加open類，觸發動畫
    navigationRail.classList.add('open');
    // 不再隱藏menu按鈕
  };
  
  // Menu按鈕點擊事件
  menuButton.addEventListener('click', openMenu);

  // 關閉按鈕點擊事件
  closeButton.addEventListener('click', closeMenu);
  
  // 導覽列點擊事件處理 - 滾動到指定區域
  aboutNav.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  });
  
  portfolioNav.addEventListener('click', () => {
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  });
  
  contactNav.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  });
  
  // 監聽滾動事件
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