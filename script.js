// Плавное появление секций при прокрутке
const sections = document.querySelectorAll('.content-section');

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
revealSections();

// Изменение фона header при скролле
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Плавный переход при нажатии на кнопки
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}





// Выбор группы при клике
document.querySelectorAll('.group-card').forEach(card => {
  card.addEventListener('click', () => {
    const group = card.getAttribute('data-group');
    document.getElementById('group').value = group;

    // Подсветка выбранной карточки
    document.querySelectorAll('.group-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
  });
});

// Проверка ввода телефона — только +7 и цифры
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', () => {
  // Удаляем все символы, кроме + и цифр
  phoneInput.value = phoneInput.value.replace(/[^+\d]/g, '');

  // Обязательно начинается с +7
  if (!phoneInput.value.startsWith('+7')) {
    phoneInput.value = '+7';
  }

  // Ограничиваем длину до +7 и 10 цифр = 12 символов
  if (phoneInput.value.length > 12) {
    phoneInput.value = phoneInput.value.slice(0, 12);
  }
});

// Проверка перед отправкой
document.querySelector('.apply-form').addEventListener('submit', e => {
  e.preventDefault();

  const phoneValue = phoneInput.value;

  // Проверяем, что введено +7 и ровно 10 цифр после
  const phoneDigits = phoneValue.replace(/\D/g, '');
  if (phoneDigits.length !== 11 || !phoneValue.startsWith('+7')) {
    alert('Пожалуйста, введите корректный номер телефона в формате +7XXXXXXXXXX');
    return;
  }

  alert('✅ Заявка успешно отправлена!');
});




function scrollToApply() {
  document.getElementById('apply').scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollToSection(sectionId) {
  if (sectionId === 'hero') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }

  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Секция с id="${sectionId}" не найдена`);
  }
}


