let main = document.querySelector("main");
let card = document.querySelector(".card");
let storiyan = document.querySelector(".storiyan");
let story = document.querySelectorAll(".story");
let storyCard = document.querySelector(".story-card");
let photo = document.querySelector("#photo");
let closeBtn = document.querySelector(".close-btn");
let progress = document.querySelector(".progress");
let frontView = document.querySelector(".front-view");
let like = document.querySelector("#like");
let save = document.querySelector("#save");
let likeCount = document.querySelector("#lCount");
let commentCount = document.querySelector("#cCount");
let count = 0;
let img = document.querySelector(".front-view img");
let centerHeart = document.querySelector("#center-heart");
let stories = [
  "./stories/sarthak bahiya.jpeg",
  "./stories/harsh bhiaya.jpeg",
  "./stories/ayush bhiaya.jpeg",
  "./stories/ankur bhiaya.jpeg",
  "./stories/dhanesh bhaiya.jpeg",
  "./stories/ritik bahiya.jpeg",
  "stories/satwik bhaiya.jpeg"
]
let frontImage = [

  "https://i.pinimg.com/736x/a2/a6/f9/a2a6f95f90f031518b623bd7838e735f.jpg",
  "https://i.pinimg.com/736x/df/01/a5/df01a5e06ceadfd37852f1934c2effed.jpg",
  "https://i.pinimg.com/1200x/27/4c/2c/274c2c25666efca320d1fc9f6b12f661.jpg",
  "https://i.pinimg.com/736x/f1/e8/60/f1e86044a44412ba6703e4afd18b6ed6.jpg",
  "stories/dhanesh bhaiya.jpeg",
  "stories/ayush bhiaya.jpeg",
  "stories/sarthak bahiya.jpeg",
  "stories/satwik bhaiya.jpeg",
  "stories/ritik bahiya.jpeg",
  "https://images.unsplash.com/photo-1763503839418-2b45c3d7a3c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
  "stories/harsh bhiaya.jpeg"

]
let imgIndex = Math.floor(Math.random() * frontImage.length);
let numberOfCmment = Math.floor(Math.random() * 100);
commentCount.textContent = `${numberOfCmment}`;
img.setAttribute("src", `${frontImage[imgIndex]}`);

story.forEach(function (val, index) {

  val.addEventListener("click", function () {
    photo.setAttribute("src", stories[index]);
    storyCard.style.display = "block";
    storiyan.style.display = "none";
    frontView.style.display = "none";
    prCount = 0;
    progress.style.width = `0%`;

    let prog = setInterval(function () {
      prCount++;
      progress.style.width = `${prCount}%`;

      if (prCount >= 100) {
        clearInterval(prog);
        storyCard.style.display = "none";
        storiyan.style.display = "flex";
      }

    }, 40); // 

    setTimeout(function () {
      storyCard.style.display = "none";
      storiyan.style.display = "flex";
      frontView.style.display = "block";
    }, 4000)
  })
})

let currentStory = 0;
photo.addEventListener("click", function () {
  currentStory++;
  if (currentStory >= stories.length) currentStory = 0;

  photo.setAttribute("src", stories[currentStory]);
});


storyCard.classList.add("active");

closeBtn.addEventListener("click", function () {
  storyCard.style.display = "none";
  storiyan.style.display = "flex";
});

like.addEventListener("click", function () {
  if (like.classList.contains("ri-heart-fill")) {
    like.classList.remove("ri-heart-fill");
    like.classList.add("ri-heart-line");
    like.style.color = "black";
    count--;
    likeCount.textContent = count;
  }


  else {
    like.classList.remove("ri-heart-line");
    like.classList.add("ri-heart-fill");
    like.style.color = "red";
    count++;
    likeCount.textContent = count;
    centerHeart.style.opacity = "1";
    setTimeout(() => {
      centerHeart.style.opacity = "0";
    }, 1000);

  }

})


save.addEventListener("click", function () {
  if (save.classList.contains("ri-bookmark-fill")) {
    save.classList.remove("ri-bookmark-fill");
    save.classList.add("ri-bookmark-line");
    save.style.color = "black";

  }


  else {
    save.classList.remove("ri-bookmark-line");
    save.classList.add("ri-bookmark-fill");


  }

})

img.addEventListener("dblclick", function () {
  console.log("dbl click");
  if (like.classList.contains("ri-heart-fill")) {
    like.classList.remove("ri-heart-fill");
    like.classList.add("ri-heart-line");
    like.style.color = "black";
    count--;
    likeCount.textContent = count;
  }


  else {
    like.classList.remove("ri-heart-line");
    like.classList.add("ri-heart-fill");
    like.style.color = "red";
    count++;
    likeCount.textContent = count;
    centerHeart.style.opacity = "1";
    setTimeout(() => {
      centerHeart.style.opacity = "0";
    }, 1000);

  }
})