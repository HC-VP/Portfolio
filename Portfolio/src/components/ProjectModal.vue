<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal">&times;</button>

      <h2>{{ project.title }}</h2>

      <p><strong>Date:</strong> {{ project.date }}</p>

      <p><strong>Technologies:</strong>
        <span v-if="Array.isArray(project.technologies)">
          {{ project.technologies.join(', ') }}
        </span>
        <span v-else>
          No technologies listed
        </span>
      </p>

      <p v-if="project.repository">
        <strong>GitHub Repository:</strong>
        <a :href="project.repository" target="_blank">View GitHub Repository</a>
      </p>
      <p v-if="project.link">
        <strong>Project Link:</strong>
        <a :href="project.link" target="_blank">View Project</a>
      </p>

      <!-- Images Section -->
      <div class="bottom-images" v-if="project.images && project.images.length">
        <img v-for="(img, index) in project.images" :key="index" :src="img" alt="Project Image" class="small-image"/>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => ({
        title: '',
        date: '',
        technologies: [],
        link: '',
        repo: '',
        images: []
      })
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
/* Modal Overlay (background) */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); /* Dim background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Modal Content */
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: auto; /* Add scrollbar if content overflows */
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

/* Styling for the images */
.bottom-images {
  display: flex; /* Align items in a row */
  justify-content: space-between; /* Evenly space images */
  margin-top: 20px; /* Space above the images */
  
}

.small-image {
  width: 300px; /* Fixed width for small images */
  height: 300px; /* Fixed height for small images */
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover; /* Cover the area without distortion */
}
</style>
