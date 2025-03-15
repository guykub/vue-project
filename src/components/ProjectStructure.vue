<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto text-left">
        <h2>โครงสร้างของโปรเจค Vue.js</h2>
        <p>เมื่อคุณสร้างโปรเจค Vue.js ด้วย Vue CLI จะมีโครงสร้างโปรเจคที่ถูกตั้งค่าไว้ล่วงหน้าเพื่อให้การพัฒนาแอปพลิเคชันมีความสะดวกและมีระเบียบมากขึ้น</p>
        <h5>โครงสร้างของไฟล์ในโปรเจค Vue.js</h5>
        <p>โครงสร้างของโปรเจค Vue.js ที่สร้างจาก Vue CLI มีลักษณะดังนี้</p>
        <div>
          <img src="@/assets/ProjectStructure/project-structure.png" alt="โครงสร้างของโปรเจค">
        </div>        
        <h5>รายละเอียดของและโครงสร้างไฟล์หลัก</h5>
        <h5>1. node_modules</h5>
        <p>โฟลเดอร์นี้เก็บทุก package หรือ dependencies ที่โปรเจคของคุณใช้ ซึ่งจะถูกติดตั้งโดย NPM หรือ Yarn เมื่อคุณรันคำสั่ง <code>npm install</code> หรือ <code>yarn install</code></p>
        <div>
          <img src="@/assets/ProjectStructure/node_modules.png" alt="node_modules">
        </div>
        <h5>2. public</h5>
        <p>โฟลเดอร์นี้เก็บไฟล์ที่ไม่ถูกจัดการโดย Vue แต่จะถูกคัดลอกไปยังโฟลเดอร์ build ในขั้นตอนการ build โปรเจค ตัวอย่างเช่น</p>
        <div>
          <img src="@/assets/ProjectStructure/public.png" alt="public">
        </div>
        <ul><li><strong>index.html </strong>เป็นไฟล์ HTML หลักที่ใช้แสดงผลแอปพลิเคชัน Vue.js ของโปรเจค</li></ul>
        <h5>3. src</h5>
        <p>โฟลเดอร์ src เป็นที่เก็บไฟล์หลักของแอปพลิเคชัน Vue.js ของคุณ ซึ่งประกอบด้วยไฟล์ดังต่อไปนี้</p>
        <div>
          <img src="@/assets/ProjectStructure/src.png" alt="src">
        </div>
        <ul>
          <li><strong>assets : </strong>เก็บไฟล์ที่ไม่ใช่โค้ดเช่น รูปภาพ, ไฟล์ CSS, ฟอนต์ ฯลฯ</li>
          <li><strong>components : </strong>โฟลเดอร์นี้เก็บไฟล์ Vue components ซึ่งแต่ละคอมโพเนนต์จะรับผิดชอบการแสดงผลของส่วนต่างๆ ของแอปพลิเคชัน</li>
          <li><strong>views : </strong>โฟลเดอร์นี้เก็บไฟล์ที่ใช้ร่วมกับ Vue Router ในการแสดงผลหน้าต่างๆ ของแอปพลิเคชัน</li>
          <li><strong>App.vue : </strong>คอมโพเนนต์หลักของแอปพลิเคชัน ซึ่งจะเป็นคอมโพเนนต์เริ่มต้นที่แสดงใน <code>index.html</code></li>
          <li><strong>main.js : </strong>เป็นไฟล์ที่กำหนดจุดเริ่มต้นของโปรเจกต์ Vue โดยจะทำการเชื่อมต่อ Vue instance เข้ากับ element ใน <code>index.html</code></li>
        </ul>
        <p><strong style="color: black;">รายละเอียดย่อยในโฟลเดอร์ scr</strong></p>
        <p><strong style="color: black;">3.1 assets</strong></p>
        <div>
          <img src="@/assets/ProjectStructure/assets.png" alt="assets">
        </div>
        <p style="text-indent: 70px;">เก็บไฟล์ที่ไม่ใช่โค้ด เช่น รูปภาพ, ฟอนต์, ไฟล์ CSS หรือสไตล์ที่ใช้ในโปรเจค</p>
        <p><strong style="color: black;">3.2 components</strong></p>
        <div>
          <img src="@/assets/ProjectStructure/components.png" alt="">
        </div>
        <p style="text-indent: 70px;">โฟลเดอร์นี้ใช้เก็บ Vue components ซึ่งแต่ละ component จะรับผิดชอบการแสดงผล UI บางส่วนของแอปพลิเคชัน</p>
        <p><strong style="color: black;">3.3 views</strong></p>
        <div>
          <img src="" alt="">
        </div>
        <p style="text-indent: 70px;">โฟลเดอร์นี้เก็บไฟล์ Vue ที่ใช้ร่วมกับ Vue Router ในการสร้างหน้าเว็บต่างๆ เช่น หน้าแรก, หน้ารายละเอียด, หรือหน้าสำหรับผู้ใช้ล็อกอิน</p>
        <h5>4. package.json</h5>
        <p>ไฟล์นี้จะเก็บข้อมูลสำคัญของโปรเจค เช่น ข้อมูลของ dependencies ที่โปรเจคต้องการ, สคริปต์ที่สามารถรันได้ และข้อมูลเกี่ยวกับการตั้งค่าอื่นๆ</p>
        <div>
          <img src="@/assets/ProjectStructure/package.json.png" alt="package.json">
        </div>
        <h5>5. babel.config.js</h5>
        <p>ไฟล์นี้เก็บการตั้งค่าของ Babel ซึ่งใช้ในการแปลง JavaScript จากรูปแบบ ES6 หรือ ES7 ให้สามารถทำงานในเบราว์เซอร์ที่รองรับ JavaScript รุ่นเก่าได้</p>
        <div>
          <img src="@/assets/ProjectStructure/babel.config.js.png" alt="babel.config.js">
        </div>
        <h5>6. vue.config.js</h5>
        <p>ไฟล์นี้ใช้สำหรับการตั้งค่าคอนฟิกเฉพาะของ Vue CLI เช่น การตั้งค่าเกี่ยวกับการปรับแต่งการ build หรือการตั้งค่า proxy server</p>
        <div>
          <img src="@/assets/ProjectStructure/vue.config.js.png" alt="vue.config.js">
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-6 d-flex justify-content-start"><router-link to="/InstallationComponent" class="btn btn-success">ย้อนกลับ</router-link></div>
        <div class="col-6 d-flex justify-content-end"><router-link to="/BasicPage" class="btn btn-success">ต่อไป</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
.btn{
    padding: 10px 20px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
}
</style>
