<template>
  <div>
    <h1>Vue Router - การสร้างเว็บแบบหลายหน้า (Multi-Page)</h1>
    
    <h2>การแนะนำ Vue Router</h2>
    <p>Vue Router เป็น <strong>router library</strong> ที่ใช้ในการสร้างเว็บแอปพลิเคชันแบบหลายหน้า (Multi-Page) ใน Vue.js</p>
    <p>Vue Router ช่วยให้คุณสามารถสร้างแอปพลิเคชันที่มีการเปลี่ยนหน้า (navigate) โดยไม่ต้องรีเฟรชหน้าเว็บ (Single-Page Application - SPA)</p>
    
    <h2>การติดตั้ง Vue Router</h2>
    <p>ก่อนที่คุณจะใช้ Vue Router ในโปรเจกต์ของคุณ คุณต้องติดตั้ง Vue Router ก่อน ด้วยคำสั่ง:</p>
    <pre><code>npm install vue-router</code></pre>
    <p>เมื่อคุณติดตั้งแล้ว คุณสามารถนำ Vue Router มาใช้ในโปรเจกต์ของคุณได้โดยการสร้างไฟล์ router และตั้งค่า routing ต่างๆ</p>

    <h2>การตั้งค่า Vue Router</h2>
    <p>หลังจากติดตั้ง Vue Router เสร็จแล้ว คุณต้องตั้งค่าการใช้งาน router ในแอปพลิเคชันของคุณ:</p>
    <pre><code>
      import Vue from 'vue';
      import Router from 'vue-router';
      import Home from './views/Home.vue';
      import About from './views/About.vue';
      
      Vue.use(Router);
      
      const router = new Router({
        routes: [
          {
            path: '/',
            name: 'home',
            component: Home
          },
          {
            path: '/about',
            name: 'about',
            component: About
          }
        ]
      });

      export default router;
    </code></pre>
    <p>ในตัวอย่างนี้:</p>
    <ul>
      <li><strong>path:</strong> คือเส้นทางที่ผู้ใช้จะไปเมื่อคลิกลิงก์หรือ URL (เช่น `/`, `/about`)</li>
      <li><strong>name:</strong> คือชื่อที่ใช้เรียกเส้นทางในโปรแกรม (เช่น `'home'`, `'about'`)</li>
      <li><strong>component:</strong> คือคอมโพเนนต์ที่จะแสดงเมื่อผู้ใช้เข้าถึงเส้นทางนั้น (เช่น `Home`, `About`)</li>
    </ul>

    <h2>การใช้ Router ในแอปพลิเคชัน</h2>
    <p>ในการใช้งาน router ในแอปของคุณ คุณต้องใช้ <strong>&lt;router-view&gt;</strong> ซึ่งเป็นตำแหน่งที่คอมโพเนนต์ต่างๆ จะถูกเรนเดอร์เมื่อมีการเปลี่ยนเส้นทาง</p>
    <pre><code>
      <template>
        <div>
          <h1>Welcome to Vue.js</h1>
          <router-link to="/">หน้าแรก</router-link> |
          <router-link to="/about">เกี่ยวกับเรา</router-link>
          <router-view></router-view>
        </div>
      </template>
    </code></pre>
    <p>ในตัวอย่างนี้:</p>
    <ul>
      <li><strong>&lt;router-link&gt;</strong> คือคอมโพเนนต์ที่ใช้ในการสร้างลิงก์สำหรับการนำทาง (คล้ายกับแท็ก <code>&lt;a&gt;</code> แต่ไม่รีเฟรชหน้าเว็บ)</li>
      <li><strong>&lt;router-view&gt;</strong> คือจุดที่คอมโพเนนต์จะถูกแสดงเมื่อเปลี่ยนเส้นทาง</li>
    </ul>

    <h2>การใช้ Dynamic Routing</h2>
    <p>การใช้ dynamic routes ช่วยให้คุณสามารถสร้างเส้นทางที่มีการเปลี่ยนแปลงได้ตามตัวแปร เช่น ID ของบล็อก หรือข้อมูลที่ส่งจาก URL</p>
    <pre><code>
      const router = new Router({
        routes: [
          {
            path: '/post/:id',
            name: 'post',
            component: Post
          }
        ]
      });
    </code></pre>
    <p>ในกรณีนี้:</p>
    <ul>
      <li><strong>:id</strong> คือ dynamic parameter ซึ่งสามารถแทนที่ค่าด้วยข้อมูลจาก URL เช่น `/post/123`</li>
      <li>คอมโพเนนต์ `Post` จะสามารถรับค่า `id` ผ่าน <strong>$route.params.id</strong></li>
    </ul>

    <h2>การใช้งาน Navigation Guards</h2>
    <p>Vue Router มีฟีเจอร์ที่เรียกว่า <strong>Navigation Guards</strong> ที่ช่วยให้คุณควบคุมการนำทางได้ เช่น การตรวจสอบสิทธิ์ก่อนการเปลี่ยนหน้า</p>
    <pre><code>
      const router = new Router({
        routes: [
          {
            path: '/login',
            name: 'login',
            component: Login
          },
          {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            beforeEnter: (to, from, next) => {
              if (!isLoggedIn()) {
                next('/login');
              } else {
                next();
              }
            }
          }
        ]
      });
    </code></pre>
    <p>ในตัวอย่างนี้:</p>
    <ul>
      <li><strong>beforeEnter</strong> คือ navigation guard ที่จะทำงานก่อนที่ผู้ใช้จะไปยังเส้นทางนั้น</li>
      <li>ในกรณีนี้ หากผู้ใช้ไม่ได้ล็อกอิน จะถูกส่งไปยังหน้า <code>/login</code></li>
    </ul>

    <h2>การตั้งค่าหลายๆ Route ด้วย Vue Router</h2>
    <p>การใช้ Vue Router ทำให้สามารถตั้งค่าเส้นทางหลายๆ เส้นทางได้ง่ายๆ โดยแยกแต่ละเส้นทางตามคอมโพเนนต์ต่างๆ</p>
    <pre><code>
      import Vue from 'vue';
      import Router from 'vue-router';
      import Home from './views/Home.vue';
      import About from './views/About.vue';
      import Contact from './views/Contact.vue';
      
      Vue.use(Router);
      
      const router = new Router({
        routes: [
          {
            path: '/',
            name: 'home',
            component: Home
          },
          {
            path: '/about',
            name: 'about',
            component: About
          },
          {
            path: '/contact',
            name: 'contact',
            component: Contact
          }
        ]
      });

      export default router;
    </code></pre>

    <h2>สรุป</h2>
    <p>การใช้ Vue Router ทำให้การพัฒนาเว็บแอปพลิเคชันแบบหลายหน้ากลายเป็นเรื่องง่ายและมีประสิทธิภาพ ด้วยฟีเจอร์ต่างๆ เช่น dynamic routes, navigation guards, และการใช้งานแบบ SPA (Single-Page Application)</p>

    <router-link to="/StateandVuex" class="button-left">ย้อนกลับ</router-link>
    <router-link to="/Apipage" class="button-right">ต่อไป</router-link>
  </div>
</template>

<script>
export default {
  name: "VueRouter",
};
</script>

<style>
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
