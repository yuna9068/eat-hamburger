let menuIcon = document.querySelector('.menu-icon')
let menu = document.querySelector('.menu')
let menuItemArray = document.querySelectorAll('.menu__item')

// 手機版選單顯示
menuIcon.addEventListener('click', function(){
  this.classList.remove('menu-icon__animation--inactive')
  this.classList.toggle('menu-icon__animation--active')
  menu.classList.toggle('menu--active')
}, false);

// 點擊手機版選單項目後關閉選單
menuItemArray.forEach(menuItem => {
  menuItem.addEventListener('click', ()=>{
    let menuIconDisplay = window.getComputedStyle(menuIcon).display
    if (menuIconDisplay === 'block') {
      menuIcon.click()
    }
  }, false)
});