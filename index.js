function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
const button = document.getElementById("submit").addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Check if all three fields have values
  if (name && email && message) {
    console.log({
      "Name: ": name,
      "Email: ": email,
      "Message: ": message
    });

    alert("Your data has been submitted!");
    // You can add further code here to send the form data to a server or perform any other actions needed.
  } else {
    alert("Please fill in all the required fields.");
  }
}


