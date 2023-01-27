
var newDiv = document.createElement("div");
newDiv.classList.add("saved-post");

window.addEventListener("load", function() {
  var savedPostsDiv = document.getElementById("saved-posts");
  var posts = JSON.parse(localStorage.getItem("p")) || [];

  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];

    if(post.author == "hamza ghazal"){
      var postAuthor = document.createElement("p");
      var nested=document.createElement("div");
      nested.classList.add("nested");
      var img = document.createElement("img");
      img.src = "gamer.png";
      var postText = document.createElement("p");
      postText.innerText = post.text;
      var span=document.createElement("span")
      span.innerText="Stranger"
      var work=document.createElement("div");
      work.classList.add("work");
      var worked=document.createElement("button");
      worked.classList.add("worked");
      worked.innerText="worked"
      var notworked=document.createElement("button");
      notworked.innerText="not worked"
      notworked.classList.add("notworked");
      var reponse=this.document.createElement("div");
      reponse.innerText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      var firstpart=this.document.createElement("div");
      var secondpart=this.document.createElement("div");0
      firstpart.appendChild(postText);
      secondpart.appendChild(img);
      secondpart.appendChild(span);
      work.appendChild(worked);
      work.appendChild(notworked);
      nested.appendChild(firstpart);
      nested.appendChild(secondpart);
      nested.appendChild(reponse);
      nested.appendChild(work);
      savedPostsDiv.appendChild(nested);
      
    }
  }
  
});


