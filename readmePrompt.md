We have created a blog website named "Our Blog Platform" using HTML, CSS, Bootstrap, and JavaScript. The website initially presents users with a home page (index.html) from where they can navigate to a signup page (index2.html). Upon signing up, users are directed to the next page. If they have already signed up, they can directly log in and proceed to the subsequent page (index3.html). On this page, users have the ability to create and edit their posts, view the latest blogs, and perform various actions such as writing blogs, commenting, and posting content.

index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Front Page</title>
    <link href="styles.css" rel="stylesheet">
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
```CSS

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
```CSS
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
                        <h5>""Celebrating Raksha Bandhan 2024: Strengthening Bonds and Cherishing Traditions""</h5>
                        <p>This Raksha Bandhan, families across India are coming together to celebrate the cherished
                            bond between siblings...<a
                                href="https://timesofindia.indiatimes.com/life-style/events/when-is-raksha-bandhan-date-timings-and-significance-of-rakhi-poornima/articleshow/112381902.cms"><span>Read
                                    More</span></a></p>
                    </div>
                    <div class="mobile-button">
                        <a href="https://timesofindia.indiatimes.com/life-style/events/when-is-raksha-bandhan-date-timings-and-significance-of-rakhi-poornima/articleshow/112381902.cms">Click Here</a>
                    </div>
                </div>
                <!--Image 10 -->
                <div class="carousel-item">
                    <img src="https://newsxdesk.online/wp-content/uploads/2024/06/Deepika-black-dress.webp"
                        class="d-block w-100" alt="Image 6">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>"Deepika Padukone's Joyous News: Expecting First Child"</h5>
                        <p>Bollywood star Deepika Padukone and her husband Ranveer Singh have announced they are
                            expecting their first child. The couple shared their joyous news with fans and the media,
                            expressing their excitement for this new chapter in their lives....<a
                                href="https://indianexpress.com/article/entertainment/bollywood/deepika-padukone-pregnancy-holistically-not-just-about-how-she-is-looking-on-the-outside-yoga-anshuka-9407988/"><span>Read
                                    More</span></a></p>
                    </div>
                    <div class="mobile-button">
                        <a href="https://indianexpress.com/article/entertainment/bollywood/deepika-padukone-pregnancy-holistically-not-just-about-how-she-is-looking-on-the-outside-yoga-anshuka-9407988/">Click Here</a>
                    </div>
                </div>
                <!--Image 11 -->
                <div class="carousel-item">
                    <img src="https://iso.500px.com/wp-content/uploads/2020/02/Christophe-Josse-Finale-By-Milton-Tan.jpeg"
                        class="d-block w-100" alt="Image 6">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>"Fashion Modeling Trends: Embracing Diversity and Innovation"

                        </h5>
                        <p>The fashion modeling industry is evolving, celebrating a broader range of body types, ages,
                            and ethnicities. This shift towards inclusivity is reshaping runways and campaigns,
                            highlighting diverse beauty standards......<a
                                href="https://theconversation.com/global/topics/fashion-models-11176"><span>Read
                                    More</span></a></p>
                    </div>
                    <div class="mobile-button">
                        <a href="https://theconversation.com/global/topics/fashion-models-11176">Click Here</a>
                    </div>
                </div>
                <!--Image 12 -->
                <div class="carousel-item">
                    <img src="https://media.istockphoto.com/id/1392743737/photo/happy-girl-kid-in-uniform-standing-by-dreaming-about-graduation-while-holding-graduation.jpg?s=612x612&w=0&k=20&c=OPlDtjJJCNMoxcriR1phiH4-O9gMMUHVcAtsON2tQdY="
                        class="d-block w-100" alt="Image 6">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>"Education Revolution: 2024 Sees Major Shifts in Learning Approaches"</h5>
                        <p>In 2024, education is undergoing a transformative shift with the integration of advanced
                            technologies and personalized learning.<a
                                href="https://indianexpress.com/section/education/"><span>Read More</span></a></p>
                    </div>
                    <div class="mobile-button">
                        <a href="https://indianexpress.com/section/education/">Click Here</a>
                    </div>
                </div>
            </div>
        </div>

    <section id="recentPosts">
        <h2 id="recent">Recent Posts</h2>
        <div id="postsContainer"></div>
    </section>

        <!--Recent Page-->

        <div class="recent-section">
            <h2>Popular Blogs</h2>
            <div class="card-container">
                <div class="card">
                    <img src="https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?semt=ais_hybrid"
                        alt="Travel">
                    <h3>Travel</h3>
                    <p>Explore amazing destinations around the world. Uncover unique and lesser-known destinations that
                        offer unforgettable experiences beyond typical tourist spots. Enjoy a range of activities from
                        thrilling adventures to relaxing retreats, tailored to all types of travelers.</p>
                    <a href="https://travel.economictimes.indiatimes.com/" class="see-more">See More</a>
                </div>
                <div class="card">
                    <img src="https://img.freepik.com/premium-photo/womans-hands-cradle-red-heart-white-coat-symbolizing-healthcare-insurance-concept_871349-40645.jpg?semt=ais_hybrid"
                        alt="Health">
                    <h3>Health</h3>
                    <p>Tips and advice for maintaining a healthy lifestyle. Maintaining good health is a journey that
                        begins with simple, everyday choices. Staying hydrated, eating a variety of fruits and
                        vegetables, and incorporating herbal teas can greatly benefit your overall well-being.</p>
                    <a href="https://health.economictimes.indiatimes.com/" class="see-more">See More</a>
                </div>
                <div class="card">
                    <img src="https://media.istockphoto.com/id/1295633127/photo/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-lettuce-and-spinach-healthy.jpg?s=612x612&w=0&k=20&c=Qa3tiqUCO4VpVMQDXLXG47znCmHr_ZIdoynViJ8kW0E="
                        alt="Food">
                    <h3>Food</h3>
                    <p>Delicious recipes and food-related stories. Food is not just fuel; it's a vital source of
                        nourishment and energy for the body. A well-balanced diet, rich in fruits, vegetables, whole
                        grains, and lean proteins, supports overall health and well-being.</p>
                    <a href="https://timesofindia.indiatimes.com/life-style/food-news" class="see-more">See More</a>
                </div>
                <div class="card">
                    <img src="https://img.freepik.com/premium-photo/stack-books-with-chalkboard-it_1271802-2353.jpg?semt=ais_hybrid"
                        alt="Education">
                    <h3>Education</h3>
                    <p>Latest trends and insights in education. Education opens doors to endless possibilities,
                        empowering individuals to reach their full potential. It nurtures critical thinking, creativity,
                        and problem-solving skills that are essential for personal and professional growth.</p>
                    <a href="https://www.hindustantimes.com/education/news" class="see-more">See More</a>
                </div>
                <div class="card">
                    <img src="https://img.freepik.com/free-photo/cute-woman-bright-hat-purple-blouse-is-leaning-stand-with-dresses-posing-with-package-isolated-background_197531-17610.jpg?semt=ais_hybrid"
                        alt="Fashion">
                    <h3>Fashion</h3>
                    <p>Stay updated with the latest fashion trends. Fashion is a powerful form of self-expression,
                        allowing individuals to showcase their personality and creativity. It’s more than just clothing;
                        it reflects cultural trends and personal style.</p>
                    <a href="https://www.vogue.in/fashion/whats-new" class="see-more">See More</a>
                </div>
                <div class="card">
                    <img src="https://img.freepik.com/premium-photo/living-room-with-couch-coffee-table-with-yellow-pillows_1043168-14705.jpg?semt=ais_hybrid"
                        alt="Interior">
                    <h3>Interior</h3>
                    <p>Ideas and inspiration for your home interiors. Interior design transforms a space into a
                        reflection of personal style and comfort. By blending colors, textures, and furniture, it
                        creates a harmonious environment that enhances both functionality and aesthetics.</p>
                    <a href="https://www.hindustantimes.com/topic/interior-design" class="see-more">See More</a>
                </div>
                <div class="card">
                    <img src="https://img.freepik.com/free-photo/stock-market-economy-investment-financial-concept_53876-123930.jpg?semt=ais_hybrid"
                        alt="Stock Market">
                    <h3>Stock Market</h3>
                    <p>Get insights on the latest stock market trends. The stock market is a dynamic platform where
                        investors buy and sell shares of publicly traded companies, influencing their market value. It
                        plays a crucial role in the economy by enabling businesses to raise capital and offering
                        individuals opportunities to grow their wealth.</p>
                    <a href="https://www.moneycontrol.com/news/business/markets/" class="see-more">See More</a>
                </div>
                <div class="card">
                    <img src="https://img.freepik.com/free-vector/live-breaking-news-template-style_23-2148509656.jpg?semt=ais_hybrid"
                        alt="News">
                    <h3>News</h3>
                    <p>Stay informed with the latest news updates. Staying informed about current events is crucial for
                        understanding the world around us. News provides insights into global and local issues, shaping
                        our perspectives and decisions. Whether it's advancements in technology, political changes, or
                        cultural events.</p>
                    <a href="https://timesofindia.indiatimes.com/news" class="see-more">See More</a>
                </div>
                <div class="card">
                    <img src="https://img.freepik.com/free-photo/people-celebrating-new-year-s-eve-their-traditional-culture_23-2150901908.jpg?semt=ais_hybrid"
                        alt="Culture">
                    <h3>Culture</h3>
                    <p>Explore the richness of diverse cultures. Culture is the rich tapestry of beliefs, traditions,
                        and practices that define a community. It shapes our identities and influences our way of life
                        through art, language, cuisine, and customs.</p>
                    <a href="https://timesofindia.indiatimes.com/topic/culture" class="see-more">See More</a>
                </div>
                <div class="card">
                    <img src="https://img.freepik.com/free-photo/portrait-attractive-female-with-city-bicycle-near-traditional-chinese-pavilion-park_613910-13486.jpg?semt=ais_hybrid"
                        alt="Culture">
                    <h3>Life Style</h3>
                    <p>A balanced lifestyle focuses on well-being, blending work, leisure, and personal growth.
                        Prioritizing health, meaningful relationships, and self-care is key to living a fulfilling and
                        content life. Simple habits like regular exercise, mindfulness, and staying connected with loved
                        ones contribute to a happier, more harmonious existence.</p>
                    <a href="https://indianexpress.com/section/lifestyle/" class="see-more">See More</a>
                </div>
                <div class="card">
                    <img src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?semt=ais_hybrid"
                        alt="Culture">
                    <h3>Technology</h3>
                    <p>Technology continues to revolutionize our lives, driving innovation in every sector. From AI to
                        renewable energy, the rapid advancement of technology is creating new opportunities and
                        transforming how we work, communicate, and live..</p>
                    <a href="#" class="see-more">See More</a>
                </div>
                <div class="card">
                    <img src="https://img.freepik.com/premium-photo/woman-practicing-yoga-serene-forest-bridge-sunrise-embracing-tranquility-mindfulness_328146-2323.jpg?semt=ais_hybrid"
                        alt="Culture">
                    <h3>Yoga</h3>
                    <p>Yoga offers a holistic approach to well-being, combining physical postures, breathing exercises,
                        and meditation. It promotes mental clarity, flexibility, and overall health, making it a
                        powerful tool for managing stress and enhancing quality of life.</p>
                    <a href="https://indianexpress.com/about/yoga/" class="see-more">See More</a>
                </div>
            </div>
        </div>
    </main>
    <script src="aditiindex1script.js"></script>

    <!----Footer----------->

    <footer>
        <div class="footerContainer">
            <div class="socialIcons">
                <a href=""><img
                        src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Facebook_glyph_svg-256.png"
                        alt="Facebook"></a>
                <a href=""><img src="https://cdn3.iconfinder.com/data/icons/remixicon-logos/24/instagram-fill-256.png"
                        alt="Instagram"></a>
                <a href=""><img
                        src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Twitter_glyph_svg-256.png"
                        alt="Twitter"></a>
                <a href=""><img src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/google-plus-256.png"
                        alt="Google Plus"></a>
                <a href=""><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-youtube-256.png"
                        alt="YouTube"></a>
            </div>

            <div class="footerNav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Create Yours</a></li>
                    <li><a href="">Recent Pots</a></li>
                </ul>
            </div>
        </div>
        <div class="footerBottom">
            <p>Copyright &copy;2024; Designed by <span class="designer"></span></p>
        </div>
    </footer>

