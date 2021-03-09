<template>
  <div id="public">公共课程</div>
</template>

<script>
export default {
  name: "PublicCourse",
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