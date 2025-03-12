<template>
  <div>
    <h1>การใช้งาน API ใน Vue.js</h1>

    <!-- ปุ่มสำหรับเปลี่ยนแท็บ -->
    <div class="tabs">
      <button @click="activeTab = 'get'" :class="{'active-tab': activeTab === 'get'}">GET</button>
      <button @click="activeTab = 'post'" :class="{'active-tab': activeTab === 'post'}">POST</button>
      <button @click="activeTab = 'put'" :class="{'active-tab': activeTab === 'put'}">PUT</button>
      <button @click="activeTab = 'delete'" :class="{'active-tab': activeTab === 'delete'}">DELETE</button>
    </div>

    <!-- แสดงผลตามแท็บที่เลือก -->
    <div v-if="activeTab === 'get'">
      <h2>GET Request</h2>
      <button @click="fetchData">ดึงข้อมูล</button>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>

      <div class="code-section">
        <!-- โค้ดฝั่ง Vue.js -->
        <div class="code-box">
          <h3>Vue.js (Client-side)</h3>
          <pre><code>
axios.get(this.apiUrl) // ส่งคำขอ GET ไปยังเซิร์ฟเวอร์เพื่อดึงข้อมูล
  .then(response => {  // เมื่อได้รับข้อมูลจากเซิร์ฟเวอร์
    this.items = response.data;  // กำหนดข้อมูลที่ได้รับให้กับ items
  })
  .catch(error => {  // หากเกิดข้อผิดพลาด
    console.error("เกิดข้อผิดพลาดในการดึงข้อมูล", error);  // แสดงข้อผิดพลาด
  });
          </code></pre>
        </div>

        <!-- โค้ดฝั่ง Server.js -->
        <div class="code-box">
          <h3>Server.js (Server-side)</h3>
          <pre><code>
app.get('/items', (req, res) => { // รับคำขอ GET จาก client
  res.json(items); // ส่งข้อมูลรายการ items กลับไปยัง client
});
          </code></pre>
        </div>
      </div>

      <p>คำอธิบาย:</p>
      <ul>
        <li><strong>ฝั่ง Client (Vue.js):</strong> ส่งคำขอ GET ไปยัง API ด้วย `axios.get(this.apiUrl)` เพื่อดึงข้อมูลจากเซิร์ฟเวอร์</li>
        <li><strong>ฝั่ง Server (Server.js):</strong> เซิร์ฟเวอร์รับคำขอที่ URL `/items` และตอบกลับข้อมูลในรูปแบบ JSON</li>
      </ul>
    </div>

    <div v-if="activeTab === 'post'">
      <h2>POST Request</h2>
      <input v-model="newItem" placeholder="เพิ่มข้อมูลใหม่" />
      <button @click="addItem">เพิ่มข้อมูล</button>

      <div class="code-section">
        <!-- โค้ดฝั่ง Vue.js -->
        <div class="code-box">
          <h3>Vue.js (Client-side)</h3>
          <pre><code>
axios.post(this.apiUrl, { name: this.newItem })  // ส่งข้อมูลใหม่ไปยังเซิร์ฟเวอร์
  .then(response => {  // เมื่อข้อมูลถูกเพิ่มสำเร็จ
    this.fetchData();  // เรียกข้อมูลใหม่เพื่ออัปเดตการแสดงผล
  })
  .catch(error => {  // หากเกิดข้อผิดพลาด
    console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล", error);  // แสดงข้อผิดพลาด
  });
          </code></pre>
        </div>

        <!-- โค้ดฝั่ง Server.js -->
        <div class="code-box">
          <h3>Server.js (Server-side)</h3>
          <pre><code>
app.post('/items', (req, res) => {  // รับคำขอ POST จาก client
  const newItem = req.body;  // รับข้อมูลใหม่จากคำขอ
  newItem.id = items.length + 1;  // กำหนด ID ใหม่
  items.push(newItem);  // เพิ่มข้อมูลใหม่ลงในรายการ
  res.status(201).json(newItem);  // ส่งข้อมูลที่ถูกเพิ่มกลับไปยัง client
});
          </code></pre>
        </div>
      </div>

      <p>คำอธิบาย:</p>
      <ul>
        <li><strong>ฝั่ง Client (Vue.js):</strong> ส่งข้อมูลใหม่ผ่านคำขอ POST ไปยัง API เพื่อเพิ่มข้อมูลใหม่</li>
        <li><strong>ฝั่ง Server (Server.js):</strong> รับข้อมูลจากคำขอ POST แล้วเพิ่มข้อมูลใหม่ไปยังรายการ `items`</li>
      </ul>
    </div>

    <div v-if="activeTab === 'put'">
      <h2>PUT Request</h2>
      <input v-model="updateId" placeholder="ID ที่ต้องการแก้ไข" />
      <input v-model="updateValue" placeholder="ค่าใหม่" />
      <button @click="updateItem">อัปเดตข้อมูล</button>

      <div class="code-section">
        <!-- โค้ดฝั่ง Vue.js -->
        <div class="code-box">
          <h3>Vue.js (Client-side)</h3>
          <pre><code>
axios.put(`${this.apiUrl}/${this.updateId}`, { name: this.updateValue })  // ส่งคำขอ PUT ไปยัง API
  .then(response => {  // เมื่อข้อมูลถูกอัปเดตสำเร็จ
    this.fetchData();  // เรียกข้อมูลใหม่เพื่ออัปเดตการแสดงผล
  })
  .catch(error => {  // หากเกิดข้อผิดพลาด
    console.error("เกิดข้อผิดพลาดในการอัปเดตข้อมูล", error);  // แสดงข้อผิดพลาด
  });
          </code></pre>
        </div>

        <!-- โค้ดฝั่ง Server.js -->
        <div class="code-box">
          <h3>Server.js (Server-side)</h3>
          <pre><code>
