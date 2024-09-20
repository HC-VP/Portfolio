<template>
  <section>
    <h1>Hugo CEMELI</h1>
    <p>Welcome to my portfolio! I am a fullstack developer specializing in Vue.js.</p>
    
    <!-- Projects Section -->
    <div class="projects">
      <div v-for="project in projects" :key="project.id" class="project-card" @click="openModal(project)">
        <img :src="project.image" alt="Project Image" class="project-image"/>
        <h3>{{ project.title }}</h3>
      </div>
    </div>

    <!-- Project Modal -->
    <ProjectModal v-if="showModal" :project="selectedProject" @close="closeModal"/>

    
  </section>
</template>

<script>
import ProjectModal from './ProjectModal.vue';

export default {
  data() {
    return {
      projects: [
        { id: 1, title: 'CV', date: '08/06/2024', technologies: ['HTML', 'CSS'], image: require('@/assets/img/CV1.png'), repository: 'https://github.com/HC-VP/Devoir_depot_1/tree/feature/specific/1', images: [require('@/assets/img/CV2.png'), require('@/assets/img/CV3.png'), require('@/assets/img/CV4.png')]}, 
        { id: 2, title: 'Cahier des Charges', date: '08/07/2024', technologies: ['Pages', 'PDF'], image: require('@/assets/img/CDC.png'), link: '/assets/Cahier des Charges.pdf', images: [require('@/assets/img/CDC1.png'), require('@/assets/img/CDC2.png'), require('@/assets/img/CDC3.png')]}, 
        { id: 3, title: 'Dynamiser un espace commentaires', date: '08/08/2024', technologies: ['Javascript'], image: require('@/assets/img/Dynamiser.png'), repository:'https://github.com/HC-VP/Dynamiser-espace-commentaire/tree/main/done', images: [require('@/assets/img/Dyn1.png'), require('@/assets/img/Dyn2.png'), require('@/assets/img/Dyn3.png')]},  
        { id: 4, title: 'Rock Paper Scissors Game', date: '19/09/2024', technologies: ['HTML', 'CSS', 'Javascript'], image: require('@/assets/img/RPS.png'), repository: 'https://github.com/HC-VP/RPS2', images: [require('@/assets/img/RPS.png'), require('@/assets/img/RPS1.png'), require('@/assets/img/RPS2.png')]}, 
      ],

      selectedProject: null,
      showModal: false
      
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedProject = null;
    },    
  },
  components: {
    ProjectModal
  }
}
</script>

<style scoped>

h1 {
  text-align: center;
}

p {
  text-align: center;
}


.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.project-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: scale(1.05);
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4);
}

.project-image {
  max-width: 100%;
  height: auto;
  max-height: 150px;
  border-radius: 10px;
}

.project-card h3 {
  margin-top: 15px;
  font-size: 18px;
}


</style>
