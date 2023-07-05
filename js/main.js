// Кнопка придбати
const buttons = document.querySelectorAll('.item__btn');

const handleClick = (event) => {
   alert('Товар придбано', event.target);
   location.reload()
}

buttons.forEach(button => {
   button.addEventListener('click', handleClick);
});

///////////////////////////////////////////////////////////////
const navbarLinks = document.querySelectorAll('.navbar__link');
const openSections = document.querySelectorAll('.wear__item');

navbarLinks.forEach((link, index) => {
   link.addEventListener('click', () => {
      openSections.forEach((section, sectionIndex) => {
         if (index === sectionIndex) {
            section.classList.toggle('active');
         } else {
            section.classList.remove('active');
         }
      });
   });
});

////////////////////////////////////////////////////////////

const itemImages = document.querySelectorAll('.item__image');
const itemDescriptions = document.querySelectorAll('.item__column');

itemImages.forEach((image, index) => {
   image.addEventListener('click', () => {
      itemDescriptions.forEach((description, i) => {
         if (i === index) {
            description.classList.toggle('active');
         } else {
            description.classList.remove('active');
         }
      });
   });
});
//////////////////////////////////////////////////////