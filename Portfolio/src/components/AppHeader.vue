<template>
  <header>
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="Logo" @click="goHome"/>
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Me</router-link></li>          
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
}
</script>

