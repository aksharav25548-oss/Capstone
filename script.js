//   SIMPLE LOGIN (No backend)
const loginBtn = document.getElementById("login");

if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();

        // Dummy login 
        alert("Logged in successfully!");
        window.location.href = "homepage.html";
    });
}


// HOMEPAGE-POSTING TWEETS

const tweetText = document.getElementById("tweet-text");
const postBtn = document.querySelector(".tweet-post-btn");
const tweetFeed = document.getElementById("tweet-feed");