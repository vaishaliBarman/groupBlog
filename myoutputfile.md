Here's a breakdown of how to implement this blog platform, along with code examples and explanations.

**1. Project Setup**

* **Create Folders:** 
    * `index.html` - Home page
    * `index2.html` - Signup/Login page
    * `index3.html` - Blog creation/viewing page
    * `styles.css` - CSS styles
    * `styles2.css` - CSS styles for index2
    * `styles3.css` - CSS styles for index3
    * `script.js` - Javascript for index.html
    * `script2.js` - Javascript for index2.html
    * `aditiindex1script.js` - Javascript for index3.html
    * `aditicreate.html` - Page to create a new post.
    * `images` - Folder to store images like logo.
    * `fontvideo.mp4` - Video to play in the background.


* **Basic HTML Structure:**
   * Each HTML file will have a `<header>` for navigation, `<main>` for the content, and a `<footer>`.

**2. Homepage (index.html)**

* **HTML:**
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Our Blog Platform</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="hero">
      <video autoplay loop muted plays-inline class="back-video">
          <source src="fontvideo.mp4" type="video/mp4" />
      </video>
      <nav>
          <img src="./images/logo.png" class="logo" alt="logo" />
          <ul>
              <a href="index2.html">Sign-Up/Login</a>
          </ul>
      </nav>
      <div class="content">
          <h1>Whispers of Words</h1>
          <a href="index2.html" class="explore-button">Explore</a>
      </div>
  </div>
  </body>
  </html>
  ```

* **CSS:**
  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  .hero {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
      rgba(12, 3, 51, 0.3),
      rgba(12, 3, 51, 0.3)
    );
    position: relative;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  nav .logo {
    width: 80px;
  }
  .logo {
    width: 300%; /* Adjust the size as needed */
    height: 100%; /* Make sure width and height are equal */
    border-radius: 100%; /* Creates a circular shape */
    object-fit: cover; /* Ensures the image covers the entire circle */
    display: block; /* Ensures block display */
    margin-left: -5%; /* Centers the image horizontally if needed */
  }

  nav ul {
    list-style: none;
    display: inline-block;
    margin-left: 40px;
  }
  nav ul a {
    text-decoration: none;
    color: whitesmoke;
    font-size: 30px;
  }
  .content {
    text-align: center;
  }
  .content h1 {
    font-size: 160px;
    color: whitesmoke;
    font-weight: 600px;
    transition: color 0.5s;
    animation: color-blink 1.5s infinite; /* Apply blinking effect */
  }
  @keyframes color-blink {
    0% {
      color: #ffb6c1; /* Baby pink */
    }
    50% {
      color: #ffffff; /* White */
    }
    100% {
      color: #ffb6c1; /* Baby pink */
    }
  }

  .content h1:hover {
    -webkit-text-stroke: 5px #f4b7b7;
    color: transparent;
  }
  .explore-button {
text-decoration: none ;
display: inline-block ;
color: rgb(238, 141, 141) ; /* Initial color */
font-size: 45px;
border: 3px solid #e3e2e2 ; /* Border color matching the text */
padding: 14px 70px ;
border-radius: 50px ;
margin-top: 20px ;
animation: light-color-blink 2s infinite ; /* Apply light color-blinking effect */
transition: color 0.5s, border-color 0.5s ; /* Smooth transition for color and border */
}

@keyframes light-color-blink {
0% {
    color: hsl(0, 74%, 74%); /* Light pink */
}
50% {
    color: hsl(0, 66%, 94%); /* Light gray */
}
100% {
    color:  hsl(0, 74%, 74%);/* Light pink */
}
}


.explore-button:hover {
border-color: #f0f0f0; /* Change border color on hover */
color: #f0f0f0; /* Change text color on hover */
}


  .back-video {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
.hero {
    padding: 0 2%; /* Reduced padding for smaller screens */
}

nav .logo {
    width: 60px; /* Adjust logo size */
}

nav ul {
    margin-left: 10px; /* Adjust spacing */
}

nav ul a {
    font-size: 14px; /* Adjust font size */
}

.content h1 {
    font-size: 20vw; /* Larger responsive text */
}

.explore-button {
    font-size: 5vw; /* Larger responsive text */
    padding: 1em 1.5em; /* Adjusted padding */
}
}

@media (min-width: 350) and (max-width: 480px) {
nav .logo {
    width: 40px; /* Further reduce logo size */
}

nav ul {
    margin-left: 5px; /* Further adjusted spacing */
}

nav ul a {
    font-size: 12px; /* Further reduced font size */
}

.content h1 {
    font-size: 30vw; /* Even larger responsive text */
}

.explore-button {
    font-size: 6vw; /* Even larger responsive text */
    padding: 1em 1em; /* Adjusted padding */
}
}
  ```

