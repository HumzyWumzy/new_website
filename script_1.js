document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Prepare the data to be sent to Google Sheets
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    
    // Send the data using fetch
    fetch('https://script.google.com/macros/s/AKfycbyt6vnTeUxxDSbMjFvue2uiqmp2KDt6mcwNpGJ9MmYfSR5epbbyYkyyiDQhKhYr2F92/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('responseMessage').textContent = 'Form submitted successfully!';
        // Clear the form
        document.getElementById('dataForm').reset();
    })
    .catch(error => {
        document.getElementById('responseMessage').textContent = 'There was an error submitting the form.';
        console.error('Error:', error);
    });
});
