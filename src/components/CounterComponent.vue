<template>
  <div>
    <button @click="increment">เพิ่ม</button>
    <p>จำนวน: {{ count }}</p>
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',
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
};
</script>
