<template>
  <p>Hello, {{ name }}!</p>
</template>

<script>
export default {
  name: 'GreetingComponent',
  props: ['name']
};
</script>
