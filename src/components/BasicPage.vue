<template>
  <div>
    <h1>การใช้งานพื้นฐานใน Vue.js</h1>

    <!-- Tabs -->
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
      <h2>v-bind</h2>
      <p>ใช้สำหรับการผูกข้อมูลระหว่าง attribute ของ HTML กับค่าใน Vue instance</p>
      <pre><code>
        &lt;img v-bind:src="imageUrl" alt="Vue logo"&gt;
      </code></pre>
      <img :src="imageUrl" alt="Vue logo" style="width: 100px;">
    </div>

    <div v-if="activeTab === 'model'">
      <h2>v-model</h2>
      <p>ใช้สำหรับการผูกข้อมูลกับ input fields เช่น text box, radio buttons หรือ checkboxes</p>
      <pre><code>
        &lt;input v-model="message"&gt;
        &lt;p&gt;ข้อความที่พิมพ์: {{ message }}&lt;/p&gt;
      </code></pre>
      <input v-model="message" placeholder="พิมพ์ข้อความ">
      <p>ข้อความที่พิมพ์: {{ message }}</p>
    </div>

    <div v-if="activeTab === 'if'">
      <h2>v-if</h2>
      <p>ใช้สำหรับการแสดงหรือซ่อนองค์ประกอบตามเงื่อนไข</p>
      <pre><code>
        &lt;button v-if="isVisible"&gt;แสดง/ซ่อน&lt;/button&gt;
      </code></pre>
      <button v-if="isVisible">แสดง/ซ่อน</button>
      <button @click="isVisible = !isVisible">คลิกเพื่อซ่อน/แสดง</button>
    </div>

    <div v-if="activeTab === 'for'">
      <h2>v-for</h2>
      <p>ใช้สำหรับการวนลูปแสดงรายการจาก array หรือ object</p>
      <pre><code>
        &lt;ul&gt;
          &lt;li v-for="item in items" :key="item"&gt;{{ item }}&lt;/li&gt;
        &lt;/ul&gt;
      </code></pre>
      <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
      <p>รายการที่แสดง: {{ items }}</p>
    </div>

    <!-- Buttons Tab -->
    <div v-if="activeTab === 'button'">
      <h2>ปุ่ม (Buttons)</h2>
      <p>การใช้งานปุ่มใน Vue.js สามารถทำได้โดยการใช้ <code>&lt;button&gt;</code> และเชื่อมต่อกับฟังก์ชันหรือข้อมูลภายใน Vue instance</p>
      <pre><code>
        &lt;button @click="handleClick"&gt;คลิกที่นี่&lt;/button&gt;
      </code></pre>
      <button @click="handleClick">คลิกที่นี่</button>
      <p>ค่าหลังการคลิก: {{ clickMessage }}</p>
    </div>

    <!-- Radio Buttons Tab -->
    <div v-if="activeTab === 'radio'">
      <h2>Radio Buttons</h2>
      <p>การใช้งาน radio buttons ใน Vue.js ใช้ <code>v-model</code> เพื่อเชื่อมโยงค่าของ radio buttons กับข้อมูลใน Vue instance</p>
      <pre><code>
        &lt;input type="radio" v-model="selectedOption" value="A"&gt; ตัวเลือก A
        &lt;input type="radio" v-model="selectedOption" value="B"&gt; ตัวเลือก B
        &lt;p&gt;ตัวเลือกที่เลือก: {{ selectedOption }}&lt;/p&gt;
      </code></pre>
      <input type="radio" v-model="selectedOption" value="A"> ตัวเลือก A
      <input type="radio" v-model="selectedOption" value="B"> ตัวเลือก B
      <p>ตัวเลือกที่เลือก: {{ selectedOption }}</p>
    </div>

    <!-- Checkboxes Tab -->
    <div v-if="activeTab === 'checkbox'">
      <h2>Checkboxes</h2>
      <p>การใช้งาน checkboxes ใน Vue.js ใช้ <code>v-model</code> และเชื่อมโยงกับ array หรือ boolean ใน Vue instance</p>
      <pre><code>
        &lt;input type="checkbox" v-model="checkedItems" value="Apple"&gt; Apple
        &lt;input type="checkbox" v-model="checkedItems" value="Banana"&gt; Banana
        &lt;p&gt;รายการที่เลือก: {{ checkedItems.join(', ') }}&lt;/p&gt;
      </code></pre>
      <input type="checkbox" v-model="checkedItems" value="Apple"> Apple
      <input type="checkbox" v-model="checkedItems" value="Banana"> Banana
      <p>รายการที่เลือก: {{ checkedItems.join(', ') }}</p>
    </div>

    <!-- Select Dropdown Tab -->
    <div v-if="activeTab === 'select'">
      <h2>Select Dropdown</h2>
      <p>การใช้งาน select dropdown ใน Vue.js ใช้ <code>v-model</code> เพื่อเชื่อมโยงค่าที่เลือกกับข้อมูลใน Vue instance</p>
      <pre><code>
        &lt;select v-model="selectedFruit"&gt;
          &lt;option value="Apple"&gt;Apple&lt;/option&gt;
          &lt;option value="Banana"&gt;Banana&lt;/option&gt;
        &lt;/select&gt;
        &lt;p&gt;ผลไม้ที่เลือก: {{ selectedFruit }}&lt;/p&gt;
      </code></pre>
      <select v-model="selectedFruit">
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
      </select>
      <p>ผลไม้ที่เลือก: {{ selectedFruit }}</p>
    </div>

    <!-- Add navigation buttons -->
    <router-link to="/ProjectStructure" class="button-left">ย้อนกลับ</router-link>
    <router-link to="/CSSpage" class="button-right">ต่อไป</router-link>
  </div>
</template>

<script>
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
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}

code {
  font-size: 1.1em;
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
