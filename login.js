
function submitLoginForm(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Example: Check if the username and password are correct (replace with your authentication logic)
    var isLoginValid = validateLogin(username, password);
    
    if (isLoginValid) {
      // Redirect to the home page after successful login
      window.location.href = "index.html?username="+username; // Replace "home.html" with your actual home page URL
    } else {
      alert("Invalid username or password");
    }
  }
  
  function validateLogin(username, password) {
    // Example validation logic (replace this with your authentication logic)
    // For demonstration purposes, the username is set to "user" and password to "pass"
    return username === "Vignesh"  && password === "pass";
  }

