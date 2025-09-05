document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          form.reset();
          const successModal = new bootstrap.Modal(document.getElementById('successModal'));
          successModal.show();
        } else {
          alert("Sorry, there was a problem sending your message.");
        }
      })
      .catch(error => {
        alert("Sorry, there was a problem sending your message.");
      });
    });
});