</body>

</html>
```
```CSS
    body {
        margin: 0;
        padding: 0; 
        background-color: #d5ecec;
    }

    /********************************* Navbar***************************/
    .custom-navbar {
        background-color: rgba(5, 39, 39, 0.959); 
    }
    .custom-navbar .navbar-nav .nav-link {
        color: white;
    }
    .custom-navbar .navbar-brand {
        color: white; 
    }
    .custom-navbar .navbar-nav .nav-link:hover {
        color: #cccccc; 
    }
    .custom-navbar .dropdown-menu { 
        background-color: rgb(1, 1, 80); 
        border: none; 
    }
    .custom-navbar .dropdown-item {
        color: white; 
    }
    .custom-navbar .dropdown-item:hover {
        color: #cccccc; 
    }
    .navbar-toggler {
        border-color: white; /* Set the border color of the toggle button */
    }
    .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); /* Set toggle icon color to white */
    }

    /************************** carousel*******************************/
    #carouselExample {
        width: 60%; /* Adjust width as needed */
        margin: 30px auto; /* Margin to center the carousel and add space around */
        margin-top: 10vh; /* Adjust this value to control space below the navbar */
        position: relative;
    }
    
    /* Ensure the carousel is below the navbar */
    body {
        padding-top: 70px; 
    }
    
    /* Make carousel responsive */
