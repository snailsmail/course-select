<template>
  <div id="cross-course">跨专业</div>
</template>

<script>
export default {
  name: "CrossMajor",
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {},
  },
};
</script>

<style lang="scss" scoped>
</style>