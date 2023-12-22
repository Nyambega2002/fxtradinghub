function submitForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
  
    // You can perform additional client-side validation here
  
    // Simulate sending data to the server (replace this with actual AJAX request)
    const data = {
      email,
      phone,
      password
    };
  
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
      // Display a success message or handle errors
      document.getElementById('message').innerHTML = result.message;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  