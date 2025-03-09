<template>
  <div>
    <h1>การเชื่อมต่อ API - Fetch ข้อมูลจาก API ภายนอก</h1>

    <h2>แนะนำเกี่ยวกับการ Fetch ข้อมูลจาก API</h2>
    <p>การดึงข้อมูลจาก API ภายนอกใน Vue.js สามารถทำได้หลายวิธี แต่วิธีที่นิยมที่สุดคือการใช้ <strong>fetch API</strong> หรือ <strong>Axios</strong> ซึ่งเป็นไลบรารีที่ช่วยให้การดึงข้อมูลจากเซิร์ฟเวอร์ภายนอกทำได้ง่ายและสะดวกมากขึ้น</p>
    <p>ในตัวอย่างนี้เราจะใช้ <strong>fetch API</strong> ซึ่งเป็นวิธีพื้นฐานที่ใช้ในการดึงข้อมูลจาก API ภายนอก</p>

    <h2>การใช้ Fetch API</h2>
    <p>ตัวอย่างการใช้ Fetch API เพื่อดึงข้อมูลจาก API ภายนอก:</p>
    <pre><code>
      export default {
        name: "FetchExample",
        data() {
          return {
            posts: [], // เก็บข้อมูลที่ได้จาก API
            isLoading: false, // สถานะการโหลดข้อมูล
            error: null // เก็บข้อผิดพลาดที่เกิดขึ้น
          };
        },
        mounted() {
          this.fetchData();
        },
        methods: {
          async fetchData() {
            this.isLoading = true;
            try {
              const response = await fetch('https://jsonplaceholder.typicode.com/posts');
              if (!response.ok) {
                throw new Error('ไม่สามารถดึงข้อมูลได้');
              }
              const data = await response.json();
              this.posts = data;
            } catch (error) {
              this.error = error.message;
            } finally {
              this.isLoading = false;
            }
          }
        }
      };
    </code></pre>

    <h3>การอธิบายโค้ด:</h3>
    <ul>
      <li><strong>data:</strong> สร้างตัวแปร `posts`, `isLoading`, และ `error` เพื่อเก็บข้อมูล, สถานะการโหลด, และข้อผิดพลาดที่อาจเกิดขึ้นตามลำดับ</li>
      <li><strong>mounted:</strong> เมื่อคอมโพเนนต์ถูกโหลดเสร็จสิ้น จะเรียกใช้งานฟังก์ชัน `fetchData()` เพื่อดึงข้อมูลจาก API</li>
      <li><strong>fetchData:</strong> ฟังก์ชันนี้จะทำงานโดยการใช้ `fetch()` ซึ่งเป็นฟังก์ชันของ JavaScript ที่ใช้ในการดึงข้อมูลจาก URL ที่กำหนด
        <ul>
          <li><strong>await fetch('https://jsonplaceholder.typicode.com/posts'):</strong> ดึงข้อมูลจาก URL และรอให้ข้อมูลโหลดมาเสร็จ</li>
          <li><strong>if (!response.ok):</strong> ตรวจสอบว่าการเชื่อมต่อสำเร็จหรือไม่ หากไม่สำเร็จจะแสดงข้อความข้อผิดพลาด</li>
          <li><strong>const data = await response.json():</strong> เปลี่ยนข้อมูลที่ได้รับมาเป็นรูปแบบ JSON</li>
        </ul>
      </li>
      <li><strong>try-catch-finally:</strong> ใช้สำหรับจัดการข้อผิดพลาดที่เกิดขึ้นระหว่างการดึงข้อมูลจาก API โดยจะทำให้โปรแกรมไม่หยุดทำงานหากเกิดข้อผิดพลาด</li>
    </ul>

    <h2>การแสดงผลข้อมูล</h2>
    <p>หลังจากที่ดึงข้อมูลจาก API มาแล้ว เราสามารถแสดงผลข้อมูลที่ได้ใน UI ของเรา:</p>
    <pre><code>
      <template>
        <div>
          <h2 v-if="isLoading">กำลังโหลดข้อมูล...</h2>
          <h2 v-else-if="error">เกิดข้อผิดพลาด: {{ error }}</h2>
          <ul v-else>
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
          </ul>
        </div>
      </template>
    </code></pre>

    <h3>การอธิบายโค้ดเพิ่มเติม:</h3>
    <ul>
      <li><strong>v-if="isLoading":</strong> เมื่อ `isLoading` เป็น <code>true</code> จะมีข้อความว่า "กำลังโหลดข้อมูล..." ปรากฏขึ้น</li>
      <li><strong>v-else-if="error":</strong> หากเกิดข้อผิดพลาดใดๆ ข้อความแสดงข้อผิดพลาดจะปรากฏ</li>
      <li><strong>v-else:</strong> ถ้าไม่อยู่ในสถานะการโหลดหรือเกิดข้อผิดพลาด ข้อมูลที่ดึงมาจาก API จะถูกแสดงในลิสต์โดยใช้ <code>v-for</code> เพื่อวนลูปแสดงผล</li>
    </ul>

    <h2>การทำงานร่วมกับ Axios (ถ้าใช้ Axios)</h2>
    <p>ในกรณีที่ต้องการใช้งาน <strong>Axios</strong> ซึ่งเป็นไลบรารีที่ช่วยให้การทำงานกับ API ง่ายขึ้น:</p>
    <pre><code>
      import axios from 'axios';

      export default {
        name: "AxiosExample",
        data() {
          return {
            posts: [],
            isLoading: false,
            error: null
          };
        },
        mounted() {
          this.fetchData();
        },
        methods: {
          async fetchData() {
            this.isLoading = true;
            try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
              this.posts = response.data;
            } catch (error) {
              this.error = error.message;
            } finally {
              this.isLoading = false;
            }
          }
        }
      };
    </code></pre>

    <h3>การอธิบายการใช้ Axios:</h3>
    <ul>
      <li><strong>axios.get():</strong> ใช้ Axios ในการดึงข้อมูลจาก API โดยการใช้ method `get()` เพื่อดึงข้อมูลจาก URL ที่กำหนด</li>
      <li>Axios จะช่วยให้การจัดการ response และข้อผิดพลาดง่ายขึ้นเมื่อเทียบกับ `fetch()` และสามารถทำงานร่วมกับ Promise ได้ง่ายๆ</li>
    </ul>

    <h2>สรุป</h2>
    <p>การเชื่อมต่อ API ใน Vue.js โดยใช้ <strong>fetch API</strong> หรือ <strong>Axios</strong> ช่วยให้คุณสามารถดึงข้อมูลจากเซิร์ฟเวอร์ภายนอกได้ง่ายๆ และสามารถแสดงข้อมูลในแอปพลิเคชันของคุณได้อย่างราบรื่น</p>

    <router-link to="/Router" class="button-left">ย้อนกลับ</router-link>
    <router-link to="/Deploy" class="button-right">ไปต่อ</router-link>
  </div>
</template>

<script>
export default {
  name: "FetchAPIExample",
  data() {
    return {
      posts: [],
      isLoading: false,
      error: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("ไม่สามารถดึงข้อมูลได้");
        }
        const data = await response.json();
        this.posts = data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },
  },
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 5px;
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
