function checkLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "hassan" && password === "1234" && email != "" && password != "") {
    window.open("home2.html");
  } 
  else if (email === "hamza" && password === "1234" && email != "" && password != ""){
    window.open("home.html");
  }
  else {  
    alert("Incorrect login credentials or empty fields. Please try again.");
  }

}

document.getElementById("publish").addEventListener("click", function() {
  var firstDiv = document.querySelector(".first");
  var newDiv = document.createElement("div");
  newDiv.classList.add("firstpost");
  newDiv.style.marginTop = "40px";
  newDiv.style.width = "70%";
  newDiv.style.height = "200px";
  newDiv.style.boxShadow = "3px 3px 10px 3px #dddddd";
  newDiv.style.borderRadius = "20px";
  newDiv.style.padding = "20px";

  var infoDiv = document.createElement("div");
  infoDiv.classList.add("info", "d-flex");

  var img = document.createElement("img");
  img.src = "gamer.png";
  img.alt = "";

  var span = document.createElement("span");
  span.classList.add("ps-3");
  span.innerText ="hamza ghazal";

  infoDiv.appendChild(img);
  infoDiv.appendChild(span);
  newDiv.appendChild(infoDiv);

  var inputText = document.querySelector(".getq input").value;
  var qDiv = document.createElement("div");
  qDiv.classList.add("q", "pt-3");
  qDiv.innerText = inputText;
  newDiv.appendChild(qDiv);

  firstDiv.appendChild(newDiv);

      var reactDiv = document.createElement("div");
      reactDiv.classList.add("react", "d-flex", "mt-3", "justify-content-center", "justify-content-around");

      var likeLink = document.createElement("a");
      likeLink.href = "";
      likeLink.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>  Like';
      reactDiv.appendChild(likeLink);
  
      var commentLink = document.createElement("a");
      commentLink.href = "";
      commentLink.innerHTML = '<i class="fa-solid fa-message"></i>  Comment';
      reactDiv.appendChild(commentLink);
  
      var shareLink = document.createElement("a");
      shareLink.href = "";
      shareLink.innerHTML = '<i class="fa-solid fa-share"></i>  Share';
      
      reactDiv.appendChild(shareLink);

      newDiv.appendChild(reactDiv);
  

  var posts = JSON.parse(localStorage.getItem("p")) || [];
  posts.push({
    text: inputText,
    author: "hamza ghazal"
  });
  localStorage.setItem("p", JSON.stringify(posts));
});
window.addEventListener("load", function() {
  var firstDiv = document.querySelector(".first");
  var posts = JSON.parse(localStorage.getItem("p")) || [];

  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];
    var newDiv = document.createElement("div");
    newDiv.classList.add("firstpost");
    newDiv.style.marginTop = "40px";
    newDiv.style.width = "70%";
    newDiv.style.height = "200px";
    newDiv.style.boxShadow = "3px 3px 10px 3px #dddddd";
    newDiv.style.borderRadius = "20px";
    newDiv.style.padding = "20px";

    var infoDiv = document.createElement("div");
    infoDiv.classList.add("info", "d-flex");

    var img = document.createElement("img");
    img.src = "gamer.png";
    img.alt = "";

    var span = document.createElement("span");
    span.classList.add("ps-3");
    span.innerText = post.author;

    infoDiv.appendChild(img);
    infoDiv.appendChild(span);
    newDiv.appendChild(infoDiv);

    var qDiv = document.createElement("div");
    qDiv.classList.add("q", "pt-3");
    qDiv.innerText = post.text;
    var reactDiv = document.createElement("div");
      reactDiv.classList.add("react", "d-flex", "mt-3", "justify-content-center", "justify-content-around");

      var likeLink = document.createElement("a");
      likeLink.href = "";
      likeLink.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>  Like';
      reactDiv.appendChild(likeLink);
  
      var commentLink = document.createElement("a");
      commentLink.href = "";
      commentLink.innerHTML = '<i class="fa-solid fa-message"></i>  Comment';
      reactDiv.appendChild(commentLink);
  
      var shareLink = document.createElement("a");
      shareLink.href = "";
      shareLink.innerHTML = '<i class="fa-solid fa-share"></i>  Share';
      reactDiv.appendChild(shareLink);
      var tfDiv = document.createElement("div");
tfDiv.classList.add("tf");

var input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter text here...";

var button = document.createElement("button");
button.id = "publish";
button.innerText = "Publish";
button.classList.add("submit")


     
      
      
    newDiv.appendChild(qDiv);
    firstDiv.appendChild(newDiv);
    newDiv.appendChild(reactDiv);
    if (span.innerText === "hassan belada") {
      var solution=document.createElement("trueorfalse");
        solution.style.width="100%";
        solution.classList.add("trueorfalse");
        var input = document.createElement("input");
    
        input.type = "text";
        input.placeholder = "Enter text here...";
        input.style.width="70%";
        input.style.padding="5px";
        input.style.borderRadius="20px"
        solution.style.marginTop="10px";
        solution.appendChild(input);
    
        var button = document.createElement("button");
        button.classList.add("submit")
        button.innerText = "Submit";
        solution.appendChild(button);
        newDiv.appendChild(solution)
  }
    
  }
});



  