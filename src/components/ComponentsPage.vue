<template>
  <div>
    <h1>การสร้างคอมโพเนนต์ใน Vue.js</h1>
    <p>คอมโพเนนต์ใน Vue ช่วยให้โค้ดมีโครงสร้างที่เป็นระเบียบและนำกลับมาใช้ใหม่ได้</p>
    
    <h2>ตัวอย่างคอมโพเนนต์พื้นฐาน</h2>
    <p>คอมโพเนนต์ที่ใช้ข้อมูลจาก `data`:</p>
    <pre><code>export default {
  name: "MyComponent",
  data() {
    return {
      message: "Hello Vue!"
    };
  }
};</code></pre>
    <p>ผลลัพธ์: {{ message }}</p>

    <h2>การใช้งาน Props</h2>
    <p>การส่งข้อมูลจากคอมโพเนนต์หลักไปยังคอมโพเนนต์ย่อย:</p>
    <pre><code>export default {
  name: "Greeting",
  props: ['name'],
  template: '&lt;p&gt;Hello, {{ name }}!&lt;/p&gt;'
};</code></pre>
    <p>ในคอมโพเนนต์หลัก:</p>
    <pre><code>&lt;Greeting :name="'Vue User'" /&gt;</code></pre>

    <h2>การใช้ Methods</h2>
    <p>วิธีการกำหนดฟังก์ชันในคอมโพเนนต์:</p>
    <pre><code>export default {
  name: "Counter",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};</code></pre>
    <p>ปุ่มเพิ่มจำนวน: <button @click="increment">เพิ่ม</button></p>
    <p>จำนวน: {{ count }}</p>

    <h2>การใช้ Computed Properties</h2>
    <p>คอมโพเนนต์ที่ใช้การคำนวณค่าจากข้อมูล:</p>
    <pre><code>export default {
  name: "FullName",
  data() {
    return {
      firstName: "John",
      lastName: "Doe"
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
};</code></pre>
    <p>ชื่อเต็ม: {{ fullName }}</p>

    <h2>การใช้ Events</h2>
    <p>การส่งข้อมูลจากคอมโพเนนต์ย่อยกลับไปที่คอมโพเนนต์หลัก:</p>
    <pre><code>export default {
  name: "ChildComponent",
  methods: {
    sendData() {
      this.$emit('sendData', 'ข้อมูลจากลูก');
    }
  }
};</code></pre>
    <p>ในคอมโพเนนต์หลัก:</p>
    <pre><code>&lt;ChildComponent @sendData="receiveData" /&gt;</code></pre>
    <p>ข้อมูลจากลูก: {{ dataFromChild }}</p>

    <h2>ตัวอย่างการใช้งานทั้งหมด</h2>
    <p>ตัวอย่างการรวมคอมโพเนนต์ทั้งหมดในแอปพลิเคชัน:</p>
    <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;Greeting :name="'Vue User'" /&gt;
    &lt;Counter /&gt;
    &lt;FullName /&gt;
    &lt;ChildComponent @sendData="receiveData" /&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>

    <!-- ปุ่มย้อนกลับไปที่หน้า Basic และ Components -->
    <router-link to="/CSSpage" class="button-left">ย้อนกลับ</router-link>
    <router-link to="/StateandVuex" class="button-right">ต่อไป</router-link>
    <div>
    <Greeting />
    <Counter />
    <FullName />
    <ChildComponent />
  </div>
  </div>
</template>
  
<script>
// เพิ่มคอมโพเนนต์ที่ใช้ภายในนี้
import Greeting from './GreetingComponent.vue'
import Counter from './CounterComponent.vue'
import FullName from './FullName.vue'
import ChildComponent from './ChildComponent.vue'

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
