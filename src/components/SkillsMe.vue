<template>

        
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

</template>

<script>
export default {

}
</script>

<style>


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
}
.infinite-box {

    box-sizing: border-box;
    border: 1px solid black;
    width: 70%;

}
.infinite-box2 {

box-sizing: border-box;
border: 1px solid black;
width: 70%;

}
.logos {
    overflow:hidden;
    padding:10px 0;
    white-space: nowrap;
}
.logos2 {
    overflow:hidden;
    
    white-space: nowrap;
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


</style>