

/* ----------------- Modal Js ----------------- */
const button = document.querySelector('.nav__btn a');
const modalWrapper = document.querySelector('.modal-wrapper');
const closeModalButton = document.querySelector('.close-modal');
const contactus = document.querySelector('#contact-us-btn');

button.addEventListener('click', function(event) {
  event.preventDefault();
  modalWrapper.style.display = 'block';
});

contactus.addEventListener('click', function(event) {
  event.preventDefault();
  modalWrapper.style.display = 'block';
}
);

closeModalButton.addEventListener('click', function() {
  modalWrapper.style.display = 'none';
});

//   const openModalBtn = document.querySelector('#contact-us-btn');
//   const closeModalBtn = document.querySelector('.close-modal');

//   openModalBtn.addEventListener('click', (event) => {
//       event.preventDefault();
//       modalWrapper.classList.add('show');
//   });

//   closeModalBtn.addEventListener('click', () => {
//       modalWrapper.classList.remove('show');
//   });

//   // Close modal when clicking outside of it
//   window.addEventListener('click', (event) => {
//       if (event.target === modalWrapper) {
//           modalWrapper.classList.remove('show');
//       }
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('videoModal');
  const videoLinks = document.querySelectorAll('.video-link');
  const closeBtn = document.querySelector('.close');

  videoLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          modal.style.display = 'block';
      });
  });

  closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });
});


