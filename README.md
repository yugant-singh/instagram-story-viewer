#  Instagram-Style Story Viewer
# Live-Demo - https://instagram-story-viewer-three.vercel.app/

A fully functional Instagram-like story viewer built using HTML, CSS, and JavaScript.
It includes a horizontal story list, a fullscreen story viewer, a progress bar animation, and a close button — all designed to mimic the Instagram UX.

 Features
 1. Story List (Top Bar)

* Circular story thumbnails (just like Instagram)
* Horizontal scrolling
* Scroll snap for clean movement
* Smooth touch and mouse scrolling

Active story highlight

 2. Story Viewer (Fullscreen Card)

* Opens when a story is clicked
* Displays the full image
* Progress bar indicates viewing time
* Auto-close when progress completes
* Close (×) button in the top-right corner

 3. Progress Bar Animation

* Animates from 0% → 100%
* Uses setInterval()
* Automatically closes the viewer on completion
* Resets properly on next story click

 4. Next Story Navigation

* Clicking on the story image inside the viewer moves to the next story
* Cycles back to the first story when reaching the end
* How It Works (Logic Overview)
* Story Click Flow

5. User clicks any small story thumbnail

* The story viewer (.story-card) becomes visible
* The main content and video preview are hidden
* The selected image is loaded
* The progress bar starts animating
* When progress reaches 100% → viewer closes

6.  Progress Bar Logic

* Uses a global variable prCount
* Uses a global interval reference prog
* Increases width every 40ms
* Auto-clears interval on completion or close button click
* Prevents memory leaks and double timers

7.  Next Story Switching

* Clicking the large story image increments the index
* Loops back to the first story when reaching the end
👉 Close Button

# Immediately closes the fullscreen viewer

Clears progress
Restores the normal UI

📁 Project Structure
project/
│── index.html         # HTML structure
│── style.css          # All styling
│── script.js          # Story logic
└── stories/           
        ├── image1.jpeg
        ├── image2.jpeg
        ├── ...


You can replace the images inside /stories with your own.