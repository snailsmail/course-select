<template>
  <div>
    <el-tabs v-model="activeTab" @tab-click="handleClick">
      <el-tab-pane
        v-for="(tab, index) in tabList"
        :key="index"
        :label="tab.label"
        :name="tab.name"
      >
        <MajorPlan
          v-if="tab.name == 'majorPlan' && majorPlans"
          :data="majorPlans"
          :options="options"
        ></MajorPlan>
        <AllLesson
          v-if="tab.name == 'publicCourse' && publicCourses"
          :data="publicCourses"
          type="public-course"
        ></AllLesson>
        <AllLesson
          v-if="tab.name == 'crossMajor' && crossCourses"
          :data="crossCourses"
          type="cross-major"
        ></AllLesson>
        <FailedCourse
          v-if="tab.name == 'failedCourse' && FailedCourses"
          :data="FailedCourses"
        ></FailedCourse>
        <AllLesson
          v-if="tab.name == 'allLesson' && showAllLessons"
          :data="allLessons"
          type="all-lesson"
        ></AllLesson>
        <SelectedLesson
          v-if="tab.name == 'selectedLesson' && selectedLessons"
          :data="selectedLessons"
        ></SelectedLesson>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { tabList, majorPlans, failedCourse, selectLessons } from "../data";
import MajorPlan from "@/components/MajorPlan.vue";
import AllLesson from "@/components/AllLesson.vue";
import FailedCourse from "@/components/FailedCourse.vue";
import SelectedLesson from "@/components/SelectedLesson.vue";
import { createDB } from "@/utils/database";
import { getAllLessonData } from "@/utils/index";

export default {
  name: "CourseSelect",
  data() {
    return {
      tabList: [],
      activeTab: "",
      majorPlans: [],
      publicCourses: [],
      crossCourses: [],
      FailedCourses: [],
      allLessons: [],
      selectedLessons: [],
      showAllLessons: false,
      options: {},
    };
  },
  components: {
    MajorPlan,
    AllLesson,
    FailedCourse,
    SelectedLesson,
  },
  created() {
    // TODO 需要显示的tab,根据批次来过滤
    this.tabList = tabList;
    // 过滤后的第一个优先显示
    this.activeTab = tabList[0].name;
    // 初始化本地存储对象
    createDB();

    // 1.获取全校选课数据以及渲染
    getAllLessonData()
      .then((res) => {
        this.allLessons = res;
        this.showAllLessons = true;
      })
      .catch(() => {
        this.allLessons = [];
        this.showAllLessons = true;
      });

    // 2.获取培养方案数据
    this.majorPlans = majorPlans;

    // 3.获取不及格数据
    this.FailedCourses = failedCourse;

    // 3.获取已选课程
    this.selectedLessons = selectLessons;
  },
  methods: {
    handleClick(tab) {
      // todo 切换tab需要更新选课状态
      tab.$children[0].initData();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>