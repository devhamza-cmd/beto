function checkLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "admin@root.cmd" && password === "1234" && email != "" && password != "") {
      window.open("home.html");
    } else {  
      alert("Incorrect login credentials or empty fields. Please try again.");
    }
  }