<template>
  <div class="contact-page">
    <h1>Contact Page</h1>
    <div class="contact-container">
      <div class="contact-form">
        <h2>Get in Touch</h2>
        <form @submit.prevent="submitForm">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model="form.firstName" required />

          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" v-model="form.lastName" required />

          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />

          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div class="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        <p><strong>Telephone:</strong> +1 234 567 890</p>
        <p><strong>Email:</strong> contact@example.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.form);
      alert('Message sent!');
      this.form.firstName = '';
      this.form.lastName = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact-page {
  padding: 20px;
  font-family: Arial, sans-serif;
}
.contact-page h1 {
  text-align: center;
}

.contact-container {
  display: flex;
  gap: 40px;
  margin-top: 20px;
  flex-wrap: wrap; 
}


.contact-form {
  flex: 1 1 300px; 
}

.contact-form form {
  display: flex;
  flex-direction: column;
}

.contact-form label {
  margin-top: 10px;
  margin-bottom: 5px;
}

.contact-form input,
.contact-form textarea {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.contact-form textarea {
  resize: vertical;
  height: 100px;
}
.contact-form,
.contact-info {
  flex: 1 1 300px;
  background-color: #f7f7f7; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.contact-form button {
  margin-top: 15px;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #0056b3;
}

.contact-info {
  flex: 1 1 300px;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 8px;
}

.contact-info p {
  margin: 10px 0;
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    gap: 20px;
  }

  .contact-form,
  .contact-info {
    flex: 1 1 100%;
  }
}
</style>
