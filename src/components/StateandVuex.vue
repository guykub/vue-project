<template>
  <div>
    <h1>การจัดการ State และ Vuex - การแชร์ข้อมูลระหว่าง Component</h1>

    <h2>การแนะนำ Vuex</h2>
    <p>Vuex เป็น <strong>State Management Pattern</strong> และ <strong>Library</strong> ที่ใช้ในการจัดการ state ของแอปพลิเคชัน Vue.js โดยเฉพาะสำหรับแอปที่มีหลายคอมโพเนนต์ที่ต้องการแชร์ข้อมูลกัน.</p>
    <p>ทำไมถึงต้องใช้ Vuex?</p>
    <ul>
      <li>การแชร์ข้อมูลระหว่างคอมโพเนนต์ได้อย่างง่ายดายและไม่ยุ่งยาก</li>
      <li>สามารถทำให้ข้อมูลในแอปพลิเคชันมีการควบคุมที่ดีขึ้นและตรวจสอบได้ง่าย</li>
      <li>รองรับการทำงานแบบอะซิงโครนัส และสามารถเชื่อมต่อกับ API ได้อย่างสะดวก</li>
    </ul>

    <h2>การติดตั้ง Vuex</h2>
    <p>ก่อนที่คุณจะใช้ Vuex ในโปรเจกต์ Vue.js, คุณต้องติดตั้ง Vuex ด้วยคำสั่ง NPM:</p>
    <pre><code>npm install vuex</code></pre>
    <p>การติดตั้ง Vuex จะเพิ่ม Vuex ให้เป็น dependency ของโปรเจกต์และคุณสามารถใช้มันได้ทั่วทั้งแอป</p>

    <h2>การสร้าง Store และการใช้งาน</h2>
    <p><strong>Store</strong> ใน Vuex คือที่เก็บ <strong>state</strong> ของแอปพลิเคชัน ซึ่งประกอบด้วย:</p>
    <ul>
      <li><strong>State:</strong> ข้อมูลที่เก็บใน store</li>
      <li><strong>Mutations:</strong> ฟังก์ชันที่ใช้สำหรับการเปลี่ยนแปลงข้อมูลใน state</li>
      <li><strong>Actions:</strong> ฟังก์ชันที่ใช้สำหรับการทำงานแบบอะซิงโครนัส (เช่น การดึงข้อมูลจาก API)</li>
      <li><strong>Getters:</strong> ใช้เพื่อคำนวณหรือดึงข้อมูลจาก state</li>
    </ul>
    
    <p>ตัวอย่างการสร้าง Store:</p>
    <pre><code>
      import Vue from 'vue';
      import Vuex from 'vuex';
      
      Vue.use(Vuex);
      
      export default new Vuex.Store({
        state: {
          count: 0
        },
        mutations: {
          increment(state) {
            state.count++;
          },
          decrement(state) {
            state.count--;
          }
        },
        actions: {
          increment({ commit }) {
            commit('increment');
          },
          decrement({ commit }) {
            commit('decrement');
          }
        },
        getters: {
          count: state => state.count
        }
      });
    </code></pre>

    <h2>การใช้งาน State, Mutations, Actions และ Getters</h2>
    <p>ในตัวอย่างนี้:</p>
    <ul>
      <li><strong>State:</strong> ข้อมูลที่เก็บใน store (`count`)</li>
      <li><strong>Mutations:</strong> การเปลี่ยนแปลงข้อมูลใน state ผ่าน `increment` และ `decrement`</li>
      <li><strong>Actions:</strong> ใช้ในการเรียก mutations (สามารถทำงานอะซิงโครนัสได้)</li>
      <li><strong>Getters:</strong> ใช้ดึงข้อมูลจาก state หรือคำนวณค่าจากข้อมูลใน state</li>
    </ul>

    <h2>การใช้งานในคอมโพเนนต์</h2>
    <p>ตัวอย่างการใช้งาน Vuex ในคอมโพเนนต์:</p>
    <pre><code>
      <template>
        <div>
          <p>จำนวน: {{ count }}</p>
          <button @click="increment">เพิ่ม</button>
          <button @click="decrement">ลด</button>
        </div>
      </template>
      
      <script>
      export default {
        computed: {
          count() {
            return this.$store.getters.count;
          }
        },
        methods: {
          increment() {
            this.$store.dispatch('increment');
          },
          decrement() {
            this.$store.dispatch('decrement');
          }
        }
      };
      </script>
    </code></pre>

    <h2>การแยก Store ด้วย Modules</h2>
    <p>หากโปรเจกต์ของคุณใหญ่ขึ้นและมีหลายๆ ส่วน คุณสามารถแยก Vuex store ออกเป็นหลายๆ โมดูล:</p>
    <pre><code>
      // store.js
      import Vue from 'vue';
      import Vuex from 'vuex';
      import counter from './modules/counter';
      
      Vue.use(Vuex);
      
      export default new Vuex.Store({
        modules: {
          counter
        }
      });
    </code></pre>

    <p>และในโมดูล counter:</p>
    <pre><code>
      // store/modules/counter.js
      export default {
        state: {
          count: 0
        },
        mutations: {
          increment(state) {
            state.count++;
          },
          decrement(state) {
            state.count--;
          }
        },
        actions: {
          increment({ commit }) {
            commit('increment');
          },
          decrement({ commit }) {
            commit('decrement');
          }
        },
        getters: {
          count: state => state.count
        }
      };
    </code></pre>

    <h2>สรุป</h2>
    <p>การใช้ Vuex ช่วยในการจัดการ state ของแอปพลิเคชันที่มีการแชร์ข้อมูลระหว่างหลายคอมโพเนนต์ โดย Vuex ประกอบด้วย:</p>
    <ul>
      <li><strong>State:</strong> ข้อมูลที่เก็บใน store</li>
      <li><strong>Mutations:</strong> การเปลี่ยนแปลง state</li>
      <li><strong>Actions:</strong> ฟังก์ชันที่ทำงานอะซิงโครนัส</li>
      <li><strong>Getters:</strong> การดึงข้อมูลหรือคำนวณค่าจาก state</li>
    </ul>
    <p>การใช้งาน Vuex ทำให้คุณสามารถควบคุมข้อมูลในแอปได้ง่ายขึ้นและสามารถตรวจสอบได้โดยใช้ <strong>Vue Devtools</strong></p>

    <router-link to="/Components" class="button-left">ย้อนกลับ</router-link>
    <router-link to="/Router" class="button-right">ไปที่การใช้งานพื้นฐาน</router-link>
  </div>
</template>

<script>
export default {
  name: "Vuex",
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
button {
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 16px;
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
