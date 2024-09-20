<template>
  <form @submit.prevent="submitForm">
    <label for="name">Name</label>
    <input v-model="name" type="text" id="name" required/>
    
    <label for="email">Email</label>
    <input v-model="email" type="email" id="email" required/>
    
    <label for="message">Message</label>
    <textarea v-model="message" id="message" required></textarea>
    
    <button type="submit">Send</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      // Implement form submission logic here
      alert('Form submitted!');
    }
  }
}
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 40px auto; /* Center the form on the page */
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

form input,
form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; /* Ensure padding is included in the width */
  font-size: 16px;
}

form input:focus,
form textarea:focus {
  border-color: #42b983; /* Highlighted border when focused */
  outline: none; /* Remove default outline */
  box-shadow: 0 0 5px rgba(66, 185, 131, 0.5); /* Add a shadow to indicate focus */
}

form textarea {
  height: 150px; /* Default height for textarea */
  resize: vertical; /* Allow vertical resizing */
}

form button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #36a67c; /* Darken the button color on hover */
}

form button:focus {
  outline: none; /* Remove default focus outline */
  box-shadow: 0 0 5px rgba(66, 185, 131, 0.5); /* Add a shadow to indicate focus */
}
</style>