**3. Signup/Login Page (index2.html)**

* **HTML:**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Login-Signup</title>
       <link rel="stylesheet" type="text/css" href="styles2.css">
   </head>
   <body>
       <div id="main">
           <input type="checkbox" id="check" aria-hidden="true">
           <div class="signup">
               <form id="signup-form" action="#">
                   <label for="check" aria-hidden="true">Sign-Up</label>
                   <div class="details">
                   <input type="text" name="username" placeholder="User-name" required="">
                   <input type="email" name="email" id="email" placeholder="Email" required="">
                   <input type="password" name="password" id="password" placeholder="Password" required="">
                   <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm-password" required="">
                   </div>
                   <button type="submit">Sign-Up</button>
                   <a href="index3.html"></a>
               </form>
           </div>
           <div class="login">
               <form id="login-form" action="#">
                   <label for="check" aria-hidden="true">Login</label>
                   <div class="details">
                   <input type="email" name="email" id="login-email" placeholder="Email Or User name" required="">
                   <input type="password" name="password" id="login-password" placeholder="password" required="">
                   </div>
                   <button type="submit">Login</button>
                   <p>Don't have an account? <a href="index3.html">Create account</a></p>
               </form>
           </div>
       </div>
       <script src="script2.js"></script>
   </body>
   </html>
   ```

* **CSS:**
   ```css
   body{
       /* background-image: url("https://st3.depositphotos.com/13324256/19066/i/450/depositphotos_190669946-stock-photo-green-textured-surface-abstract-background.jpg");
        background-repeat: no-repeat;
        background-size: cover;*/
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-family: sans-serif;
    }
    body::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("https://img.freepik.com/premium-photo/vintage-fountain-pen-aged-paper-with-handwritten-text-against-textured-turquoise-background_653240-15630.jpg");
        background-size: cover;
        filter: blur(10px); /* Adjust the blur radius as needed */
        z-index: -1;
    }
    /*#main{
      width: 600px;
      height: 700px;
      background: rgb(111, 128, 224);
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 5px 30px 50px black;
    }*/
      #main {
        width: 600px;
        height: 700px;
        background-image: url("https://img.freepik.com/premium-photo/vintage-fountain-pen-aged-paper-with-handwritten-text-against-textured-turquoise-background_653240-15630.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 10px 40px 80px  rgba(0, 0, 0, 0.959);
      }
      #check {
        display: none;
    }
    .signup{
        position: relative;
        width: 100%;
        height: 100%;
    }
    /*label{
        color: whitesmoke;
        font-size: 50px;
        justify-content: center;
        display: flex;
        margin: 60px;
        font-weight: bold;
        cursor: pointer;
        transition: .5s ease-in-out;
        margin-bottom: 10px;
    }*/
        label{
        color: #cbf3e5;
        font-size: 50px;
        justify-content: center;
        display: flex;
        margin-top: 50px;
        font-weight: bold;
        cursor: pointer;
        transition: color 0.5s ease-in-out; /* Color transition */
       margin-bottom: 60px;
        animation: colorChange 3s infinite alternate ease-in-out; /* Animation */
    }
   
    /* Define the colorChange animation */
    @keyframes colorChange {
        0% {
            color: rgba(2, 61, 58, 0.959);
        }
        50% {
            color: #025753f5;
        }
        100% {
            color: #046a65f5;
        }
    }
   
        label:hover {
        color: #094737; /* Change color on hover */
      
    }
   
   
    input{
        width: 60%;
        height: 20px;
        font-size: 20px;
        background: #cbf3e5;
        justify-content: center;
        display: flex;
        margin: 20px auto;
        padding: 10px;
        border: none;
        outline: none;
        border-radius: 70px;
    }
    input:hover{
        border: 3px solid #094737;
    }
    button{
        width: 40%;
        height: 50px;
        margin: 40px auto;
        justify-content: center;
        display: block;
        color: #cbf3e5;
        background:  rgba(2, 61, 58, 0.959);
        font-size: 30px;
        font-weight: bold;
        margin-top: 40px;
        outline: none;
        border: none;
        border-radius: 40px;
        transition: .3s ease-in;
        cursor: pointer;
        box-shadow: 5px 20px 40px rgba(2, 85, 81, 0.959);
    }
    button:hover{
        background: #025551f5;
    }
   
    .login{
        height: 1000px;
        background: #cbf3e5;
        border-radius: 60% / 10%;
        transform: translateY(-180px);
        transition: .8s ease-in-out;
    }
    .login h1{
        color: rgba(2, 61, 58, 0.959);
        transform: scale(.6);
    }
    .login p{
        text-align: center;
        padding: 30px;
    }
    #check:checked ~ .login{
        transform: translateY(-500px);
    }
    #check:checked ~ .login label{
        transform: scale(1);
    }
    #check:checked ~ .signup label{
        transform: scale(.6);
    }
   ```

* **JavaScript (script2.js):**
   ```javascript
   // Handle signup form submission
   const signupForm = document.getElementById('signup-form');
   signupForm.addEventListener('submit', (e) => {
       e.preventDefault();
       // Get user data from form fields
       const username = signupForm.elements['username'].value;
       const email = signupForm.elements['email'].value;
       const password = signupForm.elements['password'].value;
       const confirmPassword = signupForm.elements['confirm-password'].value;

       // Validate password match and other fields
       if (password !== confirmPassword) {
           alert('Passwords do not match!');
           return;
       }

       // Store user data in local storage or a database
       // ... (implementation depends on how you want to handle user accounts)

       // Redirect to the next page
       window.location.href = 'index3.html'; // Replace with your actual next page
   });

   // Handle login form submission
   const loginForm = document.getElementById('login-form');
   loginForm.addEventListener('submit', (e) => {
       e.preventDefault();
       // Get login credentials from form fields
       const email = loginForm.elements['email'].value;
       const password = loginForm.elements['password'].value;

       // Validate login credentials (check against stored data)
       // ... (implementation depends on how you handle user authentication)

       // Redirect to the next page if login is successful
       window.location.href = 'index3.html'; // Replace with your actual next page
   });
   ```

**4. Blog Page (index3.html)**

* **HTML:**
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Blog Platform</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"></script>
      <link rel="stylesheet" href="styles3.css">
      <link rel="stylesheet" href="aditiindex1style.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-14HGF9sNO7E1CJ0bCBM+h0mfWwhZcbCoJk8PvT7hCdYdyw/cbbNpHg+T8KtQ1ZLQAMg3rBdKrUji8YkRGo/Hkw=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />
  
  
  </head>
  
  <body>
      <main>
          <!--------------------------Navbar----------------------->
  
          <nav class="navbar navbar-expand-lg custom-navbar fixed-top">
              <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                      <img src="./images/logo.png" class="rounded-circle" alt="logoimage" width="90" height="74">
                  </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                      aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="font-size: 1.3rem;">
                          <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="#">Home</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="aditicreate.html">Create yours</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#recentPosts">Recent Posts</a>
                          </li>
                         
                      </ul><!--
                          <form class="d-flex" role="search">
                          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                          <button class="btn btn-outline-success" type="submit">Search</button>
                      </form>
                      -->
                      
                  </div>
              </div>
          </nav>
          <!----------------------Main Body----------------------->
  
          <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
              <div class="carousel-inner">
                  <!-- Image 1 -->
                  <div class="carousel-item active">
                      <img src="https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/swvuuvdakg2c2iubtuvw"
                          class="d-block w-100" alt="Image 1">
                      <div class="carousel-caption d-none d-md-block">
                          <h5>"Paris 2024: Final Preparations and New Sports Ignite Olympic Excitement"</h5>
                          <p>Paris 2024 is on the horizon, with athletes worldwide finalizing their preparations. The
                              Olympic venues are nearly ready, and excitement is growing for the debut of new sports like
                              breaking and surfing...<a
                                  href="https://www.hindustantimes.com/entertainment/paris-sets-new-trend-as-the-product-placement-olympics-101723300915135.html"><span>Read
                                      More</span></a></p>
                      </div>
                      <div class="mobile-button">
                          <a href="https://www.hindustantimes.com/entertainment/paris-sets-new-trend-as-the-product-placement-olympics-101723300915135.html">Click Here</a>
                      </div>
                  </div>
                  <!-- Image 2 -->
                  <div class="carousel-item">
                      <img src="https://staticimg.amarujala.com/assets/images/2023/07/22/stree-2-stree-2-shooting-begins-stree-2-filming-begins-horror-comedy-rajkummar-rao-shraddha-kap_1690008301.jpeg"
                          class="d-block w-100" alt="Image 2">
                      <div class="carousel-caption d-none d-md-block">
                          <h5>"Bollywood Buzz: Upcoming Blockbusters and Star-Studded Collaborations"</h5>
  
                          <p>
                              Bollywood is buzzing with excitement as several big-ticket films are set to hit theaters
                              soon. Fans are eagerly awaiting the release of much-anticipated movies featuring superstar
                              collaborations and fresh on-screen pairings.....<a
                                  href="https://www.hindustantimes.com/entertainment/bollywood/june-2024-upcoming-movies-kalki-2898-ad-chandu-champion-maharaj-a-quiet-place-day-one-blackout-and-more-101717132456683.html"><span>Read
                                      More</span></a></p>
                      </div>
                      <div class="mobile-button">
                          <a href="https://www.hindustantimes.com/entertainment/bollywood/june-2024-upcoming-movies-kalki-2898-ad-chandu-champion-maharaj-a-quiet-place-day-one-blackout-and-more-101717132456683.html">Click Here</a>
                      </div>
                  </div>
                  <!-- Image 3 -->
                  <div class="carousel-item">
                      <img src="https://w0.peakpx.com/wallpaper/906/311/HD-wallpaper-independence-day-15-august-graph-grapher.jpg"
                          class="d-block w-100" alt="Image 3">
                      <div class="carousel-caption d-none d-md-block">
                          <h5>"Celebrating the Spirit of Freedom: Independence Day 2024"</h5>
                          <p>
                              As we mark another Independence Day, we honor the sacrifices of those who fought for our
                              freedom. This day reminds us of our rich heritage and the values that unite us as a
                              nation....<a
                                  href="https://www.timesnownews.com/travel/destinations/independence-day-2024-all-about-red-fort-the-venue-for-pms-independence-day-speech-article-112419008"><span>Read
                                      More</span></a></p>
                      </div>
                      <div class="mobile-button">
                          <a href="https://www.timesnownews.com/travel/destinations/independence-day-2024-all-about-red-fort-the-venue-for-pms-independence-day-speech-article-112419008">Click Here</a>
                      </div>
                  </div>
                  <!-- Image 4 -->
                  <div class="carousel-item">
                      <img src="https://www.aljazeera.com/wp-content/uploads/2023/08/2023-08-14T114533Z_959269240_RC2LN2A4EVTG_RTRMADP_3_ASIA-WEATHER-INDIA-1692023656.jpg?resize=1920%2C1080"
                          class="d-block w-100" alt="Image 4">
                      <div class="carousel-caption d-none d-md-block">
                          <h5> "Majestic Beauty of Kedarnath: A Spiritual and Scenic Marvel"</h5>
                          <p>
                              Nestled in the Garhwal Himalayas, Kedarnath offers a breathtaking landscape where
                              spirituality and nature converge. Surrounded by snow-capped peaks, the serene beauty of the
                              Mandakini River and the ancient Kedarnath Temple create a tranquil ambiance...<a
                                  href="https://www.thehindu.com/news/national/pm-modi-wayanad-landslide-visit-chooralmala-relief-rehabilitation-review-live-updates/article68508508.ece"><span>Read
                                      More</span></a></p>
                      </div>
                      <div class="mobile-button">
                          <a href="https://www.thehindu.com/news/national/pm-modi-wayanad-landslide-visit-chooralmala-relief-rehabilitation-review-live-updates/article68508508.ece">Click Here</a>
                      </div>
                  </div>
                  <!-- Image 5 -->
                  <div class="carousel-item">
                      <img src="https://i.ytimg.com/vi/bKXVJdVgcKE/maxresdefault.jpg" class="d-block w-100" alt="Image 5">
                      <div class="carousel-caption d-none d-md-block">
                          <h5>"PM Modi Applauds Vinesh Phogat’s Stellar Performance"</h5>
                          <p>Prime Minister Narendra Modi has praised Vinesh Phogat for her remarkable performance at the
                              recent wrestling championships. In his tweet, Modi lauded Phogat's dedication and skill,
                              highlighting her as an inspiration for young athletes across the nation...<a
                                  href="https://www.indiatoday.in/sports/olympics/story/paris-olympics-2024-wrestling-vinesh-phogat-disqualification-appeal-live-case-verdict-cas-2580149-2024-08-10"><span>Read
                                      More</span></a></p>
                      </div>
                      <div class="mobile-button">
                          <a href="https://www.indiatoday.in/sports/olympics/story/paris-olympics-2024-wrestling-vinesh-phogat-disqualification-appeal-live-case-verdict-cas-2580149-2024-08-10">Click Here</a>
                      </div>
                  </div>
                  <!-- Image 6 -->
                  <div class="carousel-item">
                      <img src="https://www.livemint.com/lm-img/img/2024/08/08/1600x900/FMCG_stocks_Stock_market_news_Breakout_stocks_1723103943216_1723103943440.jpg"
                          class="d-block w-100" alt="Image 6">
                      <div class="carousel-caption d-none d-md-block">
                          <h5>"Stock Market Trends: Key Insights for Investors"

                          </h5>
                          <p>The stock market is showing mixed signals as investors navigate economic uncertainties and
                              evolving corporate earnings reports. While tech stocks experience volatility, other sectors
                              like energy and consumer goods are seeing steady growth... <a
                                  href="https://www.thehindubusinessline.com/markets/share-market-nifty-sensex-highlights-9-august-2024/article68501303.ece"><span>Read
                                      More</span></a></p>
                      </div>
                      <div class="mobile-button">
                          <a href="https://www.thehindubusinessline.com/markets/share-market-nifty-sensex-highlights-9-august-2024/article68501303.ece">Click Here</a>
                      </div>
                  </div>
                  <!--Image 7 -->
                  <div class="carousel-item">
                      <img src="https://hindi.news24online.com/wp-content/uploads/2024/08/BANGLADESH-CRISIS-LIVE.jpg"
                          class="d-block w-100" alt="Image 6">
                      <div class="carousel-caption d-none d-md-block">
                          <h5>"Tragic Violence in Bangladesh: Hindu Killings Shock Nation"

                          </h5>
                          <p>Recent violence in Bangladesh has left the nation reeling after a series of attacks on Hindu
                              communities. The tragic incidents have raised serious concerns about religious intolerance
                              and safety...<a
                                  href="https://indianexpress.com/article/world/hundreds-protest-in-dhaka-over-violence-against-hindus-in-bangladesh-9505106/"><span>Read
                                      More</span></a></p>
                      </div>
                      <div class="mobile-button">
                          <a href="https://indianexpress.com/article/world/hundreds-protest-in-dhaka-over-violence-against-hindus-in-bangladesh-9505106/">Click Here</a>
                      </div>
                  </div>
                  <!--Image 8 -->
                  <div class="carousel-item">
                      <img src="https://aimadeimage.net/wp-content/uploads/2024/06/ai_technology_wallpaper-3-c.jpg"
                          class="d-block w-100" alt="Image 6">
                      <div class="carousel-caption d-none d-md-block">
                          <h5>"Tech Giants Unveil Groundbreaking AI Developments at Recent Conference"</h5>
                          <p>At the latest tech conference, major companies showcased their latest advancements in
                              artificial intelligence. Innovations include more powerful AI models with enhanced
                              capabilities in natural language processing and machine learning....<a
                                  href="https://indianexpress.com/section/technology/"><span>Read More</span></a></p>
                      </div>
                      <div class="mobile-button">
                          <a href="https://indianexpress.com/section/technology/">Click Here</a>
                      </div>
                  </div>
                  <!--Image 9 -->
                  <div class="carousel-item">
                      <img src="https://www.cinemamanishi.com/wp-content/uploads/2024/07/image-500.png"
                          class="d-block w-100" alt="Image 6">
                      <div class="carousel-caption d-none d-md-block">
                          <h5>""Celebrating Raksha Bandhan 20