app.put('/items/:id', (req, res) => {  // รับคำขอ PUT พร้อม ID ที่ต้องการแก้ไข
  const id = parseInt(req.params.id);  // รับ ID จาก URL
  let item = items.find(item => item.id === id);  // ค้นหาข้อมูลที่มี ID ตรงกัน
  if (item) {  // หากพบข้อมูล
    item.name = req.body.name;  // อัปเดตข้อมูลในรายการ
    res.json(item);  // ส่งข้อมูลที่อัปเดตกลับไป
  } else {
    res.status(404).json({ message: 'ไม่พบข้อมูล' });  // หากไม่พบข้อมูล
  }
});
          </code></pre>
        </div>
      </div>

      <p>คำอธิบาย:</p>
      <ul>
        <li><strong>ฝั่ง Client (Vue.js):</strong> ส่งคำขอ PUT ไปยัง API โดยระบุ `id` และข้อมูลใหม่ที่ต้องการอัปเดต</li>
        <li><strong>ฝั่ง Server (Server.js):</strong> เซิร์ฟเวอร์ตรวจสอบ `id` และทำการอัปเดตข้อมูลในรายการ `items` หากพบข้อมูลที่ตรงกัน</li>
      </ul>
    </div>

    <div v-if="activeTab === 'delete'">
      <h2>DELETE Request</h2>
      <input v-model="deleteId" placeholder="ID ที่ต้องการลบ" />
      <button @click="deleteItem">ลบข้อมูล</button>

      <div class="code-section">
        <!-- โค้ดฝั่ง Vue.js -->
        <div class="code-box">
          <h3>Vue.js (Client-side)</h3>
          <pre><code>
axios.delete(`${this.apiUrl}/${this.deleteId}`)  // ส่งคำขอ DELETE ไปยัง API
  .then(response => {  // เมื่อข้อมูลถูกลบสำเร็จ
    this.fetchData();  // เรียกข้อมูลใหม่เพื่ออัปเดตการแสดงผล
  })
  .catch(error => {  // หากเกิดข้อผิดพลาด
    console.error("เกิดข้อผิดพลาดในการลบข้อมูล", error);  // แสดงข้อผิดพลาด
  });
          </code></pre>
        </div>

        <!-- โค้ดฝั่ง Server.js -->
        <div class="code-box">
          <h3>Server.js (Server-side)</h3>
          <pre><code>
app.delete('/items/:id', (req, res) => {  // รับคำขอ DELETE พร้อม ID ที่ต้องการลบ
  const id = parseInt(req.params.id);  // รับ ID จาก URL
  const index = items.findIndex(item => item.id === id);  // ค้นหาตำแหน่งของข้อมูลที่ตรงกับ ID
  if (index !== -1) {  // หากพบข้อมูล
    items.splice(index, 1);  // ลบข้อมูล
    res.status(204).send();  // ส่งการตอบกลับที่ไม่มีข้อมูล
  } else {
    res.status(404).json({ message: 'ไม่พบข้อมูล' });  // หากไม่พบข้อมูล
  }
});
          </code></pre>
        </div>
      </div>

      <p>คำอธิบาย:</p>
      <ul>
        <li><strong>ฝั่ง Client (Vue.js):</strong> ส่งคำขอ DELETE ไปยัง API เพื่อทำการลบข้อมูลที่ระบุด้วย `id`</li>
        <li><strong>ฝั่ง Server (Server.js):</strong> เซิร์ฟเวอร์ลบข้อมูลที่ตรงกับ `id` และส่งสถานะ 204 (No Content) กลับไป</li>
      </ul>
    </div>
    <router-link to="/Router" class="button-left">ย้อนกลับ</router-link>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      activeTab: 'get',
      items: [],
      newItem: '',
      updateId: '',
      updateValue: '',
      deleteId: '',
      apiUrl: "http://localhost:3000/items"
    };
  },
  methods: {
    fetchData() {
      axios.get(this.apiUrl)
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {
          console.error("เกิดข้อผิดพลาดในการดึงข้อมูล", error);
        });
    },
    addItem() {
  axios.post(this.apiUrl, { name: this.newItem })
    .then(response => {  // ใช้ response
      console.log("ข้อมูลที่เพิ่ม: ", response.data);  // ตัวอย่างการใช้ response
      this.fetchData();
    })
    .catch(error => {
      console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล", error);
    });
},

updateItem() {
  axios.put(`${this.apiUrl}/${this.updateId}`, { name: this.updateValue })
    .then(response => {  // ใช้ response
      console.log("ข้อมูลที่อัปเดต: ", response.data);  // ตัวอย่างการใช้ response
      this.fetchData();
    })
    .catch(error => {
      console.error("เกิดข้อผิดพลาดในการอัปเดตข้อมูล", error);
    });
},

deleteItem() {
  axios.delete(`${this.apiUrl}/${this.deleteId}`)
    .then(response => {  // ใช้ response
      console.log("ข้อมูลที่ลบ: ", response.data);  // ตัวอย่างการใช้ response
      this.fetchData();
    })
    .catch(error => {
      console.error("เกิดข้อผิดพลาดในการลบข้อมูล", error);
    });
}

  },
  mounted() {
    this.fetchData();
  }
};
</script>
