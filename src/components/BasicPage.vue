<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <h2>การใช้งานพื้นฐานใน Vue.js</h2>
        <div>
          <button @click="activeTab = 'bind'" :class="{'active-tab': activeTab === 'bind'}">v-bind</button>
          <button @click="activeTab = 'model'" :class="{'active-tab': activeTab === 'model'}">v-model</button>
          <button @click="activeTab = 'if'" :class="{'active-tab': activeTab === 'if'}">v-if</button>
          <button @click="activeTab = 'for'" :class="{'active-tab': activeTab === 'for'}">v-for</button>
          <button @click="activeTab = 'button'" :class="{'active-tab': activeTab === 'button'}">ปุ่ม</button>
          <button @click="activeTab = 'radio'" :class="{'active-tab': activeTab === 'radio'}">Radio Buttons</button>
          <button @click="activeTab = 'checkbox'" :class="{'active-tab': activeTab === 'checkbox'}">Checkboxes</button>
          <button @click="activeTab = 'select'" :class="{'active-tab': activeTab === 'select'}">Select Dropdown</button>
        </div>
        <!-- Content for each Tab -->
        <div v-if="activeTab === 'bind'">
          <h3>v-bind</h3>
          <p>ใช้สำหรับการผูกข้อมูลระหว่าง attribute ของ HTML กับค่าใน Vue instance</p>
          <pre><code>
            &lt;img v-bind:src="imageUrl" alt="Vue logo"&gt;
          </code></pre>
          <div><img :src="imageUrl" alt="Vue logo"></div>
        </div>

        <div v-if="activeTab === 'model'">
          <h3>v-model</h3>
          <p>ใช้สำหรับการผูกข้อมูลกับ input fields เช่น text box, radio buttons หรือ checkboxes</p>
          <pre><code>
            &lt;input v-model="message"&gt; <br>&lt;p&gt;ข้อความที่พิมพ์: {{ message }}&lt;/p&gt;
          </code></pre>
          <div>
            <input v-model="message" placeholder="พิมพ์ข้อความ">
            <p>ข้อความที่พิมพ์: {{ message }}</p>
          </div>
        </div>

        <div v-if="activeTab === 'if'">
          <h3>v-if</h3>
          <p>ใช้สำหรับการแสดงหรือซ่อนองค์ประกอบตามเงื่อนไข</p>
          <pre><code>
            &lt;button v-if="isVisible"&gt;แสดง/ซ่อน&lt;/button&gt;
          </code></pre>
          <div>
            <button v-if="isVisible">แสดง/ซ่อน</button>
            <button @click="isVisible = !isVisible">คลิกเพื่อซ่อน/แสดง</button>
          </div>
        </div>

        <div v-if="activeTab === 'for'">
          <h3>v-for</h3>
          <p>ใช้สำหรับการวนลูปแสดงรายการจาก array หรือ object</p>
          <pre><code>
            &lt;ul&gt;&lt;li v-for="item in items" :key="item"&gt;{{ item }}&lt;/li&gt;&lt;/ul&gt;
          </code></pre>
          <ul><li style="text-align: left;" v-for="item in items" :key="item">{{ item }}</li></ul>
          <p>รายการที่แสดง {{ items }}</p>
        </div>

        <div v-if="activeTab === 'button'">
          <h3>ปุ่ม (Buttons)</h3>
          <p>การใช้งานปุ่มใน Vue.js สามารถทำได้โดยการใช้ <strong style="color: orange;">&lt;button&gt;</strong> และเชื่อมต่อกับฟังก์ชันหรือข้อมูลภายใน Vue instance</p>
          <pre><code>
            &lt;button @click="handleClick"&gt;คลิกที่นี่&lt;/button&gt;
          </code></pre>
          <div>
            <button @click="handleClick">คลิกที่นี่</button>
            <p>ค่าหลังการคลิก: {{ clickMessage }}</p>
          </div>
        </div>
        
        <div v-if="activeTab === 'radio'">
          <h3>Radio Buttons</h3>
          <p>การใช้งาน radio buttons ใน Vue.js ใช้ <strong style="color: orange;">v-model</strong> เพื่อเชื่อมโยงค่าของ radio buttons กับข้อมูลใน Vue instance</p>
          <pre><code>
            &lt;input type="radio" v-model="selectedOption" value="A"&gt; ตัวเลือก A <br>
            &lt;input type="radio" v-model="selectedOption" value="B"&gt; ตัวเลือก B <br>
            &lt;p&gt;ตัวเลือกที่เลือก: {{ selectedOption }}&lt;/p&gt;</code></pre>
          <div>
            <input type="radio" v-model="selectedOption" value="A"> ตัวเลือก A <br>
            <input type="radio" v-model="selectedOption" value="B"> ตัวเลือก B
            <p>ตัวเลือกที่เลือก: {{ selectedOption }}</p>
          </div>
        </div>

        <div v-if="activeTab === 'checkbox'">
          <h3>Checkboxes</h3>
          <p>การใช้งาน checkboxes ใน Vue.js ใช้ <strong style="color: orange;">v-model</strong> และเชื่อมโยงกับ array หรือ boolean ใน Vue instance</p>
          <pre><code>
            &lt;input type="checkbox" v-model="checkedItems" value="Apple"&gt; Apple <br>
            &lt;input type="checkbox" v-model="checkedItems" value="Banana"&gt; Banana <br>
            &lt;p&gt;รายการที่เลือก: {{ checkedItems.join(', ') }}&lt;/p&gt;</code></pre>
          <div>
            <input type="checkbox" v-model="checkedItems" value="Apple"> Apple <br>
            <input type="checkbox" v-model="checkedItems" value="Banana"> Banana
            <p>รายการที่เลือก: {{ checkedItems.join(', ') }}</p>
          </div>
        </div>

        <div v-if="activeTab === 'select'">
          <h3>Select Dropdown</h3>
          <p>การใช้งาน select dropdown ใน Vue.js ใช้ <strong style="color: orange;">v-model</strong> เพื่อเชื่อมโยงค่าที่เลือกกับข้อมูลใน Vue instance</p>
          <pre><code>
            &lt;select v-model="selectedFruit"&gt; <br>
            &lt;option value="Apple"&gt;Apple&lt;/option&gt;<br>
            &lt;option value="Banana"&gt;Banana&lt;/option&gt;&lt;/select&gt;<br>
            &lt;p&gt;ผลไม้ที่เลือก: {{ selectedFruit }}&lt;/p&gt;
          </code></pre>
          <div>
            <select v-model="selectedFruit">
              <option value="Apple">Apple</option>
              <option value="Banana">Banana</option>
            </select>
            <p>ผลไม้ที่เลือก: {{ selectedFruit }}</p>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-6 d-flex justify-content-start"><router-link to="/ProjectStructure" class="btn btn-success">ย้อนกลับ</router-link></div>
        <div class="col-6 d-flex justify-content-end"><router-link to="/CSSpage" class="btn btn-success">ต่อไป</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default {
  data() {
    return {
      activeTab: 'bind', // Tab ที่เปิดแสดง
      imageUrl: 'https://vuejs.org/images/logo.png', // ตัวแปรสำหรับ v-bind
      message: '', // ตัวแปรสำหรับ v-model
      isVisible: true, // ตัวแปรสำหรับ v-if
      items: ['Apple', 'Banana', 'Orange'], // ตัวแปรสำหรับ v-for
      clickMessage: '', // ตัวแปรสำหรับปุ่ม
      selectedOption: '', // ตัวแปรสำหรับ radio buttons
      checkedItems: [], // ตัวแปรสำหรับ checkboxes
      selectedFruit: '' // ตัวแปรสำหรับ select dropdown
    };
  },
  methods: {
    handleClick() {
      this.clickMessage = 'คุณได้คลิกปุ่มแล้ว!';
    }
  }
};
</script>

<style>
button {
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
}

button.active-tab {
  background-color: #42b983;
  color: white;
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
