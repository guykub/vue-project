<template>
  <button @click="sendData">ส่งข้อมูล</button>
</template>

<script>
export default {
  name: 'ChildComponent',
  methods: {
    sendData() {
      this.$emit('sendData', 'ข้อมูลจากลูก');
    }
  }
};
</script>
