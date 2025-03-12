<template>
  <div>
    <h1>การอธิบาย State และ Vuex</h1>

    <h2>State คืออะไร?</h2>
    <p>ใน Vue.js, <strong>State</strong> คือข้อมูลที่ใช้ในการแสดงผลและควบคุมพฤติกรรมของคอมโพเนนต์ในแอปพลิเคชัน เช่น ข้อมูลผู้ใช้, รายการสินค้า, หรือสถานะของปุ่ม.</p>

    <h2>Vuex คืออะไร?</h2>
    <p><strong>Vuex</strong> เป็นไลบรารีสำหรับจัดการ State ใน Vue.js ซึ่งออกแบบมาเพื่อช่วยให้สามารถจัดการข้อมูลที่แชร์ระหว่างคอมโพเนนต์ได้อย่างมีประสิทธิภาพ โดย Vuex ประกอบด้วย:</p>
    <ul>
      <li><strong>State:</strong> เก็บข้อมูลของแอปพลิเคชัน.</li>
      <li><strong>Mutations:</strong> ใช้เพื่อเปลี่ยนแปลง State.</li>
      <li><strong>Actions:</strong> รองรับการทำงานแบบอะซิงโครนัส (เช่น ดึงข้อมูลจาก API).</li>
      <li><strong>Getters:</strong> ใช้ดึงหรือคำนวณค่าจาก State.</li>
    </ul>
    <router-link to="/ComponentsPage" class="button-left">ย้อนกลับ</router-link>
    <router-link to="/Router" class="button-right">ต่อไป</router-link>
    <h2>ตัวอย่างการใช้งาน State และ Vuex</h2>
    <p>ตัวอย่างนี้แสดงการจัดการ State ด้วย Vuex:</p>
    <pre><code>
      import { createStore } from 'vuex';

      const store = createStore({
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
          count: (state) => state.count
        }
      });

      export default store;
    </code></pre>

    <h2>ตัวอย่างการแสดงผลในคอมโพเนนต์</h2>
          <template>
            <div>
            <h1>การใช้งาน State และ Vuex</h1>
            <h2>จำนวน: {{ count }}</h2>
            <button @click="increment">เพิ่ม</button>
            <button @click="decrement">ลด</button>
            </div> 
          </template>
  </div>
</template>
<script>
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    export default {
      name: 'CounterComponent',
      setup() {
        const store = useStore();
        const count = computed(() => store.getters.count);

        const increment = () => store.dispatch('increment');
        const decrement = () => store.dispatch('decrement');

        return { count, increment, decrement };
      }
    };
    </script>
<style scoped>
div {
  text-align: center;
  margin-top: 20px;
}
button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
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
