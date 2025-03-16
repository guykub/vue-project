<template>
  <div class="container">
    <div class="row">
      <div class="col-8 mx-auto text-left">
        <h2>Vue Router - การสร้างเว็บแบบหลายหน้า (Multi-Page)</h2>
        <h5>การแนะนำ Vue Router</h5>
        <p>Vue Router เป็น <strong>router library</strong> ที่ใช้ในการสร้างเว็บแอปพลิเคชันแบบหลายหน้า (Multi-Page) ใน Vue.js</p>
        <p>Vue Router ช่วยให้คุณสามารถสร้างแอปพลิเคชันที่มีการเปลี่ยนหน้า (navigate) โดยไม่ต้องรีเฟรชหน้าเว็บ (Single-Page Application - SPA)</p>
        <h5>การติดตั้ง Vue Router</h5>
        <p>ก่อนที่คุณจะใช้ Vue Router ในโปรเจกต์ของคุณ คุณต้องติดตั้ง Vue Router ก่อน ด้วยคำสั่ง</p>
        <pre><code>npm install vue-router</code></pre><br>
        <p>เมื่อคุณติดตั้งแล้ว คุณสามารถนำ Vue Router มาใช้ในโปรเจกต์ของคุณได้โดยการสร้างไฟล์ router และตั้งค่า routing ต่างๆ</p>
        <h5>การตั้งค่า Vue Router</h5>
        <p>หลังจากติดตั้ง Vue Router เสร็จแล้ว คุณต้องตั้งค่าการใช้งาน router ในแอปพลิเคชันของคุณ</p>
        <pre><code style="text-align: left;">
          import Vue from 'vue';<br>
          import Router from 'vue-router';<br>
          import Home from './views/Home.vue';<br>
          import About from './views/About.vue';<br>
          <br>
          Vue.use(Router);
          <br>
          const router = new Router({ <br>
            routes: [ <br>
            { <br>
              path: '/', <br>
              name: 'home', <br>
              component: Home <br>
            }, <br>
            { <br>
              path: '/about', <br>
              name: 'about', <br>
              component: About <br>
            } <br>
            ] <br>
          }); <br>
          <br>
          export default router; <br>
        </code></pre><br>
        <p>ในตัวอย่างนี้</p>
        <ul>
          <li><strong>path:</strong> คือเส้นทางที่ผู้ใช้จะไปเมื่อคลิกลิงก์หรือ URL (เช่น `/`, `/about`)</li>
          <li><strong>name:</strong> คือชื่อที่ใช้เรียกเส้นทางในโปรแกรม (เช่น `'home'`, `'about'`)</li>
          <li><strong>component:</strong> คือคอมโพเนนต์ที่จะแสดงเมื่อผู้ใช้เข้าถึงเส้นทางนั้น (เช่น `Home`, `About`)</li>
        </ul>
        <h5>การใช้ Router ในแอปพลิเคชัน</h5>
        <p>ในการใช้งาน router ในแอปของคุณ คุณต้องใช้ <strong style="color: orange;">&lt;router-view&gt;</strong> ซึ่งเป็นตำแหน่งที่คอมโพเนนต์ต่างๆ จะถูกเรนเดอร์เมื่อมีการเปลี่ยนเส้นทาง</p>
        <pre><code>
          <div>
            <h2>Welcome to Vue.js</h2>
            <router-link class="btn" to="/">หน้าแรก</router-link> |
            <router-link class="btn" to="/about">เกี่ยวกับเรา</router-link>
            <router-view></router-view>
          </div>
        </code></pre><br>
        <p>ในตัวอย่างนี้</p>
        <ul>
          <li><strong>&lt;router-link&gt;</strong> คือคอมโพเนนต์ที่ใช้ในการสร้างลิงก์สำหรับการนำทาง (คล้ายกับแท็ก <strong style="color: orange;">&lt;a&gt;</strong> แต่ไม่รีเฟรชหน้าเว็บ)</li>
          <li><strong>&lt;router-view&gt;</strong> คือจุดที่คอมโพเนนต์จะถูกแสดงเมื่อเปลี่ยนเส้นทาง</li>
        </ul>
        <h5>การใช้ Dynamic Routing</h5>
        <p>การใช้ dynamic routes ช่วยให้คุณสามารถสร้างเส้นทางที่มีการเปลี่ยนแปลงได้ตามตัวแปร เช่น ID ของบล็อก หรือข้อมูลที่ส่งจาก URL</p>
        <pre><code style="text-align: left;">
          const router = new Router({ <br>
            routes: [ <br>
              { <br>
                path: '/post/:id', <br>
                name: 'post', <br>
                component: Post <br>
              } <br>
            ] <br>
          });
        </code></pre><br>
        <p>ในกรณีนี้</p>
        <ul>
          <li><strong>:id</strong> คือ dynamic parameter ซึ่งสามารถแทนที่ค่าด้วยข้อมูลจาก URL เช่น `/post/123`</li>
          <li>คอมโพเนนต์ `Post` จะสามารถรับค่า `id` ผ่าน <strong>$route.params.id</strong></li>
        </ul>
        <h5>การใช้งาน Navigation Guards</h5>
        <pre><code style="text-align: left;">
          const router = new Router({ <br>
            routes: [ <br>
              { <br>
                path: '/login', <br>
                name: 'login', <br>
                component: Login <br>
              }, <br>
              { <br>
                path: '/dashboard', <br>
                name: 'dashboard', <br>
                component: Dashboard, <br>
                beforeEnter: (to, from, next) => { <br>
                  if (!isLoggedIn()) { <br>
                    next('login'); <br>
                  } else { <br>
                    next(); <br>
                  } <br>
                } <br>
              } <br>
            ] <br>
          });
        </code></pre><br>
        <p>ในตัวอย่างนี้</p>
        <ul>
          <li><strong>beforeEnter</strong> คือ navigation guard ที่จะทำงานก่อนที่ผู้ใช้จะไปยังเส้นทางนั้น</li>
          <li>ในกรณีนี้ หากผู้ใช้ไม่ได้ล็อกอิน จะถูกส่งไปยังหน้า <strong style="color: orange;">/login</strong></li>
        </ul>
        <h5>การตั้งค่าหลายๆ Route ด้วย Vue Router</h5>
        <p>การใช้ Vue Router ทำให้สามารถตั้งค่าเส้นทางหลายๆ เส้นทางได้ง่ายๆ โดยแยกแต่ละเส้นทางตามคอมโพเนนต์ต่างๆ</p>
        <pre><code style="text-align: left;">
          import Vue from 'vue'; <br>
          import Router from 'vue-router'; <br>
          import Home from './views/Home.vue'; <br>
          import About from './views/About.vue'; <br>
          import Contact from './views/Contact.vue'; <br>
          <br>
          Vue.use(Router); <br>
          <br>
          const router = new Router({ <br>
            routes: [ <br>
              { <br>
                path: '/', <br>
                name: 'home', <br>
                component: Home <br>
              }, <br>
              { <br>
                path: '/about', <br>
                name: 'about', <br>
                component: About <br>
              }, <br>
              { <br>
                path: '/contact', <br>
                name: 'contact', <br>
                component: Contact <br>
              } <br>
            ] <br>
          });
        </code></pre><br>
        <h5>สรุป</h5>
        <p>การใช้ Vue Router ทำให้การพัฒนาเว็บแอปพลิเคชันแบบหลายหน้ากลายเป็นเรื่องง่ายและมีประสิทธิภาพ ด้วยฟีเจอร์ต่างๆ เช่น dynamic routes, navigation guards, และการใช้งานแบบ SPA (Single-Page Application)</p>
      </div>
      <div class="row mt-4">
        <div class="col-6 d-flex justify-content-start"><router-link to="/StateandVuex" class="btn btn-success">ย้อนกลับ</router-link></div>
        <div class="col-6 d-flex justify-content-end"><router-link to="/Apipage" class="btn btn-success">ต่อไป</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
  white-space: pre;
  max-width: 100%;
  width: 80%;
  height: auto;
  margin: 0 auto;
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  overflow-y: auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
code {
  font-family: "Courier New",monospace;
  white-space: nowrap;
  word-break: break-word;
  display: block;
  margin-top: 10px;
  margin-left: 3rem;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.1em;
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
