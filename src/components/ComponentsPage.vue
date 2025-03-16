<template>
  <div class="container">
    <div class="row">
      <div class="col-8 mx-auto text-left">
        <h2>การสร้างคอมโพเนนต์ใน Vue.js</h2>
        <p>คอมโพเนนต์ใน Vue ช่วยให้โค้ดมีโครงสร้างที่เป็นระเบียบและนำกลับมาใช้ใหม่ได้</p>
        <h5>ตัวอย่างคอมโพเนนต์พื้นฐาน</h5>
        <p>คอมโพเนนต์ที่ใช้ข้อมูลจาก `data`</p>
        <pre><code style="text-align: left;">
          export default { <br>
            data() { <br> 
              return { <br>
                message: "Hello Vue!" <br>
              }; <br>
            } <br>
          };
        </code></pre><br>
        <p>ผลลัพธ์: {{ message }}</p>

        <!-- Props -->
         <h5>การใช้งาน Props</h5>
         <p>การส่งข้อมูลจากคอมโพเนนต์หลักไปยังคอมโพเนนต์ย่อย</p>
         <pre><code style="text-align: left;" v-pre>
          export default { <br> 
            name: "Greeting", <br>
            props: ['name'], <br>
            template: '&lt;p&gt;Hello, {{ name }}!&lt;/p&gt;' <br>
          };
         </code></pre><br>
         <p>ในคอมโพเนนต์หลัก</p> <br>
         <pre><code>&lt;Greeting :name="'Vue User'" /&gt;</code></pre><br>

         <!-- Methods -->
          <h5>การใช้ Methods</h5>
          <p>วิธีการกำหนดฟังก์ชันในคอมโพเนนต์</p>
          <pre><code style="text-align: left;">
            export default { <br>
              name: "Counter", <br>
              data() { <br>
                return { <br>
                  count: 0 <br>
                }; <br>
              }, <br>
              methods: { <br>
                increment() { <br>
                  this.count++; <br>
                } <br>
              } <br>
            }; 
          </code></pre><br>
          <p>ปุ่มเพิ่มจำนวน: <button @click="increment">เพิ่ม</button></p>
          <p>จำนวน: {{ count }}</p>

          <!-- Computed Properties -->
           <h5>การใช้ Computed Properties</h5>
           <p>คอมโพเนนต์ที่ใช้การคำนวณค่าจากข้อมูล</p>
           <pre><code style="text-align: left;">
            export default { <br>
              name: "FullName", <br>
              data() { <br>
                return { <br>  
                  firstName: "John", <br>
                  lastName: "Doe" <br>
                }; <br>
              }, <br>
              computed: { <br>
                fullName() { <br>
                  return `${this.firstName} ${this.lastName}`; <br>
                } <br>
              } <br>
            };
           </code></pre><br>
           <p>ชื่อเต็ม : {{ fullName }}</p>

           <!-- Events -->
           <h5>การใช้ Events</h5>
           <p>การส่งข้อมูลจากคอมโพเนนต์ย่อยกลับไปที่คอมโพเนนต์หลัก</p>
           <pre><code style="text-align: left;">
            export default { <br>
              name: "ChildComponent", <br>
              methods: { <br>
                sedData() { <br>
                  this.$emit('sendData', 'ข้อมูลจากลูก') <br>
                } <br> 
              } <br>
            };
           </code></pre><br>
           <p>ในคอมโพเนนต์หลัก</p>
           <pre><code>&lt;ChildComponent @sendData="receiveData" /&gt;</code></pre><br>
           <p>ข้อมูลจากลูก: {{ dataFromChild }}</p>
           
           <!-- ตัวอย่างการใช้งานทั้งหมด -->
            <p>ตัวอย่างการรวมคอมโพเนนต์ทั้งหมดในแอปพลิเคชัน</p>
            <pre><code style="text-align: left;">
              &lt;template&gt;<br>
              &lt;div&gt;<br>
              &lt;Greeting :name="'Vue User'"/&gt;<br>
              &lt;Counter /&gt;<br>
              &lt;FullName /&gt;<br>
              &lt;ChildComponent @sendData="receiveData"/&gt;<br>
              &lt;/div&gt;<br>
              &lt;/template&gt;
            </code></pre>

            <!-- ปุ่มย้อนกลับไปที่หน้า Basic และ Components -->
             <div style="justify-items: start;">
              <Greeting/>
              <Counter/>
              <FullName/>
              <ChildComponent/>
             </div>
      </div>
      <div class="row mt-4">
        <div class="col-6 d-flex justify-content-start"><router-link to="/CSSpage" class="btn btn-success">ย้อนกลับ</router-link></div>
        <div class="col-6 d-flex justify-content-end"><router-link to="/StateandVuex" class="btn btn-success">ต่อไป</router-link></div>
      </div>
    </div>
  </div>
</template>
  
<script>
// เพิ่มคอมโพเนนต์ที่ใช้ภายในนี้
import Greeting from './GreetingComponent.vue'
import Counter from './CounterComponent.vue'
import FullName from './FullName.vue'
import ChildComponent from './ChildComponent.vue'
import '@/assets/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default {
  name: "ComponentsPage",
  components: {
    Greeting,
    Counter,
    FullName,
    ChildComponent
  },
  data() {
    return {
      message: "Hello Vue!",
      dataFromChild: ''
    };
  },
  methods: {
    receiveData(data) {
      this.dataFromChild = data;
    }
  }
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
button {
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 16px;
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
