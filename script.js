let main = document.querySelector("main");
let card = document.querySelector(".card");
let storiyan = document.querySelector(".storiyan");
let story = document.querySelectorAll(".story");
let storyCard = document.querySelector(".story-card");
let photo = document.querySelector("#photo");
let closeBtn = document.querySelector(".close-btn");
let progress = document.querySelector(".progress");
let frontView = document.querySelector(".front-view");
let stories = [
  "./stories/sarthak bahiya.jpeg",
  "./stories/harsh bhiaya.jpeg",
  "./stories/ayush bhiaya.jpeg",
  "./stories/ankur bhiaya.jpeg",
  "./stories/dhanesh bhaiya.jpeg",
  "./stories/ritik bahiya.jpeg",
  "stories/satwik bhaiya.jpeg"
]

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
