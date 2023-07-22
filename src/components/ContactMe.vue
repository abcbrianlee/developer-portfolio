<template>
        <div id="page-three-nav">
        <div class="container-four">
                <div class="container-four-wrapper">

                        
                        <div class="about-me-section">
                                <div class="about-me-image">
                                        <img src="../assets/profile.png" alt="About Me Photo">
                                </div>
                            <p>As a former chiropractor turned software developer, I've embarked on a transformative journey that blends my background in holistic healthcare with my newfound passion for software development. Leveraging my expertise in problem-solving and attention to detail, I strive to create meaningful and user-centric solutions that bridge the gap between technology and well-being.
                                When I'm not working, you can often find me out and about, exploring all that DFW has to offer. I have a passion for watchin Titans and SEC football, cooking and trying out new and exciting foods, and spending quality time with my girlfriend and two dogs. Life is all about balancing work and play, and I love indulging in my hobbies during my downtime!
                            </p>
                        </div>



                        <div class="contact-me">
                                <h1>Contact Me</h1>
                                <form @submit.prevent="submitForm">
                                        <div class ="form-group">
                                                <input type="text" v-model="name" placeholder="Name" required>  
                                        </div>
                                        <div class="form-group">
                                                <input type="email"  v-model="email" placeholder="Email" required>
                                        </div>
                                        <div class="form group">
                                                <textarea id="message" v-model="message" placeholder="Message" required></textarea>
                                                

                                        </div>
                                        <button type="submit">Submit</button>
                                </form>
                        </div>
                </div>
        </div>
        </div>
</template>

<script>
import axios from 'axios';
export default {
        data() {
                return {
                        name:'',
                        email:'',
                        message: ''
                };
        },
        methods: {
                async submitForm() {
                        try {
                              const response = await axios.post('https://us-central1-abcbrianlee1.cloudfunctions.net/sendEmail', {
                                name: this.name,
                                email: this.email,
                                message: this.message
                              });
                              console.log('Email sent:', response.data);
                              this.name='';
                              this.email='';
                              this.message='';
                                
                } catch(error) {
                        console.error('Error sending email:',error);
                }
        },
},
};
</script>

<style>
h1{
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 6rem;
    text-align: center;
    color:white;
}
p{
        color:white;
}
.container-four {
    height:80vh;
    background-color: #3e3e3e;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
.container-four-wrapper{
        display:flex;
        width:80%;
        justify-content: center;
        align-items: center;
}
.about-me-section{
        display: flex;
        flex-basis: 50%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 50px;
}
.about-me-image {
        display: flex;
}
.about-me-image img{
    height: 250px;
    border-radius: 50%;
    
    
}
.contact-me {
        display: flex;
        flex-basis: 50%;
        flex-direction: column;
}

.form-group {
  margin-bottom: 10px;
}
input[type="text"],
input[type="email"],
textarea {
  width: 500px;
  height: 25px;
  padding: 5px;
}

textarea {
  height: 150px;
}
@media (max-width: 600px) {
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%; /* Modify the width for smaller screens */
  }
}
button[type="submit"] {
  background-color: black;
  color: white;
  padding: 20px 40px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 900;
  margin-top:1rem;
}

@media screen and (max-width: 1250px) {
        h1{
    font-size: 2rem;
    font-weight: 700;
   
    }
        .container-four-wrapper {
                flex-direction: column;
        }
        .container-four {
                height: 175vh;
        }
}

@media screen and (max-width: 900px) {
        h1{
    font-size: 2rem;
    font-weight: 700;
   
    }
        .container-four-wrapper {
                flex-direction: column;
        }
        .container-four {
                height: 200vh;
        }
}

</style>