@media (max-width: 767.98px) {
  #carouselExample {
      width: 100%;
      margin-top: 50px;
  }

  .carousel-caption {
      display: none; /* Hide caption on small devices */
  }

  .carousel-item img {
      width: 100%;
      height: auto;
      object-fit: cover;
  }

  .carousel-item .mobile-button {
      display: block; /* Show button on small devices */
      position: relative;
      margin: 10px auto 20px auto;
      text-align: center;
      
  }

  .mobile-button a {
      display: inline-block;
      padding: 10px 20px;
      background-color: #0d0d0e;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      border: 1px solid white;
      border-radius: 10px;
  }

  .mobile-button a:hover {
      background-color: #14181d;
  }
}
  
    
    /* Wrapper for consistent aspect ratio */
    .carousel-item {
        position: relative;
        width: 100%;
        padding-top: 56.25%; /* 16:9 aspect ratio; adjust as needed */
    }
    
    /* Apply blur effect to images */
    .carousel-item img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensure the image covers the area */
        filter: blur(0.5px); /* Apply blur effect; adjust value as needed */
    }
    
    /* Ensure image caption is above blurred image */
    .carousel-caption {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        z-index: 2; /* Ensure the caption is above the image */
        color: #fff; /* Ensure text is visible */
        background: rgba(0, 0, 0, 0.5); /* Optional: add a semi-transparent background for better readability */
        padding: 10px;
    }
    
    /* Remove underline from "Read More" links and set text color */
    .carousel-caption a {
        color: #fff; /* Set link color to match caption text */
        text-decoration: none; /* Remove underline */
    }
    
    .carousel-caption a:hover {
        text-decoration: underline; /* Optional: underline on hover for better UX */
    }


    /*************** Recent Page******************/

    .recent-section {
        text-align: center;
        padding: 20px;
        background-image: url("https://example.com/your-background-image.jpg"); /* Replace with your desired background image URL */
        background-size: cover;
      }
      h2{
        font-size: 50px;
      }
      
      h1 {
         font-size: 60px;
        font-weight: 700; /* Increased font weight */
        color: white;
        margin-bottom: 20px;
        font-family: 'Arial Black', sans-serif; /* A bolder font style */
        transition: transform 0.3s ease-in-out; /* Smooth zoom effect */
      }
      
      h2:hover {
        transform: scale(1.1); /* Zoom in on hover */
      }
      
      .card-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* 4 cards per row */
        column-gap: 15px; /* Moderate gap between columns */
        row-gap: 20px;    /* Moderate gap between rows */
        justify-items: center;
        padding: 0 10px;  /* Reduced padding on the sides */
        width: 75%; /* Slightly increased container width */
        margin: 0 auto; /* Center the container */
      }
      
      .card {
        background-color: #fff;
        border: 2px solid #000; /* Thinner black border */
        border-radius: 8px; /* Slightly rounded corners */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Lighter shadow */
        text-align: center;
        transition: transform 0.3s;
        overflow: hidden;
      }
      
      .card:hover {
        transform: translateY(-8px);
      }
      
      .card img {
        width: 100%;
        height: 200px; /* Adjusted height for better image visibility */
        object-fit: cover; /* Ensure the image covers the area without distortion */
        border-radius: 8px 8px 0 0; /* Rounded corners for the image */
      }
      
      .card h3 {
        font-size: 22px; /* Adjusted font size for the title */
        color: #333;
        margin: 10px 0 8px;
        font-weight: bold; /* Increased font weight */
      }
      
      .card p {
        font-size: 14px; /* Smaller font size for the description */
        color: #666;
        line-height: 1.5;
        padding: 10px; /* Added padding for the description */
        font-weight: normal; /* Normal font weight */
      }
      
      .card .see-more {
        display: inline-block;
        padding: 6px 12px; /* Slightly increased padding for the button */
        background-color: #000; /* Black background */
        color: #fff; /* White text */
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        border: 1px solid #000; /* Thin black border */
        border-radius: 10px;
        transition: background-color 0.3s, transform 0.3s;
        width: fit-content; /* Adjust width to fit content */
        margin: 0 auto 20px;
      }
      
      .card .see-more:hover {
        background-color: #333;
        transform: scale(1.05);
      }
      
      /* Styles for Popular Tags */
      .popular-tags h3 {
        font-size: 35px; /* Increased font size */
        font-weight: bold; /* Bold font */
        color: #333;
        margin-bottom: 15px;
      }
      
      .popular-tags p {
        font-size: 25px; /* Increased font size */
        font-weight: bold; /* Bold font */
        color: #666;
        margin-bottom: 10px;
      }
      
      /* Media Queries for Responsiveness */
      @media (max-width: 1200px) {
        .card-container {
          grid-template-columns: repeat(3, 1fr); /* 3 cards per row for medium screens */
        }
      }
      
      @media (max-width: 900px) {
        h2 {
          font-size: 32px; /* Slightly smaller heading for smaller screens */
        }
      
        .card-container {
          grid-template-columns: repeat(2, 1fr); /* 2 cards per row for small screens */
          width: 90%; /* Increase width to better fit content on small screens */
        }
      
        .card img {
          height: 180px; /* Adjusted height for images on smaller screens */
        }
      
        .card h3 {
          font-size: 20px; /* Slightly smaller font size for card titles */
        }
      
        .card p {
          font-size: 13px; /* Slightly smaller font size for descriptions */
        }
      }
      
      @media (max-width: 600px) {
        h2 {
          font-size: 28px; /* Smaller heading for mobile screens */
        }
      
        .card-container {
          grid-template-columns: 1fr; /* 1 card per row for very small screens */
          width: 100%; /* Full width for mobile */
        }
      
        .card img {
          height: 150px; /* Further adjust image height for mobile screens */
        }
      
        .card h3 {
          font-size: 18px; /* Adjusted font size for card titles on mobile */
        }
      
        .card p {
          font-size: 12px; /* Smaller font size for descriptions on mobile */
        }
      }
      
    


    /************************ Footer ******************************/
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    footer {
      background-color: hsla(180, 82%, 28%, 0.959);
    }
    .footerContainer {
      width: 100%;
      padding: 70px 30px 20px;
    }
    .socialIcons {
      display: flex;
      justify-content: center;
    }
    .socialIcons a {
text-decoration: none;
padding: 10px;
background-color: white;
margin: 10px;
border-radius: 50%;
display: inline-block;
}

