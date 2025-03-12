<template>
  <p>ชื่อเต็ม: {{ fullName }}</p>
</template>

<script>
export default {
  name: 'FullName',
  data() {
    return {
      firstName: "Rose",
      lastName: "Jack"
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
};
</script>
