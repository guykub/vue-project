<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto text-left">
        <h2>Vue.js เบื้องต้นอ่านแล้วได้เกรด A แน่นอน!!!</h2><hr>
        <img src="@/assets/vue1.png" alt="Vue.js Logo">
        <h4>Vue.js คืออะไร</h4>
        <p class="text-indent"><span> Vue.js เป็น framework JavaScript ที่ใช้สำหรับสร้าง UI และ Single Page Applications (SPA) โดยเน้นการทำงานที่ง่ายและยืดหยุ่นและได้รับความนิยมจากนักพัฒนาเว็บมากขึ้นเรื่อยๆ</span>
        <span>Vue.js ถูกพัฒนาโดย <strong>Evan You</strong> นักพัฒนาเว็บชาวจีนที่เคยทำงานที่ Google ก่อนจะตัดสินใจสร้าง Vue.js ขึ้นมาในปี 2014 หลังจากนั้น Vue.js ได้รับความนิยมอย่างรวดเร็วและกลายเป็นหนึ่งใน framework ที่ได้รับความนิยมสูงสุดในการพัฒนาเว็บแอปพลิเคชัน</span>
        </p>
        <h5>Vue.js มีความแตกต่างจาก Framework/Library อื่นอย่างไร</h5>
        <h5>Vue.js vs React</h5>
        <ul>
          <li><strong>การเรียนรู้:</strong> Vue.js มีเอกสารและตัวอย่างที่เข้าใจง่าย ทำให้เริ่มต้นได้เร็วกว่า React</li>
          <li><strong>การใช้งาน:</strong> Vue.js ใช้โครงสร้างแบบ template-based ที่ทำให้สามารถเริ่มต้นสร้าง UI ได้อย่างรวดเร็ว ส่วน React ใช้ JSX ซึ่งอาจต้องใช้เวลาทำความเข้าใจมากขึ้น</li>
          <li><strong>State Management:</strong> Vue.js มี Vuex ที่เป็นเครื่องมือสำหรับการจัดการ state ในขณะที่ React ใช้ Context API หรือ Redux</li>
        </ul>
        <h5>Vue.js vs Angular</h5>
        <ul>
          <li><strong>ขนาดของไฟล์:</strong> Vue.js มีขนาดไฟล์ที่เล็กกว่ามาก ทำให้เหมาะกับการพัฒนาเว็บที่มีขนาดเล็กและไม่ซับซ้อนเกินไป</li>
          <li><strong>การใช้งาน:</strong> Vue.js เป็น framework ที่เรียนรู้ได้ง่ายกว่า Angular ซึ่ง Angular มีการตั้งค่าและโครงสร้างที่ซับซ้อนกว่า</li>
          <li><strong>การบูรณาการกับโปรเจกต์เดิม:</strong> Vue.js สามารถบูรณาการกับโปรเจกต์ที่มีอยู่เดิมได้ง่ายกว่า Angular ที่ต้องมีการจัดการกับโครงสร้างที่ซับซ้อน</li>
        </ul>
        <h5>Vue.js มีคุณสมบัติอย่างไร</h5>
        <ul>
          <li>🟢 ใช้งานง่ายและเรียนรู้ได้เร็ว</li>
          <li>⚡ มีประสิทธิภาพสูงและขนาดเล็ก</li>
          <li>🔄 รองรับการทำงานแบบ Reactive</li>
          <li>🧩 มีระบบ Component ที่ช่วยให้โค้ดเป็นระเบียบและนำกลับมาใช้ใหม่ได้</li>
          <li>🚀 รองรับ Vue Router และ Vuex สำหรับการจัดการ State</li>
          <li>🌐 รองรับการทำงานแบบ SSR (Server Side Rendering) และ PWA (Progressive Web Apps)</li>
        </ul>
        <h5>ข้อดีและข้อเสียของ Vue.js</h5>
        <ul>
          <li>🌟 เรียนรู้ได้เร็วและเอกสารชัดเจน</li>
          <li>⚡ มีขนาดเล็กและทำงานได้เร็ว</li>
          <li>🔧 สามารถใช้ Vue.js ได้กับโปรเจกต์ที่มีอยู่เดิม (ไม่จำเป็นต้องใช้ทั้งหมด)</li>
        </ul>
        <h5>ข้อเสีย</h5>
        <ul>
          <li>💼 มีการสนับสนุนจากชุมชนที่เล็กกว่า React และ Angular เล็กน้อย</li>
          <li>⚙️ เครื่องมือและ plugin บางตัวอาจจะไม่หลากหลายเหมือนกับ Angular หรือ React</li>
        </ul>
      </div>
    </div>
    <div class="d-flex justify-content-end mt-4">
        <router-link to="/InstallationComponent" class="btn btn-success ">ต่อไป</router-link>
    </div>
  </div>
</template>

<script>
import '@/assets/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default {
  name: "MyHome"
};
</script>

<style scoped>

.btn{
    padding: 10px 20px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
}
div {
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
ul {
  text-align: left;
  margin-left: 20px;
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
