<template>
<div id="page-two-nav">
<div class="container-two">

    <div class="project-header">Projects</div>
    <div class="project-container">
        <div v-for="(project, index) in projectData.ProjectsArray" v-bind:key="index" class="project-wrapper">
            <div class="project-details">
                <h2>{{ projectData.ProjectsArray[index].Title }}</h2>
                <p>{{ projectData.ProjectsArray[index].About }}</p>
                <p>{{ projectData.ProjectsArray[index].Tools }}</p>
            
                <div class="project-box">
                    <div class="project-section-box">
                        <a :href="projectData.ProjectsArray[index].Link">
                        <h3>See Live</h3>
                        </a>
                    </div>
                        
                    <div class="project-section-box">
                        <a :href="projectData.ProjectsArray[index].Link2">
                        <h3>View Code</h3>
                        </a>
                    </div>
                </div>
            </div>

            <div class="project-image">
                <img :src= "projectData.ProjectsArray[index].Image" alt="pic">        
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import jsonData from "/projects.json"
export default {
    data() {
        return {
            projectData: jsonData
        }
    },
    mounted() {
    this.projectData.ProjectsArray.forEach((project) => {
      console.log(project.Image);
    });
    },
}
</script>

<style>
.container-two {
    background-color: #4CD6AF;
}
.project-header{
    font-size: 5.6rem;
    font-weight: 700;
    margin-bottom: 6rem;
    text-align: center;
    color:white;
}
.project-container{
    display: flex;
    flex-wrap: wrap;

}
.project-wrapper{
    display:flex;
    width:80%;
    margin-bottom: 20px;
    
}
h2{
    font-size: 48px;
    font-weight: 500;
}
p{
    font-size:18px;
    font-weight: 600;
}
.project-details{
    flex-basis: 50%;
    padding: 20px;
    box-sizing: border-box;
    color:white;
}
.project-image {
    flex-basis: 50%;
}

.project-image img {
    width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border: 2px solid black;

}

.project-box{
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    
}
.project-section-box{
    background-color: white;
    border:3px solid black ;
    padding-left:10px;
    padding-right:10px;
    padding-top:1px;
    padding-bottom:1px;
    text-align: center;
    color: #4CD6AF;
    font-size: 12px;
    text-decoration: none;
    transition: transform 0.3s ease;
    
}

.project-section-box:hover {
    transform: scale(1.1) translateY(-5px);
}

.project-section-box a {
  color: inherit;
  text-decoration: none; 
}

.project-section-box a:hover {
  color: inherit;
}
</style>