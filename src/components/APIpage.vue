<template>
  <div class="container">
    <div class="row">
      <div class="col-8 mx-auto text-left">
        <h2>การใช้งาน API ใน Vue.js</h2>
        <div>
          <button @click="activeTab = 'get'" :class="{'active-tab': activeTab === 'get'}">GET</button>
          <button @click="activeTab = 'post'" :class="{'active-tab': activeTab === 'post'}">POST</button>
          <button @click="activeTab = 'put'" :class="{'active-tab': activeTab === 'put'}">PUT</button>
          <button @click="activeTab = 'delete'" :class="{'active-tab': activeTab === 'delete'}">DELETE</button>
        </div>

        <!-- get -->
         <div v-if="activeTab === 'get'">
          <h5>GET Request</h5>
          <button @click="fetchData">ดึงข้อมูล</button>
          <ul>
            <li v-for="item in item" :key="item.id">{{ item.name }}</li>
          </ul>
          
          <div>
            <!-- โค้ดฝั่ง Vue.js -->
            <h5>Vue.js (Client-side)</h5>
            <pre><code style="text-align: left;">
              axios.get(this.apiUrl) // ส่งคำขอ GET ไปยังเซิร์ฟเวอร์เพื่อดึงข้อมูล <br>
              .then(response => {  // เมื่อได้รับข้อมูลจากเซิร์ฟเวอร์ <br>
                this.items = response.data;  // กำหนดข้อมูลที่ได้รับให้กับ items <br>
              }) <br>
              .catch(error => {  // หากเกิดข้อผิดพลาด <br>
                console.error("เกิดข้อผิดพลาดในการดึงข้อมูล", error);  // แสดงข้อผิดพลาด <br>
              });
            </code></pre><br>
            <!-- โค้ดฝั่ง Server.js -->
            <h5>Server.js (Server-side)</h5>
            <pre><code style="text-align: left;">
              app.get('/items', (req, res) => { // รับคำขอ GET จาก client <br>
                res.json(items); // ส่งข้อมูลรายการ items กลับไปยัง client
              });
            </code></pre><br>
            <p>คำอธิบาย</p>
              <ul style="text-align: left;">
                <li><strong>ฝั่ง Client (Vue.js):</strong> ส่งคำขอ GET ไปยัง API ด้วย `axios.get(this.apiUrl)` เพื่อดึงข้อมูลจากเซิร์ฟเวอร์</li>
                <li><strong>ฝั่ง Server (Server.js):</strong> เซิร์ฟเวอร์รับคำขอที่ URL `/items` และตอบกลับข้อมูลในรูปแบบ JSON</li>
              </ul>
          </div>
         </div>
         <!-- post -->
         <div v-if="activeTab === 'post'">
          <h5>POST Request</h5>
          <input v-model="newItem" placeholder="เพิ่มข้อมูลใหม่"> 
          <button style="margin: 10px;" @click="addItem">เพิ่มข้อมูล</button>
          <div>
            <!-- โค้ดฝั่ง Vue.js -->
             <h5>Vue.js (Client-side)</h5>
             <pre><code style="text-align: left;">
              axios.post(this.apiUrl, { name: this.newItem })  // ส่งข้อมูลใหม่ไปยังเซิร์ฟเวอร์ <br>
              .then(response => {  // เมื่อข้อมูลถูกเพิ่มสำเร็จ <br>
                this.fetchData();  // เรียกข้อมูลใหม่เพื่ออัปเดตการแสดงผล <br>
              }) <br>
              .catch(error => {  // หากเกิดข้อผิดพลาด <br>
                console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล", error);  // แสดงข้อผิดพลาด <br>
              }); 
             </code></pre><br>
             <!-- โค้ดฝั่ง Server.js -->
              <h5>Server.js (Server-side)</h5>
              <pre><code style="text-align: left;">
                app.post('/items', (req, res) => {  // รับคำขอ POST จาก client <br>
                  const newItem = req.body;  // รับข้อมูลใหม่จากคำขอ <br>
                  newItem.id = items.length + 1;  // กำหนด ID ใหม่ <br>
                  items.push(newItem);  // เพิ่มข้อมูลใหม่ลงในรายการ <br>
                  res.status(201).json(newItem);  // ส่งข้อมูลที่ถูกเพิ่มกลับไปยัง client <br>
                });
              </code></pre><br>
              <ul style="text-align: left;">
                <li><strong>ฝั่ง Client (Vue.js):</strong> ส่งข้อมูลใหม่ผ่านคำขอ POST ไปยัง API เพื่อเพิ่มข้อมูลใหม่</li>
                <li><strong>ฝั่ง Server (Server.js):</strong> รับข้อมูลจากคำขอ POST แล้วเพิ่มข้อมูลใหม่ไปยังรายการ `items`</li>
              </ul>
          </div>
         </div>
         <!-- put -->
          <div v-if="activeTab === 'put'">
            <h5>PUT Request</h5>
            <input v-model="updateId" placeholder="ID ที่ต้องการแก้ไข"><br><br>
            <input v-model="updateValue" placeholder="ค่าใหม่"><br>
            <button @click="updateItem">อัปเดตข้อมูล</button>

            <!-- โค้ดฝั่ง Vue.js -->
             <h5>Vue.js (Client-side)</h5>
             <pre><code style="text-align: left;">
              axios.put(`${this.apiUrl}/${this.updateId}`, { name: this.updateValue }) <br>
              // ส่งคำขอ PUT ไปยัง API <br>
              .then(response => {  // เมื่อข้อมูลถูกอัปเดตสำเร็จ <br>
                this.fetchData();  // เรียกข้อมูลใหม่เพื่ออัปเดตการแสดงผล <br>
              }) <br>
              .catch(error => {  // หากเกิดข้อผิดพลาด <br>
                console.error("เกิดข้อผิดพลาดในการอัปเดตข้อมูล", error);  // แสดงข้อผิดพลาด <br>
              });
             </code></pre><br>
             <h5>Server.js (Server-side)</h5>
             <pre><code style="text-align: left;">
              app.put('/items/:id', (req, res) => {  // รับคำขอ PUT พร้อม ID ที่ต้องการแก้ไข <br>
                const id = parseInt(req.params.id);  // รับ ID จาก URL <br>
                let item = items.find(item => item.id === id);  // ค้นหาข้อมูลที่มี ID ตรงกัน <br>
                if (item) {  // หากพบข้อมูล <br>
                  item.name = req.body.name;  // อัปเดตข้อมูลในรายการ <br>
                  res.json(item);  // ส่งข้อมูลที่อัปเดตกลับไป <br>
                } else { <br>
                  res.status(404).json({ message: 'ไม่พบข้อมูล' });  // หากไม่พบข้อมูล <br>
                } <br>
              });
             </code></pre><br>
             <ul style="text-align: left;">
              <li><strong>ฝั่ง Client (Vue.js):</strong> ส่งคำขอ PUT ไปยัง API โดยระบุ `id` และข้อมูลใหม่ที่ต้องการอัปเดต</li>
              <li><strong>ฝั่ง Server (Server.js):</strong> เซิร์ฟเวอร์ตรวจสอบ `id` และทำการอัปเดตข้อมูลในรายการ `items` หากพบข้อมูลที่ตรงกัน</li>
             </ul>
          </div>

          <!-- delete -->
           <div v-if="activeTab === 'delete'">
            <h5>DELETE Request</h5>
            <input v-model="deleteId" placeholder="ID ที่ต้องการลบ">
            <button style="margin: 10px;" @click="deleteItem">ลบข้อมูล</button><br>
            
            <div>
              <!-- โค้ดฝั่ง Vue.js -->
               <h5>Vue.js (Client-side)</h5>
               <pre><code style="text-align: left;">
                axios.delete(`${this.apiUrl}/${this.deleteId}`)  // ส่งคำขอ DELETE ไปยัง API <br>
                .then(response => {  // เมื่อข้อมูลถูกลบสำเร็จ <br>
                  this.fetchData();  // เรียกข้อมูลใหม่เพื่ออัปเดตการแสดงผล <br>
                }) <br>
                .catch(error => {  // หากเกิดข้อผิดพลาด <br>
                  console.error("เกิดข้อผิดพลาดในการลบข้อมูล", error);  // แสดงข้อผิดพลาด <br>
                });
               </code></pre><br>
               <!-- โค้ดฝั่ง Server.js -->
                <h5>Server.js (Server-side)</h5>
                <pre><code style="text-align: left;">
                  app.delete('/items/:id', (req, res) => {  // รับคำขอ DELETE พร้อม ID ที่ต้องการลบ <br>
                    const id = parseInt(req.params.id);  // รับ ID จาก URL <br>
                    const index = items.findIndex(item => item.id === id);  // ค้นหาตำแหน่งของข้อมูลที่ตรงกับ ID <br>
                    if (index !== -1) {  // หากพบข้อมูล <br>
                      items.splice(index, 1);  // ลบข้อมูล <br>
                      res.status(204).send();  // ส่งการตอบกลับที่ไม่มีข้อมูล <br>
                    } else { <br>
                      res.status(404).json({ message: 'ไม่พบข้อมูล' });  // หากไม่พบข้อมูล <br>
                    } <br>
                  });
                </code></pre><br>
                <p>คำอธิบาย</p>
                <ul style="text-align: left;">
                  <li><strong>ฝั่ง Client (Vue.js):</strong> ส่งคำขอ DELETE ไปยัง API เพื่อทำการลบข้อมูลที่ระบุด้วย `id`</li>
                  <li><strong>ฝั่ง Server (Server.js):</strong> เซิร์ฟเวอร์ลบข้อมูลที่ตรงกับ `id` และส่งสถานะ 204 (No Content) กลับไป</li>
                </ul>
            </div>
           </div>
      </div>
      <div class="row mt-4">
        <div class="col-6 d-flex justify-content-start"><router-link to="/Router" class="btn btn-success">ย้อนกลับ</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import '@/assets/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
<style scoped>
pre {
  white-space: pre;
  max-width: 100%;
  width: auto;
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
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.1em;
}
</style>
