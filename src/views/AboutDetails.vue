<template>
  <section class="institution-about-section">
    <div class="institution-about-container">
      
      <div class="institution-image">
        <img src="@/assets/images/school1.jpg" alt="Institution" />
      </div>

      <div class="about-details">
        <h2>Cantonment English School & College</h2>
        <p>
          {{ fullText }}
        </p>
      </div>

    </div>
  </section>
</template>

<script>
import { aboutSchool } from "@/data/aboutSchool";

export default {
  name: "AboutDetails",
  data() {
    return {
      fullText: aboutSchool.full,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.institution-about-section {
  padding: 60px 20px;
  background: linear-gradient(120deg, #e0f7fa, #ffffff);
  font-family: 'Poppins', sans-serif;
}

.institution-about-container {
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
}

.institution-image {
  flex: 0 0 45%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease;
}

.institution-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.institution-image:hover img {
  transform: scale(1.05);
}

.about-details {
  flex: 0 0 55%;
  background: #ffffff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.about-details h2 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #00796b;
  border-left: 4px solid #00796b;
  padding-left: 12px;
}

.about-details p {
  font-size: 17px;
  line-height: 1.9;
  color: #333;
}

@media (max-width: 768px) {
  .institution-about-container {
    flex-direction: column;
    gap: 25px;
  }

  .institution-image, .about-details {
    flex: 100%;
    max-width: 100%;
  }

  .institution-image img {
    height: 250px;
  }

  .about-details h2 {
    font-size: 24px;
  }

  .about-details p {
    font-size: 16px;
  }
}
</style>
