<template>
    <div class="container-one">
    <div class="navbar">
        <a href="https://github.com/abcbrianlee"><img src="../assets/github.png" alt="Github"></a>
        <a href="https://linkedin.com/in/abcbrianlee"><img src="../assets/linkedin.png" alt="LinkedIn"></a>
        <a href="https://drive.google.com/file/d/15X89t69psUgVlA7XvroYCXVOXDsc7XqE/view?usp=sharing"><img src="../assets/resume.png" alt="Resume"></a>
    </div>
    
    <div class="main-container">
        <h1>Hi, I'm Brian.</h1>
        <h1>I'm a full stack developer.</h1>
            <div class="main-box">
                <div class="section-box">
                    <a href="#container-one"><h2>Skills</h2></a>
                </div>
                <div class="section-box">
                    <a href="#page-two-nav"><h2>Projects</h2></a>
                </div>
                <div class="section-box">
                    <a href="#page-three-nav"><h2>Contact</h2></a>
                </div>
            </div>
    </div>

    <div class ="skill-box">
        <div class="infinite-box2">
            <div class="logos2">
                <div class="tech-logo">
                    <p>Tools and Technologies</p>
                    <p>Tools and Technologies</p>
                    <p>Tools and Technologies</p>
                    <p>Tools and Technologies</p>
                    <p>Tools and Technologies</p>
                    <p>Tools and Technologies</p>
                    <p>Tools and Technologies</p>
                    <p>Tools and Technologies</p>
                    <p>Tools and Technologies</p>
                    <p>Tools and Technologies</p>
                    <p>Tools and Technologies</p>
                    <p>Tools and Technologies</p>
                    <p>Tools and Technologies</p>
                    <p>Tools and Technologies</p>
                    <p>Tools and Technologies</p>
                    <p>Tools and Technologies</p>
                </div>
            </div>
        </div>


        <div class="infinite-box">
                <div class="logos">
                    <div class="logos-slide">
                        <img src="../assets/java.png" alt="Java">
                        <img src="../assets/javascript.png" alt="Javascript">
                        <img src="../assets/python.png" alt="Python">
                        <img src="../assets/c++.png" alt="C++">
                        <img src="../assets/html.png" alt="HTML">
                        <img src="../assets/css.png" alt="CSS">
                        <img src="../assets/spring.png" alt="Spring">
                        <img src="../assets/javafx.png" alt="JavaFX">
                        <img src="../assets/flask.png" alt="Flask">
                        <img src="../assets/logo.png" alt="Vue">
                    </div>
                    <div class="logos-slide">
                        <img src="../assets/java.png" alt="Java">
                        <img src="../assets/javascript.png" alt="Javascript">
                        <img src="../assets/python.png" alt="Python">
                        <img src="../assets/c++.png" alt="C++">
                        <img src="../assets/html.png" alt="HTML">
                        <img src="../assets/css.png" alt="CSS">
                        <img src="../assets/spring.png" alt="Spring">
                        <img src="../assets/javafx.png" alt="JavaFX">
                        <img src="../assets/flask.png" alt="Flask">
                        <img src="../assets/logo.png" alt="Vue">
                    </div>
                </div>
            </div>
    </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.container-one {
    height:100vh;
    
}

.navbar {
    display:flex;
    justify-content: flex-end;
    gap: 3em;
    padding-right: 150px;
}
.navbar img{
    transition: transform 0.3s ease;
}
.navbar img:hover {
    transform: scale(1.1) translateY(-5px);
}
@media (max-width: 768px) {
  .navbar {
    justify-content: flex-start;
    padding-right: 20px; 
  }
}
img{
height:40px;
}
.main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
h1{
    font-size: 5.6rem;
    font-weight: 700;
    margin-bottom: .2rem;
    text-align: left;
    color:black;
}
p{
    color:black;
}
h2{
    font-size:1.5rem;
}
.main-box{
    display:flex;
    flex-wrap:wrap;
    margin-bottom: 60px;
    
}
.section-box{
    background-color: white;
    border:3px solid #4CD6AF;
    padding-left:15px;
    padding-right:15px;
    padding-top:1px;
    padding-bottom:1px;
    margin-bottom: 50px;
    text-align: center;
    color: #4CD6AF;
    text-decoration: none;
    transition: transform 0.3s ease;

}
.section-box:hover {
    transform: scale(1.1) translateY(-5px);
}
.section-box a {
  color: inherit; /* Inherit the parent element's text color */
  text-decoration: none; /* Remove the default underline */
}

.section-box a:hover {
  color: inherit; /* Inherit the parent element's text color for hover */
}



@keyframes slide1 {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}
@keyframes slide2 {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}
.skill-box {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 70%;
}
.infinite-box,
.infinite-box2 {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 70%;
}

.logos {
    overflow:hidden;
    padding:10px 0;
    white-space: nowrap;
    background: white;
    position: relative;
}
.logos:before,
.logos:after,
.logos2:before,
.logos2:after {
    position:absolute;
    top:0;
    width:250px;
    height:100%;
    content: "";
    z-index: 2;
}
.logos:before ,
.logos2:before{
    left:0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
}
.logos:after,
.logos2:after {
    right:0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
}
.logos2 {
    overflow:hidden;
    white-space: nowrap;
    background: white;
    position: relative;
}
.logos:hover .logos-slide {
    animation-play-state: paused;
}
.logos-slide {
    display: inline-block;
    animation: 10s slide2 infinite linear;
}

.logos-slide img{
    height: 40px;
    margin: 0 40px;
}

.tech-logo {
    display: flex;
    animation: 20s slide1 infinite linear;
}
.tech-logo p{
    margin-right: 20px;
}


@media screen and (max-width: 600px)
{
    h1{
    font-size: 2rem;
    font-weight: 700;
   
}
.logos-slide img {
    height: 30px;
    margin: 0 20px;
}

  .logos:before,
  .logos:after,
  .logos2:before,
  .logos2:after {
    width: 50px; 
  }

.logos-slide img{
    height: 20px;
    margin: 0 40px;
}
}
@media screen and (min-width: 601px) and (max-width: 1250px) {
    .container-one {
        height: 150vh;
    }
}




</style>