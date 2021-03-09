<template>
  <div id="programs">
    <div class="programs-head">
      <div class="programs-title">
        <el-row v-if="programName">
          <el-col :span="24">
            <span>{{ programName }}</span>
          </el-col>
        </el-row>
      </div>
      <div class="programs-search search-form">
        <el-row>
          <el-col :span="3" class="search-item">
            <div class="sub-title">{{ $t("search.course") }}</div>
            <el-input
              :placeholder="$t('search.coursePlaceholder')"
              v-model="courseNameOrCode"
              size="mini"
              clearable
            >
            </el-input>
          </el-col>
          <el-col :span="3" class="search-item">
            <div class="sub-title">{{ $t("search.openSemester") }}</div>
            <el-select v-model="openSemester" clearable size="mini">
              <el-option
                v-for="item in openSemesterOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3" class="search-item">
            <div class="sub-title">{{ $t("search.suggestSemester") }}</div>
            <el-select v-model="suggestSemester" clearable size="mini">
              <el-option
                v-for="item in suggestSemesterOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3" class="search-item">
            <div class="sub-title">{{ $t("search.compulsory") }}</div>
            <el-select v-model="compulsory" clearable size="mini">
              <el-option
                v-for="item in compulsoryOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3" class="search-item">
            <div class="sub-title">{{ $t("search.status") }}</div>
            <el-select v-model="status" clearable size="mini">
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="programs-content">
      <div class="programs-top-class"></div>
      <div class="programs-table-wrap">
        <table id="plan-courses-table" v-loading="loading">
          <thead>
            <tr>
              <th width="20%">{{ $t("table.courseInfo") }}</th>
              <th width="15%">{{ $t("table.openSemester") }}</th>
              <th width="10%">{{ $t("table.compulsory") }}</th>
              <th width="13%">{{ $t("table.teacher") }}</th>
              <th width="28%">{{ $t("table.timeAndPlace") }}</th>
              <th width="7%">{{ $t("table.selectionStatus") }}</th>
              <th width="7%">{{ $t("table.operation") }}</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="showTable && programCourses.length > 0">
              <template v-for="item in programCourses">
                <tr :key="item.id" class="exclude-search">
                  <td colspan="7">
                    <div class="course-module">
                      <i class="el-icon-caret-top" style="font-size: 18px"></i
                      >&nbsp;&nbsp;
                      {{ getTypeName(item) }}
                    </div>
                  </td>
                </tr>
                <template v-if="item.children && item.children.length > 0">
                  <tr v-for="course in item.children" :key="course.id">
                    <td>{{ course.nameZh }}</td>
                    <td>{{ course.nameZh }}</td>
                    <td>{{ course.nameZh }}</td>
                    <td>{{ course.nameZh }}</td>
                    <td>{{ course.nameZh }}</td>
                    <td>{{ course.nameZh }}</td>
                    <td>{{ course.nameZh }}</td>
                  </tr>
                </template>
              </template>
            </template>
            <tr
              class="empty-table"
              v-if="showTable && programCourses.length == 0"
            >
              <td colspan="7">
                <el-image
                  style="width: 20%; height: 20%"
                  :src="noDataImg"
                  fit="cover"
                ></el-image>
                <div>{{ $t("table.noCourseData") }}</div>
              </td>
            </tr>
            <tr
              class="empty-table"
              v-if="!showTable && Object.keys(data).length == 0"
            >
              <td colspan="7">
                <el-image
                  style="width: 20%; height: 20%"
                  :src="noDataImg"
                  fit="cover"
                ></el-image>
                <div>{{ $t("table.noProgramData") }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { status, selectLessons } from "../data";
import _each from "lodash/each";
import _groupBy from "lodash/groupBy";
import { getDataName, getAllLessonData } from "@/utils/index";
import noDataImg from "@/assets/no-data.png";

export default {
  name: "MajorPlan",
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
      loading: true,
      programName: "",
      courseNameOrCode: "",
      openSemester: "",
      openSemesterOptions: [],
      suggestSemester: "",
      suggestSemesterOptions: [],
      compulsory: "",
      compulsoryOptions: [],
      status: "",
      statusOptions: [],
      programCourses: [],
      modulesMap: [],
      topClassList: [],
      noDataImg: noDataImg,
    };
  },
  computed: {
    getTypeName() {
      return function (data) {
        if (data == null) {
          return "";
        }
        if (window.LOCALE === "zh") {
          return data.typeNameZh ? data.typeNameZh : "";
        } else {
          return data.typeNameEn && data.typeNameEn != ""
            ? data.typeNameEn
            : data.typeNameZh;
        }
      };
    },
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      let _self = this;

      this.options.topClass = ["INTERNSHIP"];

      if (this.data.programId) {
        await getAllLessonData()
          .then((res) => {
            this.allLessons = res;
            this.showAllLessons = true;
          })
          .catch(() => {
            this.allLessons = [];
            this.showAllLessons = true;
          });

        this.courseIdByLessonMap = _groupBy(this.allLessons, function (lesson) {
          return lesson.course.id;
        });

        this.courseIdByselectedLessonMap = _groupBy(
          selectLessons.data,
          function (lesson) {
            return lesson.course.id;
          }
        );

        this.statusOptions = status;
        if (this.data.programNameZh) {
          let cultivateType = this.data.cultivateTypeZh
            ? "【" + this.data.cultivateTypeZh + "】"
            : "【" + this.data.cultivateTypeEn + "】";
          this.programName = cultivateType + this.data.programNameZh;
        } else if (this.data.programNameEn) {
          this.programName =
            "【" + this.data.cultivateTypeEn + "】" + this.data.programNameEn;
        }

        if (this.data.currentTerm) {
          this.openSemester = this.data.currentTerm;
        }

        if (this.data.courseModules && this.data.courseModules.length > 0) {
          _each(this.data.courseModules, function (courseModule) {
            if (courseModule.reference) {
              return;
            }
            if (
              courseModule.planCourses &&
              courseModule.planCourses.length > 0
            ) {
              courseModule.children = [];
              courseModule.type = "courseModule";
              _self.modulesMap[courseModule.id] = courseModule;

              _each(courseModule.planCourses, function (planCourse) {
                // 该课程不在全选选课中,则不显示
                var currentLesson = _self.courseIdByLessonMap[planCourse.id];
                if (currentLesson && currentLesson.length > 0) {
                  let courseName = getDataName(planCourse);
                  // todo 培养方案多层级显示
                  if (_self.modulesMap[courseModule.id]) {
                    _self.modulesMap[courseModule.id].children.push(planCourse);
                  }

                  // 置顶课程
                  if (
                    _self.options.topClass &&
                    -1 !== _self.options.topClass.indexOf(planCourse.flag)
                  ) {
                    let selectedLesson =
                      _self.courseIdByselectedLessonMap[planCourse.id];
                    let lesson = null;
                    if (selectedLesson && selectedLesson.length > 0) {
                      lesson = selectedLesson;
                    }
                    _self.topClassList.push({
                      lesson,
                      courseName,
                      planCourse,
                    });
                  }
                }
              });
            }
          });
        }

        this.programCourses = Object.values(this.modulesMap);
        console.log(this.programCourses);

        // todo 查询条件
        this.showTable = true;
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#programs {
  .programs-title {
    font-size: 21px;
    margin-bottom: 0px;
    margin-top: -8px;
  }
}
</style>