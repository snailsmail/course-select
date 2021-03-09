<template>
  <div id="selected-lesson">
    <div class="selected-credits">
      {{ $t("selected.credits") }}：{{ credits }}
    </div>
    <div class="selected-table-wrap">
      <template v-if="isShowVW">
        <table>
          <thead>
            <tr>
              <th width="20%">{{ $t("table.courseInfo") }}</th>
              <th width="14%">{{ $t("table.lessonInfo") }}</th>
              <th width="12%">{{ $t("table.teacher") }}</th>
              <th width="28%">{{ $t("table.timeAndPlace") }}</th>
              <th width="9%">{{ $t("table.virtualWallet") }}</th>
              <th width="9%">{{ $t("table.selectionStatus") }}</th>
              <th width="8%">{{ $t("table.operation") }}</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </template>
      <template v-if="!isShowVW">
        <table>
          <thead>
            <tr>
              <th width="22%">{{ $t("table.courseInfo") }}</th>
              <th width="15%">{{ $t("table.lessonInfo") }}</th>
              <th width="15%">{{ $t("table.teacher") }}</th>
              <th width="30%">{{ $t("table.timeAndPlace") }}</th>
              <th width="10%">{{ $t("table.selectionStatus") }}</th>
              <th width="8%">{{ $t("table.operation") }}</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </template>
    </div>
  </div>
</template>

<script>
import { getDataName } from "../utils/index";
import { selectLessons } from "../data";
import _each from "lodash/each";

export default {
  name: "SelectedLesson",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showTable: false,
      credits: 0,
      isShowVW: false,
      lessons: [],
    };
  },
  async created() {
    this.initData();
    // this.options.turnMode.enableVirtualWallet = true;
    this.isShowVW = true;
  },
  methods: {
    initData() {
      getDataName();

      this.lessons = selectLessons.data;
      this.credits = this.calcRredits(selectLessons.data);
    },
    calcRredits(lessons) {
      var totalCredits = 0;
      _each(lessons, function (lesson) {
        if (lesson.course && lesson.course.credits) {
          totalCredits += lesson.course.credits;
        }
      });
      return totalCredits;
    },
  },
};
</script>

<style lang="scss" scoped>
#selected-lesson {
  .selected-credits {
    font-size: 20px;
    color: #06568b;
  }
}
</style>