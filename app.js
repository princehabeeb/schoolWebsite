const menu = document.querySelector('.Menu');
const navItem = document.querySelector('.our-nav');


menu.addEventListener('click', function(){
  if (navItem.classList.contains('show')){
    navItem.classList.remove('show');
  }else{
    navItem.classList.add('show');
  }
})
