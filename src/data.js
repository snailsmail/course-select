 export const tabList = [
    {
        "label": "培养方案",
        "name": "majorPlan"
    },
    {
        "label": "公选课",
        "name": "publicCourse"
    },
    {
        "label": "跨专业",
        "name": "crossMajor"
    },
    {
        "label": "不及格/已修",
        "name": "failedCourse"
    },
    {
        "label": "全部课程",
        "name": "allLesson"
    },
    {
        "label": "已选课程",
        "name": "selectedLesson"
    }
]

export const bulletin = '公告内容,选课提示之类的内容'

export const cacheUrl = ''
export const versionUrl = ''
export const turnId = ''
export const fetchOpenTurns = "/ws/for-std/course-select/open-turns"
export const fetchPlanCourses = "/ws/for-std/course-select/major-plan-courses"
export const fetchFailedCourses = "/ws/for-std/course-select/repaired-courses"
export const fetchSelectedCourses = "/ws/for-std/course-select/selected-lessons"
export const fetchStatus = "/ws/for-std/course-select/status"
export const sendAddPredicate = "/ws/for-std/course-select/add-predicate"
export const sendDropPredicate = "/ws/for-std/course-select/drop-predicate"
export const fetchPredicateResult = "/ws/for-std/course-select/predicate-response"
export const sendAddRequest = "/ws/for-std/course-select/add-request"
export const sendDropRequest = "/ws/for-std/course-select/drop-request"
export const fetchAddDropResult = "/ws/for-std/course-select/add-drop-response"
export const fetchAddableLessons = cacheUrl + "/cache/course-select/addable-lessons/"+ turnId +"/"
export const fetchAddableLessonsVersion = versionUrl + "/cache/course-select/version/"+ turnId +"/version.json"
export const fetchAddableLessonsCheck = cacheUrl + "/cache/course-select/addable-lessons/"+ turnId +"/"
export const fetchStdCount = "/ws/for-std/course-select/std-count"
export const fetchMajorPlanCourses = "/ws/for-std/course-select/major-plan"
export const sendUnsignedCourses = "/ws/for-std/course-select/unsigned-courses"
export const sendProgram = "/for-std/program?turnId="+ turnId +""
export const fetchPackCourses = "/ws/for-std/course-select/addable-course-packs?turnId="+ turnId +""
export const selectionRemark = "/ws/for-std/course-select/selection-remark"
