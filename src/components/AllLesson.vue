<template>
  <div id="suitable-lessons">全部课程</div>
</template>

<script>
export default {
  name: "AllLesson",
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