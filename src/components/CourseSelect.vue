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
    export default {
        name: 'CourseSelect',
        data() {
            return {
                tabList: [],
                activeTab: ''
            }
        },
        created () {
            console.log(tabList);
            this.tabList = tabList;
            this.activeTab = tabList[0].name
        },
        methods: {
            handleClick() {
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>