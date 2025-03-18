<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto text-left">
        <h2>มาเริ่มต้นใช้งาน Vue.js กันเถอะ</h2>
        <h5>เริ่มจากติดตั้ง Vue CLI</h5>
        <p>มาเริ่มกันเลยที่การติดตั้ง Vue CLI หรือจะเรียก Vue.js ก็ได้นะ เริ่มจากเปิด Command Prompt(cmd) แล้วพิมพ์คำสั่ง</p>
        <pre><code><span class="token function">npm</span> <span class="token function">install</span> -g @vue/cil</code></pre><br>
        <p>เมื่อทำการติดตั้งสำเร็จ ให้ตรวจสอบว่า Vue พร้อมใช้งานหรือไม่</p>
        <pre><code>vue --version</code></pre>
        <img src="@/assets/vue-check.png" alt="ตรวจสอบการติดตั้งของ Vue CIL">
        <h5>มาเริ่มสร้างโปรเจค Vue.js กันเถอะ</h5>
        <p>ในการสร้างโปรเจค vue.js เราต้องใช้คำสั่งนี้นะครับ</p>
        <pre><code>vue create my-vue-project</code></pre><br>
        <p>ผมจะใช้เป็น my-vue-project นะครับ ส่วนท่านผู้ดูก็ใช้ชื่ออื่นตามสะดวกเลย</p>
        <img src="@/assets/vue-create.png" alt="เริ่มสร้างโปรเจค vue.js">
        <p>เมื่อกดสร้างทางผู้พัฒนาจะให้เลือก Version นะครับผมขอเลือกไปที่ <strong>Default ([Vue 3] babel, eslint)</strong> นะครับ</p>
        <img src="@/assets/vue-create1.png" alt="รอโปรเจคสร้าง">
        <img src="@/assets/vue-create2.png" alt="สร้างสำเร็จ">
        <p>เมื่อสร้างโปรเจ็คสำเร็จ เราไปลุยที่ขั้นตอนต่อไปเลยครับ เข้าไปที่โฟลเดอร์โปรเจคนะครับโดยใช้คำสั่ง</p>
        <pre><code>cd my-vue-project</code></pre><br>
        <p>จากนั้นทำการรันโปรเจคขึ้นมาด้วยคำสั่ง</p>
        <pre><code>npm run serve</code></pre><br>
        <img src="@/assets/compile.png" alt="Compile">
        <!-- <p>ทุกคนคงจะสงสัยนะครับว่าทำไม vue ถึงใช้ npm run serve เพราะ vue cil ตั้งแต่ตอนติดตั้งมาได้กำหนดไว้ในตัวของ package.json นะครับ</p>
        <img src="@/assets/vue-serve.png" alt="รันโดยใช้ npm run serve"> -->
        <!-- <p>แต่ถ้าอยากใช้ npm start นะครับก็ทำได้เช่นกัน โดยเข้าไปเพิ่มสคริปต์ในตัว package.json นะครับ</p>
        <img src="@/assets/vue-start.png" alt="รันโดยใช้ npm start"> -->
        <p>ตอนที่รัน มันจะหน้าตาประมาณนี้นะครับ เราต้องรอให้ครบ 100% เวลาเขียนโค้ดมันจะค่อย Compile ให้เราตลอดให้เราเห็นหน้าเว็บเราล่าสุดเสมอ</p>
        <img src="@/assets/vue-serve-success.png" alt="รันโดยใช้ npm run serve ผ่าน">
        <!-- <img src="@/assets/vue-start-success.png" alt="รันโดยใช้ npm start ผ่าน"> -->
        <p>เมื่อกดรันสำเร็จเราจะเห็นลิงค์ที่นำไปสู่เว็บไซต์ของเรา <span class="token function"><u>http://localhost:8080</u></span></p>
        <img src="@/assets/first-web.png" alt="หน้าแรกของเว็บ">
        <p>หน้าตาของเว็บไซต์เราเริ่มแรกนะครับ</p>        
      </div>
      <div class="row mt-4">
        <div class="col-6 d-flex justify-content-start"><router-link to="/MyHome" class="btn btn-success">ย้อนกลับ</router-link></div>
        <div class="col-6 d-flex justify-content-end"><router-link to="/ProjectStructure" class="btn btn-success">ต่อไป</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default {
  name: "InstallationComponent"
};
</script>

<style scoped>
.token.function{
  color: #f08d49;
}
.image {
  width: 100%;
  max-width: 600px;
  margin-top: 10px;
}

pre {
  position: relative;
  z-index: 1;
  margin: 0 auto;
  padding: 1.25rem 1.5rem;
  overflow-x: auto;
  overflow-y: auto;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  tab-size: 4;
  -webkit-hyphens: none;
  hyphens: none;
  background: #2c3e50;
}
code {
  margin: 0;
  border-radius: 3px;
  padding: .25rem .5rem;
  font-family: var(--code-font-family);
  font-size: 1.1em;
  color: #eee;
  background-color: var(--code-inline-bg-color);
}
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