(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()


  document.getElementById('contactForm').addEventListener('submit', function (event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '') {
      document.getElementById('nameError').style.display = 'block';
      event.preventDefault();
    } else {
      document.getElementById('nameError').style.display = 'none';
    }

    if (email.trim() === '') {
      document.getElementById('emailError').style.display = 'block';
      event.preventDefault();
    } else {
      document.getElementById('emailError').style.display = 'none';
    }

    if (message.trim() === '') {
      document.getElementById('messageError').style.display = 'block';
      event.preventDefault();
    } else {
      document.getElementById('messageError').style.display = 'none';
    }
  });



  
