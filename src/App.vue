<template>
  <div id="app">
    <el-dialog
      :title="bulletin"
      :visible.sync="dialogVisible"
      width="30%">
      <span slot="footer" class="dialog-footer">
        <div v-if="count > 0"><span>{{count}}</span>秒后可选择</div>
        <div v-if="count == 0">
          <el-button @click="handleNoLongerSign">不再提示</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </div>
       </span>
    </el-dialog>
    <CourseSelect/>
  </div>
</template>

<script>
import { bulletin } from './data'
import CourseSelect from './components/CourseSelect.vue'
import {
  getToken,
  setToken
} from '@/utils/auth'

export default {
  name: 'App',
  components: {
    CourseSelect
  },
  data() {
    return {
      bulletin: '',
      dialogVisible: false,
      stdNoLongerSign: false,
      count: 5
    }
  },
  created () {
    this.bulletin = bulletin
    if (this.bulletin) {
      this.dialogVisible = true

      var stdNoLongerSign = getToken('stdNoLongerSign');
      if (stdNoLongerSign) {
        this.dialogVisible = false
      } else {
        this.dialogVisible = true
        this.timer = null
        this.timer = setInterval(() => {
          this.onTimer()
        }, 1000);
      }
    }
  },
  methods: {
    onTimer() {
      this.count > 0 ? this.count-- : this.clearTimer()
    },
    clearTimer() {
      clearInterval(this.timer)
    },
    handleNoLongerSign() {
      this.dialogVisible = false
      setToken('stdNoLongerSign', true)
    }
  },
}
</script>

<style>
</style>
