module.exports = {
    env: {
      es2021: true,  // กำหนดให้ ESLint รองรับ ES2021 syntax
      node: true  // เพิ่มสภาพแวดล้อม Node.js
    },
    parserOptions: {
      requireConfigFile: false,  // ปิดการตรวจสอบ config ของ Babel
      sourceType: "module"  // ใช้ ES Module
    },
    extends: [
      "plugin:vue/vue3-essential",  // ตั้งค่าพื้นฐานสำหรับ Vue 3
      "eslint:recommended"  // ตั้งค่ามาตรฐานของ ESLint
    ],
    rules: {
      // ใส่กฎที่คุณต้องการ
    }
  };
  