/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

// when form is sumbited send data to firebase function 
// function sendEmail() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//     const data = {
//       name,
//       email,
//       message
//     };
//     fetch(`https://us-central1-personal-website-bb395.cloudfunctions.net/sendEmail?email=${email}&name=${name}&message=${message}`, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }).then(res => {
//       console.log('Request complete! response:', res);
//     });
//   }
  
//   const form = document.getElementById('contactForm');
//   const button = document.getElementById('sendMessageButton');
  
//   button.addEventListener('sumbit', (e) => {
//     e.preventDefault();
//     sendEmail();
//   });



const button = document.querySelector('#sendMessageButton');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const name = document.querySelector('#name').value;
  const message = document.querySelector('#message').value;
  const url = `https://us-central1-personal-website-bb395.cloudfunctions.net/sendEmail?email=${email}&name=${name}&message=${message}`;
  fetch(url)
  .then(response => {
    if (response.status === 200) {
      console.log('Email sent!');
      document.querySelector('#email').value = '';
      document.querySelector('#name').value = '';
      document.querySelector('#message').value = '';
      window.alert('Email sent successfully!');
    } else {
      console.error('Error sending email:', response.status);
      window.alert('Error sending email. Please try again later.');
    }
  })
  .catch(error => {
    console.error('Error sending email:', error);
    window.alert('Error sending email. Please try again later.');
  });
});


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// const button = document.querySelector('#sendMessageButton');

// button.addEventListener('click', (event) => {
//   event.preventDefault();
//   const email = document.querySelector('#email').value;
//   const name = document.querySelector('#name').value;
//   const message = document.querySelector('#message').value;
//   const url = `https://us-central1-personal-website-bb395.cloudfunctions.net/sendEmail?email=${email}&name=${name}&message=${message}`;
//   fetch(url)
//     .then(response => {
//       if (response.ok) {
//         console.log('Email sent!');

//         // clear form
//         document.querySelector('#email').value = '';
//         document.querySelector('#name').value = '';
//         document.querySelector('#message').value = '';

//       } else {
//         console.error('Error sending email:', response.status);
//       }
//     })
//     .catch(error => {
//       console.error('Error sending email:', error);
//     });
// });














// const form = document.querySelector('contactForm"');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const name = form.elements['name'].value;
//   const email = form.elements['email'].value;
//   const message = form.elements['message'].value;

//   const sendEmail = firebase.functions().httpsCallable('sendEmail');
//   sendEmail({ name, email, message })
//     .then((result) => {
//       console.log(result);
//       alert('Your message was sent successfully!');
//     })
//     .catch((error) => {
//       console.log(error);
//       alert('There was an error sending your message. Please try again later.');
//     });
// });
















//   const form = document.getElementById('contactForm');

//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     sendEmail();
//   });
  


//   function sendEmail() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//     const data = {
//       name,
//       email,
//       message
//     };
//     fetch('https://us-central1-personal-website-bb395.cloudfunctions.net/sendEmail', {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }).then(res => {
//       console.log('Request complete! response:', res);
//     });
//   }
  

  
// get teh current year and add it to the footer
// const year = new Date().getFullYear();
// document.querySelector('#currentYear').textContent = year;








    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
