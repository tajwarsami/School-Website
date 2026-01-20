<template>
  <section id="about-section" class="about-section">
    <div class="container">

      <div class="about-text" v-show="visible" :class="{ 'slide-left': visible }">
        <h3 class="welcome-text">Welcome to</h3>
        <h2 class="institution-name">CANTONMENT ENGLISH SCHOOL & COLLEGE</h2>
        <p class="description">
          Cantonment English School & College is committed to academic excellence, discipline, and moral values. It focuses on holistic development and nurturing students to become responsible citizens.
        </p>

        <router-link to="/about-details" class="read-more-btn">
          Read More
        </router-link>
      </div>

      <div class="about-image" v-show="visible" :class="{ 'slide-right': visible }">
        <img src="@/assets/images/school1.jpg" alt="Institution" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.visible = true;
    }, 100);
  },
};
</script>

<style scoped>
.about-section {
  background: #b8b1b1;
  padding: 40px 20px;
  display: flex;
  align-items: stretch;
  color: #080808;
}

.container {
  display: flex;
  align-items: stretch; 
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.about-text {
  flex: 1;
  min-width: 300px;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1s ease;
  margin-right: 30px;
}

.about-text.slide-left {
  opacity: 1;
  transform: translateX(0);
}

.welcome-text {
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 5px;
}

.institution-name {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
}

.description {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
}


.about-image {
  flex: 1;
  min-width: 300px;
  text-align: center;
  opacity: 0;
  transform: translateX(50px);
  transition: all 1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-image.slide-right {
  opacity: 1;
  transform: translateX(0);
}

.about-image img {
  width: 100%;
  height: 100%;       
  object-fit: cover; 
  border-radius: 10px;
}

.read-more-btn {
  display: inline-block;
  padding: 8px 16px;
  background: #0077cc;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s;
}

.read-more-btn:hover {
  background: #7a7e81;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column-reverse;
    text-align: center;
  }

  .about-text {
    margin: 15px 0 0 0;
    transform: translateY(10px);
  }

  .about-text.slide-left {
    transform: translateY(0);
  }

  .about-image {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
    transform: translateY(-10px);
  }

  .about-image img {
    height: auto;
  }

  .about-image.slide-right {
    transform: translateY(0);
  }
}
</style>
