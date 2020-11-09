<template>
    <div>
        <el-tabs v-model="activeTab" @tab-click="handleClick">
            <el-tab-pane v-for="(tab, index) in tabList" :key="index" :label="tab.label" :name="tab.name">
                {{index}}
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import { tabList } from '../data'
    import { createDB, addData, getData, deleteData } from '@/utils/database'
    export default {
        name: 'CourseSelect',
        data() {
            return {
                tabList: [],
                activeTab: ''
            }
        },
        created () {
            this.tabList = tabList
            this.activeTab = tabList[0].name
            createDB()

            // 1.获取全校选课数据

            // 2.获取培养方案数据

            // 3.获取已选课程

            // 4.渲染培养方案
        },
        methods: {
            handleClick() {
                deleteData('first')
                addData('first', '{dfgsdgf}')
                getData('first').then(data => {
                    console.log(data);
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>