.socialIcons a img {
width: 30px; /* Adjust the size of your icons */
height: 30px;
display: block;
}

.socialIcons a:hover {
background-color: hsla(180, 82%, 28%, 0.959);
transition: 0.5s;
}

.socialIcons a img:hover {
filter: invert(100%); /* This will invert the colors on hover, you can adjust as needed */
transition: 0.5s;
}

    .footerNav {
      margin: 30px 0;
    }
    .footerNav ul {
      display: flex;
      justify-content: center;
      list-style-type: none;
    }
    .footerNav ul li a {
      color: white;
      margin: 20px;
      text-decoration: none;
      font-size: 1.3em;
      opacity: 0.7;
      transition: 0.5s;
    }
    .footernavul li a:hover {
      opacity: 1;
    }
    .footerBottom {
      background-color: rgba(5, 39, 39, 0.959);
      padding: 20px;
      text-align: center;
    }
    .footerBottom p{
      color: whitesmoke;
    }
    .designer{
      opacity: 0.7;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 400px;
      margin: 0px 5px;
    }
    @media (max-width: 700px) {
        .footerNav ul{
          flex-direction: column;
        }
        .footerNav ul li{
          width: 100%;
          text-align: center;
          margin: 10px;
        }
    }

   ```
   ```html
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Blog Platform</title>
    <link rel="stylesheet" href="aditiindex1style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #d5ecec;
        }
        .custom-navbar {
        background-color: rgba(5, 39, 39, 0.959); 
    }
    .custom-navbar .navbar-nav .nav-link {
        color: white;
    }
    .custom-navbar .navbar-brand {
        color: white; 
    }
    .custom-navbar .navbar-nav .nav-link:hover {
        color: #cccccc; 
    }
    .custom-navbar .dropdown-menu { 
        background-color: rgb(1, 1, 80); 
        border: none; 
    }
    .custom-navbar .dropdown-item {
        color: white; 
    }
    .custom-navbar .dropdown-item:hover {
        color: #cccccc; 
    }
    .navbar-toggler {
        border-color: white; /* Set the border color of the toggle button */
    }
    .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); /* Set toggle icon color to white */
    }

/*
        header {
            background-color:rgba(5, 39, 39, 0.959);
            color: white;
            padding: 15px;
            text-align: center;
        }

        header nav {
            display: flex;
            justify-content: center;
            gap: 15px;
        }

        header input[type="text"] {
            padding: 5px;
            font-size: 14px;
        }
        */
        #createPost{
            margin-top: 10rem;
        }

        main {
            padding: 20px;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-width: 500px;
            margin: auto;
        }

        form input, form textarea, form select {
            padding: 10px;
            font-size: 16px;
        }

        #postsContainer {
            display: flex;
            flex-wrap: wrap;
            gap: 3rem;
        }

        .post {
            border: 1px solid #ccc;
            padding: 10px;
            width: 100%;
            max-width: 50vh;
            box-sizing: border-box;
            height: auto;

        }

        .post h3 {
            overflow-wrap: break-word;
        }

        .post p, .post textarea {
            overflow-wrap: break-word;
            white-space: pre-wrap;
        }

       

        .edit-btn, .delete-btn {
            margin: 5px;
            padding: 5px;
            cursor: pointer;
            border: none;
            color: white;
            border-radius: 3px;
        }

        .edit-btn {
            background-color: #007BFF;
        }

        .delete-btn {
            background-color: #DC3545;
        }

        .edit-btn:hover {
            background-color: #0056b3;
        }

        .delete-btn:hover {
            background-color: #c82333;
        }
        /************************ Footer ******************************/
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    footer {
      background-color: hsla(180, 82%, 28%, 0.959);
    }
    .footerContainer {
      width: 100%;
      padding: 70px 30px 20px;
    }
    .socialIcons {
      display: flex;
      justify-content: center;
    }
    .socialIcons a {
text-decoration: none;
padding: 10px;
background-color: white;
margin: 10px;
border-radius: 50%;
display: inline-block;
}

.socialIcons a img {
width: 30px; /* Adjust the size of your icons */
height: 30px;
display: block;
}

.socialIcons a:hover {
background-color: hsla(180, 82%, 28%, 0.959);
transition: 0.5s;
}

.socialIcons a img:hover {
filter: invert(100%); /* This will invert the colors on hover, you can adjust as needed */
transition: 0.5s;
}

    .footerNav {
      margin: 30px 0;
    }
    .footerNav ul {
      display: flex;
      justify-content: center;
      list-style-type: none;
    }
    .footerNav ul li a {
      color: white;
      margin: 20px;
      text-decoration: none;
      font-size: 1.3em;
      opacity: 0.7;
      transition: 0.5s;
    }
    .footernavul li a:hover {
      opacity: 1;
    }
    .footerBottom {
      background-color: rgba(5, 39, 39, 0.959);
      padding: 20px;
      text-align: center;
    }
    .footerBottom p{
      color: whitesmoke;
    }
    .designer{
      opacity: 0.7;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 400px;
      margin: 0px 5px;
    }
    @media (max-width: 700px) {
        .footerNav ul{
          flex-direction: column;
        }
        .footerNav ul li{
          width: 100%;
          text-align: center;
          margin: 10px;
        }
    }
    </style>
