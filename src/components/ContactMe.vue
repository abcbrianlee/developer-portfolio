<template>
        <div class="container-four">
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
                                        <textarea id="note" v-model="note"  placeholder="Message" required></textarea>
                                </div>
                                <button type="submit">Submit</button>
                        </form>
                </div>
        </div>
</template>

<script>
export default {
        data() {
                return {
                        name:'',
                        email:'',
                        note: ''
                };
        },
        methods: {
                submitForm() {
                        console.log('Form submitted!');
                        console.log('Name:', this.name);
                        console.log('Email:', this.email);
                        console.log('Note:', this.note);
                }
        }
}
</script>

<style>
h1{
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 6rem;
    text-align: center;
}
.container-four {
    height:100vh;
    background-color: #4CD6AF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
.contact-me {
        display: flex;
        flex-direction: column;
}

.form-group {
  margin-bottom: 10px;
}
input[type="text"],
input[type="email"],
textarea {
  width: 600px;
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

</style>