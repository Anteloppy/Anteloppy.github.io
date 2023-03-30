// получаем элементы для обработки
const imageContainer = document.querySelector('.gallery');
const modal = document.createElement('div');
const modalImage = document.createElement('img');

// добавляем модальное окно в DOM
modal.classList.add('modal');
modal.appendChild(modalImage);
document.body.appendChild(modal);

// добавляем обработчик события на нажатие картинки
imageContainer.addEventListener('click', function() {
  // задаем путь к большому изображению
  const bigImagePath = this.querySelector('img').src;
  modalImage.src = bigImagePath;

  // показываем модальное окно
  modal.style.display = 'block';
});

// добавляем обработчик для закрытия модального окна
modal.addEventListener('click', function() {
  modal.style.display = 'none';
});
