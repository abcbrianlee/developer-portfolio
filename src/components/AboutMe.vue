<template>
    <section class="about-me-section">
        <div class="about-Me">
            <h1 class="about-me-h1">About</h1>
                <div class="about-me-wrapper">
                    <div class="about-me-image">
                        <img src="../assets/profile.png" alt="About Me Photo">
                    </div>
                    <div class="about-me-description">
                        <p>
                            As a former chiropractor turned software developer, I've embarked on a transformative journey that blends my background in holistic healthcare with my newfound passion for software development. Leveraging my expertise in problem-solving and attention to detail, I strive to create meaningful and user-centric solutions that bridge the gap between technology and well-being.

                            Currently, my primary focus is on developing applications with a strong emphasis on Java, Python, and C++. I typically use Javascript, HTML/CSS/Bootstrap and Flask to facilitate communication with the client side.
                        </p>
                    </div>
                </div>
        </div>
    </section>
   
    
</template>

<script>
export default {

}
</script>

<style>
.about-me-section {
   
}
.about-me-h1{
    color:black;
    font-size:78px;
    text-align: center;
}

.about-me-wrapper{
    display:flex;
    width:80%;
    margin-bottom: 20px;
}

.about-me-description{
    flex-basis: 50%;
    padding: 20px;
    box-sizing: border-box;
    text-align: left;
    color: black;
    font-size:20px;
    font-weight: 500;
}
.about-me-image{
    flex-basis: 50%;
    display:flex;
    justify-content: flex-end;
    margin-right: 150px;
    
}
.about-me-image img{
    height: 250px;
    border-radius: 50%;
}


</style>