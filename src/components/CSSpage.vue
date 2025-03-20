<template>
  <div class="container">
    <div class="row">
      <div class="col-8 mx-auto text-left">
        <h2>การใช้ CSS ใน Vue.js</h2>
        <p>ใน Vue.js คุณสามารถใช้ CSS ในหลายวิธี ทั้งแบบ **Scoped CSS**, **Global CSS**, **Inline Styles**, หรือการนำไฟล์ CSS ภายนอกเข้ามาใช้ โดยแต่ละแบบจะมีข้อดีและข้อเสียต่างกันไป ขึ้นอยู่กับการใช้งานและความต้องการของโปรเจกต์</p>
        <div>
          <button @click="tab = 0">Scoped CSS</button>
          <button @click="tab = 1">Global CSS</button>
          <button @click="tab = 2">Inline Styles</button>
          <button @click="tab = 3">External CSS</button>
          <button @click="tab = 4">สรุป</button>
        </div>
        <!-- Scoped CSS -->
         <div v-if="tab === 0">
          <h5>Scoped CSS</h5>
          <p>Scoped CSS คือการใช้สไตล์เฉพาะในแต่ละคอมโพเนนต์ โดยไม่กระทบกับคอมโพเนนต์อื่นๆ</p>
          <pre><code style="text-align: left;">
            &lt;style scoped&gt; <br>
            .example { <br>
              color : red; <br>
            }
          </code></pre><br>
          <p>ในตัวอย่างนี้ CSS จะถูกใช้เฉพาะในคอมโพเนนต์ที่มี `scoped` เท่านั้น และ</p>
          <p class="example">แสดงข้อความสีแดง</p>
         </div>

         <!-- Global CSS -->
          <div v-if="tab === 1">
            <h3>Global CSS</h3>
            <p>Global CSS คือการใช้สไตล์ที่ใช้ได้ทั่วทั้งแอปพลิเคชัน</p>
            <pre><code style="text-align: left;">
              &lt;style&gt; <br>
              .fontfamily { <br>
                font-family: "Sriracha", cursive; <br>
              } <br>
              &lt;/style&gt;
            </code></pre><br>
            <p>ในตัวอย่างนี้ ทุกหน้าในโปรเจคจะใช้ฟอนต์ `Arial` สำหรับ `body` ทุกคอมโพเนนต์</p>
            <p class="fontfamily">แสดงข้อความ Show message </p>
          </div>

          <!-- Inline Styles -->
           <div v-if="tab === 2">
            <h3>Inline Styles</h3>
            <p>Inline Styles คือการกำหนดสไตล์ภายใน HTML โดยตรง โดยไม่ต้องใช้ไฟล์ CSS</p>
            <pre style="width: auto;"><code>
              &lt;div :style="{'color': 'blue', 'font-size': '20px'}"&gt; ข้อความที่มีสีฟ้าและขนาด 20 px &lt;/div&gt;
            </code></pre><br>
            <p>ในตัวอย่างนี้การใช้ Inline Styles จะช่วยให้กำหนดสไตล์ได้ในทันทีภายในคอมโพเนนต์</p>
            <p style="color: blue;font-size: 20px;">ข้อความที่มีสีฟ้าและขนาด 20 px</p>
           </div>

           <!-- External CSS -->
            <div v-if="tab === 3">
              <h3>External CSS</h3>
              <p>External CSS คือการนำไฟล์ CSS จากภายนอกมาใช้ในโปรเจกต์ของคุณ</p>
              <pre><code style="text-align: left;">
                &lt;script&gt; <br>
                import './styles.css'; // นำเข้าไฟล์ CSS <br>
                &lt;/script&gt;
              </code></pre><br>
              <p>ในตัวอย่างนี้ คุณสามารถใช้ไฟล์ CSS ภายนอกได้โดยการ import เข้ามาในไฟล์ Vue.js ของคุณ</p>
              <p>ตัวอย่างไฟล์ `styles.css`</p>
              <pre><code style="text-align: left;">
                body { <br>
                  background-color: #f0f0f0;<br>
                } <br>
                h1 { <br>
                  color: #333; <br>
                } <br>
                button { <br>
                  padding : 10px <br>
                  background-color: skyblue; <br>
                  color: #fff; <br>
                  border: none; <br>
                  cursor: pointer; <br>
                } <br>
              </code></pre><br>
              <h1 class="h1">แสดงข้อความและตัวอย่าง</h1>
              <button class="button-btn">แสดงปุ่ม</button>
            </div>

            <!-- สรุป -->
             <div v-if="tab === 4">
              <h3>สรุป</h3>
              <p>การใช้ CSS ใน Vue.js มีหลายวิธีที่เหมาะสมกับประเภทต่าง ๆ ของโปรเจค</p>
              <ul style="text-align: left; text-indent: 2rem;">
                <li><strong>Scoped CSS : </strong>เหมาะสำหรับการจัดการสไตล์ในแต่ละคอมโพเนนต์ โดยไม่ให้กระทบกับคอมโพเนนต์อื่นๆ</li>
                <li><strong>Global CSS : </strong>ใช้สำหรับกำหนดสไตล์ที่ใช้ในทุกคอมโพเนนต์ทั่วทั้งแอป</li>
                <li><strong>Inline Styles : </strong>เหมาะสำหรับการใช้สไตล์ที่เฉพาะเจาะจงในจุดใดจุดหนึ่งในคอมโพเนนต์</li>
                <li><strong>External CSS : </strong>การใช้ไฟล์ CSS จากภายนอกเพื่อให้สไตล์สามารถนำไปใช้ในหลายๆ คอมโพเนนต์ได้ง่ายขึ้น</li>
              </ul>
             </div>
      </div>
      <div class="row mt-4">
        <div class="col-6 d-flex justify-content-start"><router-link to="/BasicPage" class="btn btn-success">ย้อนกลับ</router-link></div>
        <div class="col-6 d-flex justify-content-end"><router-link to="/ComponentsPage" class="btn btn-success">ต่อไป</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
.example{
  color: red;
}
h1 {
  color: #2c3e50;
}
h2 {
  color: #34495e;
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
  margin-bottom: 10px;
  text-align: center;
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

<style>
.fontfamily{
  font-family: "Sriracha", cursive;
}
</style>
