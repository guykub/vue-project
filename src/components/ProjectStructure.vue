<template>
  <div>
    <h1>โครงสร้างโปรเจกต์ใน Vue.js</h1>
    <p>เมื่อคุณสร้างโปรเจกต์ Vue.js ด้วย Vue CLI จะมีโครงสร้างโปรเจกต์ที่ถูกตั้งค่าไว้ล่วงหน้าเพื่อให้การพัฒนาแอปพลิเคชันมีความสะดวกและมีระเบียบมากขึ้น</p>

    <h2>โครงสร้างไฟล์หลักของ Vue.js</h2>
    <p>โครงสร้างโปรเจกต์ Vue.js ที่สร้างจาก Vue CLI มีลักษณะดังนี้:</p>
    <div>
      <!-- ช่องสำหรับใส่รูปโครงสร้างโปรเจกต์ -->
      <img src="/path-to-your-image/project-structure.png" alt="โครงสร้างโปรเจกต์" style="width: 100%; max-width: 600px;">
    </div>
    
    <h2>รายละเอียดของไฟล์หลัก</h2>
    
    <!-- node_modules -->
    <h3>1. node_modules/</h3>
    <p>โฟลเดอร์นี้เก็บทุก package หรือ dependencies ที่โปรเจกต์ของคุณใช้ ซึ่งจะถูกติดตั้งโดย NPM หรือ Yarn เมื่อคุณรันคำสั่ง <code>npm install</code> หรือ <code>yarn install</code></p>
    <div>
      <!-- ช่องสำหรับใส่รูป node_modules -->
      <img src="/path-to-your-image/node_modules.png" alt="node_modules" style="width: 100%; max-width: 600px;">
    </div>

    <!-- public -->
    <h3>2. public/</h3>
    <p>โฟลเดอร์นี้เก็บไฟล์ที่ไม่ถูกจัดการโดย Vue แต่จะถูกคัดลอกไปยังโฟลเดอร์ build ในขั้นตอนการ build โปรเจกต์ ตัวอย่างเช่น:</p>
    <ul>
      <li><strong>index.html:</strong> เป็นไฟล์ HTML หลักที่ใช้แสดงผลแอปพลิเคชัน Vue.js ของคุณ</li>
    </ul>
    <div>
      <!-- ช่องสำหรับใส่รูป public -->
      <img src="/path-to-your-image/public.png" alt="public" style="width: 100%; max-width: 600px;">
    </div>

    <!-- src -->
    <h3>3. src/</h3>
    <p>โฟลเดอร์ src เป็นที่เก็บไฟล์หลักของแอปพลิเคชัน Vue.js ของคุณ ซึ่งประกอบด้วย:</p>
    <ul>
      <li><strong>assets/:</strong> เก็บไฟล์ที่ไม่ใช่โค้ดเช่น รูปภาพ, ไฟล์ CSS, ฟอนต์ ฯลฯ</li>
      <li><strong>components/:</strong> โฟลเดอร์นี้เก็บไฟล์ Vue components ซึ่งแต่ละคอมโพเนนต์จะรับผิดชอบการแสดงผลของส่วนต่างๆ ของแอปพลิเคชัน</li>
      <li><strong>views/:</strong> โฟลเดอร์นี้เก็บไฟล์ที่ใช้ร่วมกับ Vue Router ในการแสดงผลหน้าต่างๆ ของแอปพลิเคชัน</li>
      <li><strong>App.vue:</strong> คอมโพเนนต์หลักของแอปพลิเคชัน ซึ่งจะเป็นคอมโพเนนต์เริ่มต้นที่แสดงใน <code>index.html</code></li>
      <li><strong>main.js:</strong> เป็นไฟล์ที่กำหนดจุดเริ่มต้นของโปรเจกต์ Vue โดยจะทำการเชื่อมต่อ Vue instance เข้ากับ element ใน <code>index.html</code></li>
    </ul>
    <div>
      <!-- ช่องสำหรับใส่รูป src -->
      <img src="/path-to-your-image/src.png" alt="src" style="width: 100%; max-width: 600px;">
    </div>

    <h3>รายละเอียดโฟลเดอร์ย่อยใน src/</h3>
    <!-- assets -->
    <h4>3.1 assets/</h4>
    <p>เก็บไฟล์ที่ไม่ใช่โค้ด เช่น รูปภาพ, ฟอนต์, ไฟล์ CSS หรือสไตล์ที่ใช้ในโปรเจกต์</p>
    <div>
      <!-- ช่องสำหรับใส่รูป assets -->
      <img src="/path-to-your-image/assets.png" alt="assets" style="width: 100%; max-width: 600px;">
    </div>

    <!-- components -->
    <h4>3.2 components/</h4>
    <p>โฟลเดอร์นี้ใช้เก็บ Vue components ซึ่งแต่ละ component จะรับผิดชอบการแสดงผล UI บางส่วนของแอปพลิเคชัน</p>
    <div>
      <!-- ช่องสำหรับใส่รูป components -->
      <img src="/path-to-your-image/components.png" alt="components" style="width: 100%; max-width: 600px;">
    </div>

    <!-- views -->
    <h4>3.3 views/</h4>
    <p>โฟลเดอร์นี้เก็บไฟล์ Vue ที่ใช้ร่วมกับ Vue Router ในการสร้างหน้าเว็บต่างๆ เช่น หน้าแรก, หน้ารายละเอียด, หรือหน้าสำหรับผู้ใช้ล็อกอิน</p>
    <div>
      <!-- ช่องสำหรับใส่รูป views -->
      <img src="/path-to-your-image/views.png" alt="views" style="width: 100%; max-width: 600px;">
    </div>

    <h3>4. package.json</h3>
    <p>ไฟล์นี้จะเก็บข้อมูลสำคัญของโปรเจกต์ เช่น ข้อมูลของ dependencies ที่โปรเจกต์ต้องการ, สคริปต์ที่สามารถรันได้ และข้อมูลเกี่ยวกับการตั้งค่าอื่นๆ</p>
    <div>
      <!-- ช่องสำหรับใส่รูป package.json -->
      <img src="/path-to-your-image/package-json.png" alt="package.json" style="width: 100%; max-width: 600px;">
    </div>

    <h3>5. babel.config.js</h3>
    <p>ไฟล์นี้เก็บการตั้งค่าของ Babel ซึ่งใช้ในการแปลง JavaScript จากรูปแบบ ES6 หรือ ES7 ให้สามารถทำงานในเบราว์เซอร์ที่รองรับ JavaScript รุ่นเก่าได้</p>
    <div>
      <!-- ช่องสำหรับใส่รูป babel.config.js -->
      <img src="/path-to-your-image/babel-config.png" alt="babel.config.js" style="width: 100%; max-width: 600px;">
    </div>

    <h3>6. vue.config.js</h3>
    <p>ไฟล์นี้ใช้สำหรับการตั้งค่าคอนฟิกเฉพาะของ Vue CLI เช่น การตั้งค่าเกี่ยวกับการปรับแต่งการ build หรือการตั้งค่า proxy server</p>
    <div>
      <!-- ช่องสำหรับใส่รูป vue.config.js -->
      <img src="/path-to-your-image/vue-config.png" alt="vue.config.js" style="width: 100%; max-width: 600px;">
    </div>

    <!-- เพิ่มปุ่มย้อนไปหน้า Home และไป Basic Usage -->
    <router-link to="/InstallationComponent" class="button-left">ย้อนกลับ</router-link>
    <router-link to="/BasicPage" class="button-right">ต่อไป</router-link>
  </div>
</template>

<script>
export default {
  name: "ProjectStructure"
};
</script>

<style scoped>
div {
  text-align: center;
  margin-top: 20px;
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
h2 {
  margin-top: 20px;
}
h3 {
  margin-top: 15px;
}
ul {
  text-align: left;
  margin-left: 20px;
}
img {
  margin-top: 20px;
  max-width: 100%;
  height: auto;
}

/* สไตล์สำหรับปุ่ม */
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
