<template>
  <div id="failed-courses">不及格课程</div>
</template>

<script>
export default {
  name: "FailedCourse",
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