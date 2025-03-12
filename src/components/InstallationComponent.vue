<template>
  <div>
    <h1>การติดตั้ง Vue.js</h1>

    <h2>1. ติดตั้ง Vue CLI</h2>
    <p>หากยังไม่มี Vue CLI ให้ติดตั้งโดยใช้คำสั่งนี้:</p>
    <pre><code>npm install -g @vue/cli</code></pre>
    <p>เมื่อการติดตั้งเสร็จสมบูรณ์ ให้ตรวจสอบว่า Vue CLI พร้อมใช้งานโดยพิมพ์:</p>
    <pre><code>vue --version</code></pre>
    <img src="/path-to-your-image/vue-cli-check.png" alt="ตรวจสอบ Vue CLI" class="image">

    <h2>2. สร้างโปรเจกต์ Vue.js ใหม่</h2>
    <p>ใช้คำสั่งนี้เพื่อสร้างโปรเจกต์ Vue ใหม่:</p>
    <pre><code>vue create my-vue-project</code></pre>
    <p>จากนั้นเลือก **"Default ([Vue 3] babel, eslint)"** หรือกำหนดค่าเอง</p>
    <img src="/path-to-your-image/vue-create.png" alt="สร้างโปรเจกต์ Vue.js" class="image">

    <h2>3. เข้าไปในโฟลเดอร์โปรเจกต์</h2>
    <pre><code>cd my-vue-project</code></pre>

    <h2>4. รันโปรเจกต์</h2>
    <p>จากนั้นรันคำสั่งนี้เพื่อเปิดเซิร์ฟเวอร์ทดสอบ:</p>
    <pre><code>npm run serve</code></pre>
    <p>หากสำเร็จ คุณจะเห็นลิงก์สำหรับเปิดเว็บแอปที่ <code>http://localhost:8080</code></p>
    <img src="/path-to-your-image/vue-running.png" alt="รัน Vue.js" class="image">

    <!-- ปุ่มไป-กลับ -->
    <router-link to="/MyHome" class="button-left">ย้อนกลับ</router-link>
    <router-link to="/ProjectStructure" class="button-right">ต่อไป</router-link>
  </div>
</template>

<script>
export default {
  name: "InstallationComponent"
};
</script>

<style scoped>
.image {
  width: 100%;
  max-width: 600px;
  margin-top: 10px;
}

pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}

code {
  font-size: 1.1em;
  color: #d63384;
}

.button-left {
  position: fixed;
  left: 0;
  bottom: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.button-right {
  position: fixed;
  right: 0;
  bottom: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}
</style>