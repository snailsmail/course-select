<template>
  <div id="app">
    <el-dialog :title="bulletin" :visible.sync="dialogVisible" width="30%">
      <span slot="footer" class="dialog-footer">
        <div v-if="count > 0">
          <span>{{ count }}</span
          >秒后可选择
        </div>
        <div v-if="count == 0">
          <el-button @click="handleNoLongerSign">不再提示</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </div>
      </span>
    </el-dialog>

    <el-row class="course-select-title">
      <el-col :span="12">
        <span class="course-select-semester">{{ semester }}</span>
      </el-col>
      <el-col :span="12" class="course-select-button">
        <el-button size="small" type="primary">课表选课</el-button>
        <el-button size="small">列表选课</el-button>
      </el-col>
    </el-row>

    <div id="app-content">
      <CourseSelect />
    </div>
  </div>
</template>

<script>
import { bulletin, semester } from "../data";
import CourseSelect from "@/components/CourseSelect.vue";
import { getToken, setToken } from "@/utils/auth";

export default {
  components: {
    CourseSelect,
  },
  data() {
    return {
      bulletin: "",
      dialogVisible: false,
      stdNoLongerSign: false,
      count: 0,
      semester: "",
    };
  },
  created() {
    this.bulletin = bulletin;
    if (this.bulletin) {
      this.dialogVisible = true;

      var stdNoLongerSign = getToken("stdNoLongerSign");
      if (stdNoLongerSign) {
        this.dialogVisible = false;
      } else {
        this.dialogVisible = true;
        this.timer = null;
        this.timer = setInterval(() => {
          this.onTimer();
        }, 1000);
      }
    }

    this.semester = semester;
  },
  methods: {
    onTimer() {
      this.count > 0 ? this.count-- : this.clearTimer();
    },
    clearTimer() {
      clearInterval(this.timer);
    },
    handleNoLongerSign() {
      this.dialogVisible = false;
      setToken("stdNoLongerSign", true);
    },
  },
};
</script>

<style lang="scss">
body {
  background: url("../assets/bg.jpg");
  background-size: cover;
  overflow: hidden;
  height: 100%;
}

body {
  .course-select-title {
    margin: 0 20px;

    .course-select-semester {
      font-size: 25px;
      color: #fff;
    }

    .course-select-button {
      margin-top: 2px;
      text-align: right;
    }
  }

  #app-content {
    margin: 0 20px;
    background: #fff;
    border-radius: 6px;
    padding: 10px 20px;
    min-height: 70vh;
  }
}
</style>