</head>
<body>
 <!--<header>
        <h1>My Blog</h1>
        <nav>
            <a href="recent.html" style="font-size: 1.5rem; text-decoration: none; color: white;">Recent Posts</a>
            <input type="text" id="searchBar" placeholder="Search posts..." style="border: 2px solid white;border-radius: 12px; padding: 10px; ">
        </nav>
    </header>-->
    
       
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
                        <a class="nav-link active" aria-current="page" href="index3.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="aditicreate.html">Create yours</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index3.html">Recent Posts</a>
                    </li>
                   
                </ul>
                <form class="d-flex flex-row" role="search">
                    <input class="form-control me-2" type="search" id="searchBar" placeholder="Search posts...">
                    <!--<button class="btn btn-outline-success"  type="submit">Search</button>-->
                </form>
            </div>
        </div>
    </nav>   
   

    <main>
        <section id="createPost">
            <h2 style="text-align: center;">Create a New Post</h2>
            <form id="postForm">
                <input type="text" id="title" placeholder="Title" required>
                <textarea id="content" placeholder="Content" required></textarea>
                <select id="category">
                    <option value="Travel">Travel</option>
                    <option value="Health">Health</option>
                    <option value="Food">Food</option>
                    <option value="Technology">Technology</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Education">Education</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Interior">Interior</option>
                    <option value="Stock Market">Stock Market</option>
                    <option value="News">News</option>
                    <option value="Culture">Culture</option>
                    <option value="Yoga">Yoga</option>
                </select>
                <button type="submit" style="background-color: rgba(5, 39, 39, 0.959);
                width: 23%;
                justify-content: center;
                margin: 0 auto;
                border: 2px solid black;
                border-radius: 20px;
                color: white;">Create Post</button>
            </form>
        </section>

        <section id="posts" style="margin-bottom: 2rem;">
            <h2 style="text-align: center; margin: 5rem;">All Posts</h2>
            <div id="postsContainer"></div>
        </section>
    </main>

    <!----Footer----------->

    <footer>
        <div class="footerContainer">
            <div class="socialIcons">
                <a href=""><img
                        src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Facebook_glyph_svg-256.png"
                        alt="Facebook"></a>
                <a href=""><img src="https://cdn3.iconfinder.com/data/icons/remixicon-logos/24/instagram-fill-256.png"
                        alt="Instagram"></a>
                <a href=""><img
                        src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Twitter_glyph_svg-256.png"
                        alt="Twitter"></a>
                <a href=""><img src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/google-plus-256.png"
                        alt="Google Plus"></a>
                <a href=""><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-youtube-256.png"
                        alt="YouTube"></a>
            </div>

            <div class="footerNav">
                <ul>
                    <li><a href="index3.html">Home</a></li>
                    <li><a href="aditicreate.html">Create Yours</a></li>
                    <li><a href="#Recent Posts">Recent Posts</a></li>
                </ul>
            </div>
        </div>
        <div class="footerBottom">
            <p>Copyright &copy;2024; Designed by <span class="designer"></span></p>
        </div>
    </footer>


    <script>
        // Get form elements
        const postForm = document.getElementById('postForm');
        const postsContainer = document.getElementById('postsContainer');
        const searchBar = document.getElementById('searchBar');

        // Load posts from localStorage
        let posts = JSON.parse(localStorage.getItem('posts')) || [];

        // Function to display posts
        function displayPosts(filteredPosts = posts) {
            postsContainer.innerHTML = '';
            filteredPosts.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <p><strong>Category:</strong> ${post.category}</p>
                    <p><button onclick="likePost(${index})">Like</button> ${post.likes} Likes</p>
                    <p><strong>Comments:</strong></p>
                    <ul>${post.comments.map(comment => `<li>${comment}</li>`).join('')}</ul>
                    <textarea placeholder="Add a comment..." onkeypress="addComment(event, ${index})"></textarea>
                    <br>
                    <button class="edit-btn" onclick="editPost(${index})">Edit</button>
                    <button class="delete-btn" onclick="deletePost(${index})">Delete</button>
                `;
                postsContainer.appendChild(postElement);
            });
        }

        // Function to create a new post
        postForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newPost = {
                title: document.getElementById('title').value,
                content: document.getElementById('content').value,
                category: document.getElementById('category').value,
                likes: 0,
                comments: []
            };
            posts.push(newPost);
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
            postForm.reset();
        });

        // Function to like a post
        function likePost(index) {
            posts[index].likes += 1;
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
        }

        // Function to add a comment
        function addComment(event, index) {
            if (event.key === 'Enter') {
                const comment = event.target.value;
                posts[index].comments.push(comment);
                localStorage.setItem('posts', JSON.stringify(posts));
                displayPosts();
                event.target.value = ''; // Clear the textarea
            }
        }

        // Function to edit a post
        function editPost(index) {
            const title = prompt('Edit title:', posts[index].title);
            const content = prompt('Edit content:', posts[index].content);
            if (title !== null && content !== null) {
                posts[index].title = title;
                posts[index].content = content;
                localStorage.setItem('posts', JSON.stringify(posts));
                displayPosts();
            }
        }

        // Function to delete a post
        function deletePost(index) {
            if (confirm('Are you sure you want to delete this post?')) {
                posts.splice(index, 1);
                localStorage.setItem('posts', JSON.stringify(posts));
                displayPosts();
            }
        }

        // Search functionality
        searchBar.addEventListener('input', () => {
            const query = searchBar.value.toLowerCase();
            const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query));
            displayPosts(filteredPosts);
        });

        // Initial display
        displayPosts();
    </script>
</body>
</html>
```
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recent Posts - My Blog</title>
    <style>
        /* General Styles */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background: linear-gradient(teal, black, teal, black);
        }

        header {
            background: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }

        header h1 {
            margin: 0;
            font-size: 24px;
        }

        nav {
            display: flex;
            justify-content: center;
            margin: 10px 0;
        }

        nav a {
            color: #fff;
            text-decoration: none;
            margin: 0 15px;
        }

        nav input[type="text"] {
            padding: 5px;
            font-size: 14px;
            max-width: 300px;
            /* Limit width to prevent overflow */
        }

        /* Main Content */
        main {
            padding: 20px;
            max-width: 800px;
            margin: auto;
            background: #fff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }

        /* Post Styles */
        .post {
            border: 1px solid #ddd;
            margin: 20px 0;
            padding: 15px;
            border-radius: 5px;
            background: #fafafa;
            position: relative;
            word-wrap: break-word;
            /* Ensure text wraps */
        }

        .post h3 {
            margin-top: 0;
            font-size: 20px;
        }

        .post p {
            margin: 5px 0;
        }

        textarea {
            width: 100%;
            max-width: 730px;
            padding: 10px;
            margin-top: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
            resize: none;
        }

        button {
            background: none;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 5px;
            font-size: 18px;
        }

        button:hover {
            background: #ddd;
        }

        /* Like Button Styles */
        .like-button {
            font-size: 24px;
            background: none;
            border: none;
            cursor: pointer;
            color: transparent; /* Make the heart transparent by default */
            transition: transform 0.3s ease, color 0.3s ease;
        }

        .like-button::before {
            content: '❤️';
            color: #ccc; /* Light grey for unliked state */
            transition: color 0.3s ease;
        }

        .like-button.liked::before {
            color: red; /* Red for liked state */
        }

        .like-button.unliked::before {
            color: #ccc; /* Light grey for unliked state */
        }

        .like-button.liked {
            animation: likeAnimation 0.3s forwards;
        }

        .like-button.unliked {
            animation: unlikeAnimation 0.3s forwards;
        }

        @keyframes likeAnimation {
            0% {
                transform: scale(1);
            }

            100% {
                transform: scale(1.2);
            }
        }

        @keyframes unlikeAnimation {
            0% {
                transform: scale(1);
            }

            100% {
                transform: scale(0.5);
            }
        }

        /* Share and Comment Button Styles */
        .share-button,
        .comment-button {
            font-size: 24px;
            background: none;
            border: none;
            cursor: pointer;
        }

        .share-button:hover,
        .comment-button:hover {
            background: #ddd;
        }

        /* Share Dropdown Styles */
        .share-dropdown {
            position: relative;
            display: inline-block;
        }

        .share-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            padding: 12px 16px;
            z-index: 1;
            max-width: 200px;
            /* Limit width to prevent overflow */
        }

        .share-dropdown:hover .share-content {
            display: block;
        }

        .share-content a {
            color: black;
            padding: 5px 0;
            display: block;
            text-decoration: none;
        }

        .share-content a:hover {
            background-color: #f1f1f1;
        }

        /* Emoji Picker Styles */
        .emoji-picker-button {
            font-size: 24px;
            background: none;
            border: none;
            cursor: pointer;
            margin-right: 10px;
            position: relative;
            /* Make sure the picker is positioned relative to this button */
        }

        .emoji-picker {
            display: none;
            position: absolute;
            background: #fff;
            border: 1px solid #ddd;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 5px;
            border-radius: 5px;
            z-index: 10;
            /* Position the picker 40px below the button */
            left: 0;
            /* Align picker to the left edge of the button */
            width: max-content;
            /* Adjust width to fit content */
            max-height: 200px;
            /* Limit height to prevent overflow */
            overflow-y: auto;
            /* Enable vertical scrolling if needed */
        }

        .emoji-picker.show {
            display: block;
        }

        .emoji {
            font-size: 20px;
            cursor: pointer;
            padding: 5px;
        }

        .emoji:hover {
            background: #f0f0f0;
        }

        .post {
    border: 1px solid #ddd;
    margin: 20px 0;
    padding: 15px;
    border-radius: 5px;
    background: #fafafa;
    position: relative;
    word-wrap: break-word;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.post:hover {
    background-color: #e0f7fa; /* Light teal green color */
    transform: translateY(-5px); /* Slightly raise the post */
}

        /* Responsive Styles */
        @media (max-width: 768px) {
            header h1 {
                font-size: 20px;
            }

            nav {
                flex-direction: column;
                align-items: center;
            }

            nav a {
                margin: 10px 0;
            }

            nav input[type="text"] {
                max-width: 100%;
            }

            main {
                padding: 10px;
            }

            .post {
                padding: 10px;
                margin: 10px 0;
            }

            .post h3 {
                font-size: 18px;
            }

            button {
                font-size: 16px;
            }

            .like-button {
                font-size: 20px;
            }

            .share-button,
            .comment-button {
                font-size: 20px;
            }

            .emoji-picker {
                top: 50px;
                left: 0;
                width: 100%;
                padding: 10px;
                box-sizing: border-box;
            }

            .share-content {
                width: 100%;
                padding: 10px;
            }
        }

        @media (max-width: 480px) {
            header h1 {
                font-size: 18px;
            }

            .post {
                padding: 8px;
                margin: 8px 0;
            }

            .post h3 {
                font-size: 16px;
            }

            button {
                font-size: 14px;
            }

            .like-button {
                font-size: 18px;
            }

            .share-button,
            .comment-button {
                font-size: 18px;
            }

            .emoji-picker {
                top: 60px;
                width: 100%;
                padding: 8px;
            }

            .share-content {
                width: 100%;
                padding: 8px;
            }
        }
    </style>
</head>

<body>
    <div>
        <header>
            <h1>Recent Posts</h1>
            <nav>
                <a href="index.html">Create New Post</a>
                <input type="text" id="searchBar" placeholder="Search posts...">
            </nav>
        </header>

        <main>
            <section id="recentPosts">
                <h2>Recent Posts</h2>
                <div id="postsContainer"></div>
            </section>
        </main>

        <footer>
            <p>&copy; 2024 My Blog. All rights reserved.</p>
        </footer>
    </div>
    <script>
        const postsContainer = document.getElementById('postsContainer');
        const searchBar = document.getElementById('searchBar');
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        let currentTextarea = null; // Variable to track the currently active textarea

        // Function to display posts
        function displayPosts(filteredPosts = posts) {
            postsContainer.innerHTML = '';
            filteredPosts.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <p><strong>Category:</strong> ${post.category}</p>
                <p>
                    <button class="like-button ${post.userLiked ? 'liked' : 'unliked'}" onclick="toggleLike(${index})">
                        ❤️
                    </button>
                    <span id="likeCount${index}">${post.likes}</span> Likes
                </p>
                <p><strong>💬</strong></p>
                <ul>${post.comments.map(comment => `<li>${comment}</li>`).join('')}</ul>
                <p>
                    <button class="emoji-picker-button" data-index="${index}">😊</button>
                    <div class="emoji-picker" id="emoji-picker-${index}">
                        <span class="emoji" onclick="addEmoji('😊', ${index})">😊</span>
                        <span class="emoji" onclick="addEmoji('😂', ${index})">😂</span>
                        <span class="emoji" onclick="addEmoji('😍', ${index})">😍</span>
                        <span class="emoji" onclick="addEmoji('😎', ${index})">😎</span>
                        <span class="emoji" onclick="addEmoji('😢', ${index})">😢</span>
                        <span class="emoji" onclick="addEmoji('😡', ${index})">😡</span>
                        <span class="emoji" onclick="addEmoji('🥳', ${index})">🥳</span>
                        <span class="emoji" onclick="addEmoji('🤔', ${index})">🤔</span>
                        <!-- Add more emojis as needed -->
                    </div>
                </p>
                <textarea id="commentBox${index}" placeholder="Add a comment..." onkeypress="addComment(event, ${index})"></textarea>
                <div class="share-dropdown">
                    <button class="share-button">🔗</button>
                    <div class="share-content">
                        <a href="https://wa.me/?text=${encodeURIComponent(post.title + '\n' + post.content)}" target="_blank">WhatsApp</a>
                        <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                        <a href="mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(post.content)}" target="_blank">Email</a>
                    </div>
                </div>
            `;
                postsContainer.appendChild(postElement);
            });

            // Add event listeners to emoji picker buttons
            document.querySelectorAll('.emoji-picker-button').forEach(button => {
                button.addEventListener('click', function () {
                    currentTextarea = document.getElementById(`commentBox${this.dataset.index}`);
                    toggleEmojiPicker(this);
                });
            });
        }

        // Function to add emoji to the comment box
        function addEmoji(emoji, index) {
            if (currentTextarea) {
                currentTextarea.value += emoji;
                toggleEmojiPicker(document.querySelector(`.emoji-picker-button[data-index="${index}"]`));
            }
        }

        // Function to toggle the emoji picker visibility
        function toggleEmojiPicker(button) {
            const emojiPicker = document.getElementById(`emoji-picker-${button.dataset.index}`);
            emojiPicker.classList.toggle('show');
        }

        // Function to toggle like
        function toggleLike(index) {
            const post = posts[index];
            post.userLiked = !post.userLiked;
            post.likes += post.userLiked ? 1 : -1;
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
        }

        // Function to add comment
        function addComment(event, index) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                const commentBox = document.getElementById(`commentBox${index}`);
                const commentText = commentBox.value.trim();
                if (commentText) {
                    posts[index].comments.push(commentText);
                    localStorage.setItem('posts', JSON.stringify(posts));
                    displayPosts();
                }
                commentBox.value = '';
            }
        }

        // Search function
        searchBar.addEventListener('input', function () {
            const query = searchBar.value.toLowerCase();
            const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query));
            displayPosts(filteredPosts);
        });

        // Initial display
        displayPosts();
        
    </script>
</body>

</html>
```
```CSS
.post {
    border: 2px solid teal;
    margin: 20px 0;
    padding: 15px;
    border-radius: 5px;
    background: #fafafa;
    position: relative;
    word-wrap: break-word; /* Ensure text wraps */
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.post:hover {
    background-color: #e0f7fa; /* Light teal green color */
    transform: translateY(-5px); /* Slightly raise the post */
}

.post h3 {
    margin-top: 0;
    font-size: 20px;
}

.post p {
    margin: 5px 0;
}

textarea {
    width: 100%;
    max-width: 730px;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    resize: none;
}

button {
    background: none;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 18px;
    transition: background 0.3s ease;
}

button:hover {
    background: #ddd;
}

/* Like Button Styles */
.like-button {
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    color: transparent; /* Make the heart transparent by default */
    transition: transform 0.3s ease, color 0.3s ease;
}

.like-button::before {
    content: '❤️';
    color: #ccc; /* Light grey for unliked state */
    transition: color 0.3s ease;
}

.like-button.liked::before {
    color: red; /* Red for liked state */
}

.like-button.unliked::before {
    color: #ccc; /* Light grey for unliked state */
}

.like-button.liked {
    animation: likeAnimation 0.3s forwards;
}

.like-button.unliked {
    animation: unlikeAnimation 0.3s forwards;
}

@keyframes likeAnimation {
    0% { transform: scale(1); }
    100% { transform: scale(1.2); }
}

@keyframes unlikeAnimation {
    0% { transform: scale(1); }
    100% { transform: scale(0.5); }
}

/* Share and Comment Button Styles */
.share-button,
.comment-button {
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
}

.share-button:hover,
.comment-button:hover {
    background: #ddd;
}

/* Share Dropdown Styles */
.share-dropdown {
    position: relative;
    display: inline-block;
}

.share-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
    max-width: 200px; /* Limit width to prevent overflow */
}

.share-dropdown:hover .share-content {
    display: block;
}

.share-content a {
    color: black;
    padding: 5px 0;
    display: block;
    text-decoration: none;
}

.share-content a:hover {
    background-color: #f1f1f1;
}

/* Emoji Picker Styles */
.emoji-picker-button {
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    position: relative; /* Ensure picker is positioned relative to this button */
}

.emoji-picker {
    display: none;
    position: absolute;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 5px;
    border-radius: 5px;
    z-index: 10;
    width: max-content; /* Adjust width to fit content */
    max-height: 200px; /* Limit height to prevent overflow */
    overflow-y: auto; /* Enable vertical scrolling if needed */
}

.emoji-picker.show {
    display: block;
}

.emoji {
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
}

.emoji:hover {
    background: #f0f0f0;
}
 #recentPosts{
    padding-left: 70px;
    padding-right: 70px;
 }
 #recent{
    text-align: center;
 }
/* Responsive Styles */

/* Large Devices (Desktops) */
@media (max-width: 1200px) {
    #recentPosts {
        padding-left: 50px;
        padding-right: 50px;
    }
}

/* Medium Devices (Tablets and small laptops) */
@media (max-width: 768px) {
    header h1 {
        font-size: 20px;
    }

    nav {
        flex-direction: column;
        align-items: center;
    }

    nav a {
        margin: 10px 0;
    }

    nav input[type="text"] {
        max-width: 100%;
    }

    main {
        padding: 10px;
    }

    .post {
        padding: 10px;
        margin: 10px 0;
    }

    .post h3 {
        font-size: 18px;
    }

    button {
        font-size: 16px;
    }

    .like-button,
    .share-button,
    .comment-button {
        font-size: 20px;
    }

    .emoji-picker {
        top: 50px;
        left: 0;
        width: 100%;
        padding: 10px;
    }

    .share-content {
        width: 100%;
        padding: 10px;
    }
}

/* Small Devices (Phones) */
@media (max-width: 480px) {
    header h1 {
        font-size: 18px;
    }

    .post {
        padding: 8px;
        margin: 8px 0;
    }

    .post h3 {
        font-size: 16px;
    }

    button {
        font-size: 14px;
    }

    .like-button,
    .share-button,
    .comment-button {
        font-size: 18px;
    }

    .emoji-picker {
        top: 60px;
        width: 100%;
        padding: 8px;
    }

    .share-content {
        width: 100%;
        padding: 8px;
    }
}

/* Extra Small Devices (Small Phones) */
@media (max-width: 360px) {
    header h1 {
        font-size: 16px;
    }

    .post {
        padding: 6px;
        margin: 6px 0;
    }

    .post h3 {
        font-size: 14px;
    }

    button {
        font-size: 12px;
    }

    .like-button,
    .share-button,
    .comment-button {
        font-size: 16px;
    }

    .emoji-picker {
        top: 70px;
        width: 100%;
        padding: 6px;
    }

    .share-content {
        width: 100%;
        padding: 6px;
    }
}
```
```Javascript

const postsContainer = document.getElementById('postsContainer');
// const searchBar = document.getElementById('searchBar');
let posts = JSON.parse(localStorage.getItem('posts')) || [];
let currentTextarea = null; // Variable to track the currently active textarea

// Function to display posts
function displayPosts(filteredPosts = posts) {
    postsContainer.innerHTML = '';
    filteredPosts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <p><strong>Category:</strong> ${post.category}</p>
                <p>
                    <button class="like-button ${post.userLiked ? 'liked' : 'unliked'}" onclick="toggleLike(${index})">
                        ❤️
                    </button>
                    <span id="likeCount${index}">${post.likes}</span> Likes
                </p>
                <p><strong>💬</strong></p>
                <ul>${post.comments.map(comment => `<li>${comment}</li>`).join('')}</ul>
                <p>
                    <button class="emoji-picker-button" data-index="${index}">😊</button>
                    <div class="emoji-picker" id="emoji-picker-${index}">
                        <span class="emoji" onclick="addEmoji('😊', ${index})">😊</span>
                        <span class="emoji" onclick="addEmoji('😂', ${index})">😂</span>
                        <span class="emoji" onclick="addEmoji('😍', ${index})">😍</span>
                        <span class="emoji" onclick="addEmoji('😎', ${index})">😎</span>
                        <span class="emoji" onclick="addEmoji('😢', ${index})">😢</span>
                        <span class="emoji" onclick="addEmoji('😡', ${index})">😡</span>
                        <span class="emoji" onclick="addEmoji('🥳', ${index})">🥳</span>
                        <span class="emoji" onclick="addEmoji('🤔', ${index})">🤔</span>
                        <!-- Add more emojis as needed -->
                    </div>
                </p>
                <textarea id="commentBox${index}" placeholder="Add a comment..." onkeypress="addComment(event, ${index})"></textarea>
                <div class="share-dropdown">
                    <button class="share-button">🔗</button>
                    <div class="share-content">
                        <a href="https://wa.me/?text=${encodeURIComponent(post.title + '\n' + post.content)}" target="_blank">WhatsApp</a>
                        <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                        <a href="mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(post.content)}" target="_blank">Email</a>
                    </div>
                </div>
            `;
        postsContainer.appendChild(postElement);
    });

    // Add event listeners to emoji picker buttons
    document.querySelectorAll('.emoji-picker-button').forEach(button => {
        button.addEventListener('click', function () {
            currentTextarea = document.getElementById(`commentBox${this.dataset.index}`);
            toggleEmojiPicker(this);
        });
    });
}

