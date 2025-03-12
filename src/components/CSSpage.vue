import '@/assets/styles.css'; 
<template>
  <div>
    <h1>การใช้ CSS ใน Vue.js</h1>

    <p>
      ใน Vue.js คุณสามารถใช้ CSS ในหลายวิธี ทั้งแบบ **Scoped CSS**, **Global CSS**, **Inline Styles**, หรือการนำไฟล์ CSS ภายนอกเข้ามาใช้ โดยแต่ละแบบจะมีข้อดีและข้อเสียต่างกันไป ขึ้นอยู่กับการใช้งานและความต้องการของโปรเจกต์
    </p>

    <!-- สร้างแท็บเพื่อแสดงแต่ละวิธีการใช้ CSS -->
    <div v-if="tab === 0">
      <h2>Scoped CSS</h2>
      <p>Scoped CSS คือการใช้สไตล์เฉพาะในแต่ละคอมโพเนนต์ โดยไม่กระทบกับคอมโพเนนต์อื่น ๆ</p>
      <pre><code>
&lt;style scoped&gt;
  .example {
    color: red;
  }
&lt;/style&gt;
      </code></pre>
      <p>ในตัวอย่างนี้ CSS จะถูกใช้เฉพาะในคอมโพเนนต์ที่มี `scoped` เท่านั้น</p>
    </div>

    <div v-if="tab === 1">
      <h2>Global CSS</h2>
      <p>Global CSS คือการใช้สไตล์ที่ใช้ได้ทั่วทั้งแอปพลิเคชัน</p>
      <pre><code>
&lt;style&gt;
  body {
    font-family: Arial, sans-serif;
  }
&lt;/style&gt;
      </code></pre>
      <p>ในตัวอย่างนี้ ทุกหน้าในโปรเจกต์จะใช้ฟอนต์ `Arial` สำหรับ `body` ทุกคอมโพเนนต์</p>
    </div>

    <div v-if="tab === 2">
      <h2>Inline Styles</h2>
      <p>Inline Styles คือการกำหนดสไตล์ภายใน HTML โดยตรง โดยไม่ต้องใช้ไฟล์ CSS</p>
      <pre><code>
&lt;div :style="{'color': 'blue', 'font-size': '20px'}"&gt;
  ข้อความที่มีสีฟ้าและขนาด 20px
&lt;/div&gt;
      </code></pre>
      <p>ในตัวอย่างนี้การใช้ Inline Styles จะช่วยให้กำหนดสไตล์ได้ในทันทีภายในคอมโพเนนต์</p>
    </div>

    <div v-if="tab === 3">
      <h2>External CSS</h2>
      <p>External CSS คือการนำไฟล์ CSS จากภายนอกมาใช้ในโปรเจกต์ของคุณ</p>
      <pre><code>
&lt;script&gt;
  import './styles.css'; // นำเข้าไฟล์ CSS
&lt;/script&gt;
      </code></pre>
      <p>ในตัวอย่างนี้ คุณสามารถใช้ไฟล์ CSS ภายนอกได้โดยการ import เข้ามาในไฟล์ Vue.js ของคุณ</p>
      <p>ตัวอย่างไฟล์ `styles.css`:</p>
      <pre><code>
body {
  background-color: #f0f0f0;
}

h1 {
  color: #333;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

      </code></pre>
    </div>

    <div v-if="tab === 4">
      <h2>สรุป</h2>
      <p>
        การใช้ CSS ใน Vue.js มีหลายวิธีที่เหมาะสมกับประเภทต่าง ๆ ของโปรเจกต์:
      </p>
      <ul>
        <li><strong>Scoped CSS</strong>: เหมาะสำหรับการจัดการสไตล์ในแต่ละคอมโพเนนต์ โดยไม่ให้กระทบกับคอมโพเนนต์อื่น ๆ</li>
        <li><strong>Global CSS</strong>: ใช้สำหรับกำหนดสไตล์ที่ใช้ในทุกคอมโพเนนต์ทั่วทั้งแอป</li>
        <li><strong>Inline Styles</strong>: เหมาะสำหรับการใช้สไตล์ที่เฉพาะเจาะจงในจุดใดจุดหนึ่งในคอมโพเนนต์</li>
        <li><strong>External CSS</strong>: การใช้ไฟล์ CSS จากภายนอกเพื่อให้สไตล์สามารถนำไปใช้ในหลายๆ คอมโพเนนต์ได้ง่ายขึ้น</li>
      </ul>
    </div>

    <!-- ส่วนของการเลือกแท็บ -->
    <button @click="tab = 0">Scoped CSS</button>
    <button @click="tab = 1">Global CSS</button>
    <button @click="tab = 2">Inline Styles</button>
    <button @click="tab = 3">External CSS</button>
    <button @click="tab = 4">สรุป</button>

    <!-- ปุ่มย้อนกลับไปที่หน้า Basic และ Components -->
    <router-link to="/BasicPage" class="button-left">ย้อนกลับ</router-link>
    <router-link to="/ComponentsPage" class="button-right">ต่อไป</router-link>
  </div>
</template>

<script>
export default {
  name: "CSSExplanation",
  data() {
    return {
      tab: 4, // เริ่มต้นแสดง Scoped CSS
    };
  },
}

</script>

<style scoped>
h1 {
  color: #2c3e50;
}
h2 {
  color: #34495e;
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
button {
  margin: 5px;
  padding: 10px;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
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
