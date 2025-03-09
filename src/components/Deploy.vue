<template>
  <div>
    <h1>การ Deploy - วิธีนำโปรเจกต์ขึ้นโฮสต์ให้ใช้งานจริง</h1>

    <!-- สร้าง Tabs -->
    <div class="tabs">
      <button 
        v-for="(tab, index) in tabs" 
        :key="index" 
        @click="activeTab = index" 
        :class="{'active': activeTab === index}"
      >
        {{ tab.title }}
      </button>
    </div>

    <!-- แสดงเนื้อหาของแท็บ -->
    <div class="tab-content">
      <div v-if="activeTab === 0">
        <h2>การ Deploy บน GitHub Pages</h2>
        <p>ขั้นตอนการ deploy โปรเจกต์ Vue.js บน GitHub Pages:</p>

        <h3>ขั้นตอนที่ 1: ติดตั้งไลบรารี gh-pages</h3>
        <pre><code>npm install gh-pages --save-dev</code></pre>
        <img src="path/to/github-step1.png" alt="GitHub Pages Step 1" class="my-4">

        <h3>ขั้นตอนที่ 2: ตั้งค่า vue.config.js</h3>
        <pre><code>
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ชื่อ-repository/'
    : '/'
};
        </code></pre>
        <img src="path/to/github-step2.png" alt="GitHub Pages Step 2" class="my-4">

        <h3>ขั้นตอนที่ 3: เพิ่มคำสั่งใน package.json</h3>
        <pre><code>
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
        </code></pre>
        <img src="path/to/github-step3.png" alt="GitHub Pages Step 3" class="my-4">

        <h3>ขั้นตอนที่ 4: ใช้คำสั่ง npm run deploy</h3>
        <pre><code>npm run deploy</code></pre>
        <img src="path/to/github-step4.png" alt="GitHub Pages Step 4" class="my-4">
      </div>

      <div v-if="activeTab === 1">
        <h2>การ Deploy บน Netlify</h2>
        <p>ขั้นตอนการ deploy โปรเจกต์ Vue.js บน Netlify:</p>

        <h3>ขั้นตอนที่ 1: สร้างบัญชีหรือเข้าสู่ระบบ Netlify</h3>
        <p>เข้าไปที่ <a href="https://netlify.com" target="_blank">Netlify</a> แล้วสร้างบัญชีหรือเข้าสู่ระบบ</p>
        <img src="path/to/netlify-step1.png" alt="Netlify Step 1" class="my-4">

        <h3>ขั้นตอนที่ 2: เชื่อมต่อ GitHub repository</h3>
        <p>เชื่อมต่อ repository ของคุณจาก GitHub ไปยัง Netlify</p>
        <img src="path/to/netlify-step2.png" alt="Netlify Step 2" class="my-4">

        <h3>ขั้นตอนที่ 3: ตั้งค่าการ Build</h3>
        <p>ตั้งค่า Build command และ Publish directory:</p>
        <ul>
          <li>Build command: <code>npm run build</code></li>
          <li>Publish directory: <code>dist/</code></li>
        </ul>
        <img src="path/to/netlify-step3.png" alt="Netlify Step 3" class="my-4">

        <h3>ขั้นตอนที่ 4: คลิก deploy</h3>
        <p>คลิกที่ปุ่ม "Deploy" และรอให้โปรเจกต์ถูก deploy</p>
        <img src="path/to/netlify-step4.png" alt="Netlify Step 4" class="my-4">
      </div>

      <div v-if="activeTab === 2">
        <h2>การ Deploy บน Vercel</h2>
        <p>ขั้นตอนการ deploy โปรเจกต์ Vue.js บน Vercel:</p>

        <h3>ขั้นตอนที่ 1: สร้างบัญชีหรือเข้าสู่ระบบ Vercel</h3>
        <p>เข้าไปที่ <a href="https://vercel.com" target="_blank">Vercel</a> แล้วสร้างบัญชีหรือเข้าสู่ระบบ</p>
        <img src="path/to/vercel-step1.png" alt="Vercel Step 1" class="my-4">

        <h3>ขั้นตอนที่ 2: เชื่อมต่อ GitHub repository</h3>
        <p>เชื่อมต่อ GitHub repository ของคุณกับ Vercel</p>
        <img src="path/to/vercel-step2.png" alt="Vercel Step 2" class="my-4">

        <h3>ขั้นตอนที่ 3: ตั้งค่าการ Build</h3>
        <p>ตั้งค่า Build command และ Publish directory:</p>
        <ul>
          <li>Build command: <code>npm run build</code></li>
          <li>Publish directory: <code>dist/</code></li>
        </ul>
        <img src="path/to/vercel-step3.png" alt="Vercel Step 3" class="my-4">

        <h3>ขั้นตอนที่ 4: คลิก deploy</h3>
        <p>คลิกที่ปุ่ม "Deploy" และรอให้โปรเจกต์ถูก deploy</p>
        <img src="path/to/vercel-step4.png" alt="Vercel Step 4" class="my-4">
      </div>
    </div>

    <router-link to="/API" class="button-left">ย้อนกลับ</router-link>
  </div>
</template>

<script>
export default {
  name: "DeployExample",
  data() {
    return {
      activeTab: 0, // เริ่มต้นแสดงแท็บแรก
      tabs: [
        { title: "GitHub Pages" },
        { title: "Netlify" },
        { title: "Vercel" }
      ]
    };
  },
};
</script>

<style scoped>
h1 {
  color: #2c3e50;
}
h2 {
  color: #34495e;
}
.tabs {
  display: flex;
  margin-bottom: 20px;
}
button {
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
}
button.active {
  background-color: #42b983;
  color: white;
}
.tab-content {
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
}
pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}
code {
  font-size: 1.1em;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 5px;
}
.my-4 {
  margin-top: 20px;
}
/* เพิ่มสไตล์สำหรับปุ่ม */
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
</style>