// Function to add emoji to the comment box
function addEmoji(emoji, index) {
    if (currentTextarea) {
        currentTextarea.value += emoji;
        toggleEmojiPicker(document.querySelector(`.emoji-picker-button[data-index="${index}"]`));
    }
}

// Function to toggle the emoji picker visibility
function toggleEmojiPicker(button) {
    const emojiPicker = document.getElementById(`emoji-picker-${button.dataset.index}`);
    emojiPicker.classList.toggle('show');
}

// Function to toggle like
function toggleLike(index) {
    const post = posts[index];
    post.userLiked = !post.userLiked;
    post.likes += post.userLiked ? 1 : -1;
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts();
}

// Function to add comment
function addComment(event, index) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        const commentBox = document.getElementById(`commentBox${index}`);
        const commentText = commentBox.value.trim();
        if (commentText) {
            posts[index].comments.push(commentText);
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
        }
        commentBox.value = '';
    }
}


displayPosts();

```
```video
fontvideo.mp4
```
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-image: url("https://example.com/your-background-image.jpg"); /* Replace with your desired background image URL */
  background-size: cover;
}

.recent-section {
  text-align: center;
  padding: 20px;
  background-image: url("https://example.com/your-background-image.jpg"); /* Replace with your desired background image URL */
  background-size: cover;
}
h2{
  font-size: 30px;
}

h1 {
   font-size: 60px;
  font-weight: 700; /* Increased font weight */
  color: white;
  margin-bottom: 20px;
  font-family: 'Arial Black', sans-serif; /* A bolder font style */
  transition: transform 0.3s ease-in-out; /* Smooth zoom effect */
}

h2:hover {
  transform: scale(1.1); /* Zoom in on hover */
}

.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 cards per row */
  column-gap: 15px; /* Moderate gap between columns */
  row-gap: 20px;    /* Moderate gap between rows */
  justify-items: center;
  padding: 0 10px;  /* Reduced padding on the sides */
  width: 75%; /* Slightly increased container width */
  margin: 0 auto; /* Center the container */
}

.card {
  background-color: #fff;
  border: 2px solid #000; /* Thinner black border */
  border-radius: 8px; /* Slightly rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Lighter shadow */
  text-align: center;
  transition: transform 0.3s;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-8px);
}

.card img {
  width: 100%;
  height: 200px; /* Adjusted height for better image visibility */
  object-fit: cover; /* Ensure the image covers the area without distortion */
  border-radius: 8px 8px 0 0; /* Rounded corners for the image */
}

.card h3 {
  font-size: 22px; /* Adjusted font size for the title */
  color: #333;
  margin: 10px 0 8px;
  font-weight: bold; /* Increased font weight */
}

.card p {
  font-size: 14px; /* Smaller font size for the description */
  color: #666;
  line-height: 1.5;
  padding: 10px; /* Added padding for the description */
  font-weight: normal; /* Normal font weight */
}

.card .see-more {
  display: inline-block;
  padding: 6px 12px; /* Slightly increased padding for the button */
  background-color: #000; /* Black background */
  color: #fff; /* White text */
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid #000; /* Thin black border */
  border-radius: 3px;
  transition: background-color 0.3s, transform 0.3s;
  width: fit-content; /* Adjust width to fit content */
  margin-bottom: 10px;
}

.card .see-more:hover {
  background-color: #333;
  transform: scale(1.05);
}

/* Styles for Popular Tags */
.popular-tags h3 {
  font-size: 35px; /* Increased font size */
  font-weight: bold; /* Bold font */
  color: #333;
  margin-bottom: 15px;
}

.popular-tags p {
  font-size: 25px; /* Increased font size */
  font-weight: bold; /* Bold font */
  color: #666;
  margin-bottom: 10px;
}

/* Media Queries for Responsiveness */
@media (max-width: 1200px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr); /* 3 cards per row for medium screens */
  }
}

@media (max-width: 900px) {
  h2 {
    font-size: 32px; /* Slightly smaller heading for smaller screens */
  }

  .card-container {
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row for small screens */
    width: 90%; /* Increase width to better fit content on small screens */
  }

  .card img {
    height: 180px; /* Adjusted height for images on smaller screens */
  }

  .card h3 {
    font-size: 20px; /* Slightly smaller font size for card titles */
  }

  .card p {
    font-size: 13px; /* Slightly smaller font size for descriptions */
  }
}

@media (max-width: 600px) {
  h2 {
    font-size: 28px; /* Smaller heading for mobile screens */
  }

  .card-container {
    grid-template-columns: 1fr; /* 1 card per row for very small screens */
    width: 100%; /* Full width for mobile */
  }

  .card img {
    height: 150px; /* Further adjust image height for mobile screens */
  }

  .card h3 {
    font-size: 18px; /* Adjusted font size for card titles on mobile */
  }

  .card p {
    font-size: 12px; /* Smaller font size for descriptions on mobile */
  }
}
```

 
