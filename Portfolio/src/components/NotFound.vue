<template>
  <div class="not-found">
    <img src="@/assets/img/404.png" alt="404 - Developer Confused" class="not-found-image"/> 
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <router-link to="/">Go Back Home</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}

.not-found h1 {
  font-size: 48px;
  color: #e38e04;
}

.not-found p {
  font-size: 18px;
  color: #666;
}

.not-found a {
  color: #43a047;
  text-decoration: none;
  font-weight: bold;
}

.not-found a:hover {
  text-decoration: underline;
}
</style>
