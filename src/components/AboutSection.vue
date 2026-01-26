<template>
  <section id="about-section" class="about-section">
    <div class="about-wrapper">

      <div class="about-text" v-show="visible" :class="{ 'slide-left': visible }">
        <h3 class="welcome-text">Welcome to</h3>
        <h2 class="institution-name">CANTONMENT ENGLISH SCHOOL & COLLEGE</h2>

        <p class="description">
          {{ shortText }}
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
import { aboutSchool } from "@/data/aboutSchool";

export default {
  name: "AboutSection",
  data() {
    return {
      visible: false,
      fullText: aboutSchool.full,
    };
  },
  computed: {
    shortText() {
      return this.fullText.substring(0, 300) + "...";
    },
  },
  mounted() {
    setTimeout(() => {
      this.visible = true;
    }, 100);
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.about-section { 
    background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
    padding: 60px 20px; 
    color: #222; 
    font-family: 'Poppins', sans-serif;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
}

.about-wrapper {
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    flex-wrap: wrap; 
    max-width: 1200px;
    margin: 0 auto;
    gap: 40px;
}

.about-text { 
    flex: 1; 
    min-width: 300px; 
    opacity: 0; 
    transform: translateX(-50px); 
    transition: all 1s ease; 
}

.about-text.slide-left { 
    opacity: 1; 
    transform: translateX(0); 
}

.welcome-text {
    font-size: 22px;
    font-weight: 500;
    color: #0077cc;
    margin-bottom: 10px;
}

.institution-name {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #222;
}

.description {
    font-size: 17px;
    line-height: 1.8;
    font-weight: 400;
    margin-bottom: 25px;
    color: #555;
}

.read-more-btn { 
    display: inline-block; 
    padding: 10px 20px; 
    background: #0077cc; 
    color: #fff; 
    border-radius: 50px;
    text-decoration: none; 
    font-weight: 500; 
    transition: all 0.3s ease; 
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.read-more-btn:hover { 
    background: #005fa3; 
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
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
    max-width: 500px;
    height: auto; 
    object-fit: cover; 
    border-radius: 15px; 
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

@media (max-width: 992px) {
    .about-wrapper {
        flex-direction: column-reverse;
        text-align: center;
    }

    .about-text { 
        margin: 20px 0 0 0; 
        transform: translateY(20px); 
    }

    .about-text.slide-left { 
        transform: translateY(0); 
    }

    .about-image { 
        width: 100%; 
        height: auto; 
        transform: translateY(-20px); 
        margin-bottom: 20px;
    }

    .about-image.slide-right { 
        transform: translateY(0); 
    }
}
</style>
