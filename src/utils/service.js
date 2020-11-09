import request from '@/utils/request'

const baseUrl = window.CONTEXT_PATH

// 获取全校课程版本列表
export const fetchAllLessonsVersion = function(url) {
  return request({
    url: baseUrl + url,
    method: 'get',
    cache: false
  })
}

// 通过列表获取全校课程
export const fetchAllLessinsByVersion = function(url) {
    return request({
      url: baseUrl + url,
      method: 'get',
      cache: false
    })
}

// 获取不及格/重修课程
export const fetchFailedCourses = function(url, params) {
    return request({
      url: baseUrl + url,
      method: 'post',
      params
    })
}

// 获取已选课程
export const fetchSelectedLessons = function(url, params) {
    return request({
      url: baseUrl + url,
      method: 'post',
      params
    })
}

// 获取培养方案数据
export const fetchMajorPlanCourses = function(url, params) {
    return request({
      url: baseUrl + url,
      method: 'post',
      params
    })
}

// 获取打包选课数据
export const fetchPackCourses = function(url) {
    return request({
      url: baseUrl + url,
      method: 'post'
    })
}

// 获取选课状态
export const fetchStatus = function(url, params) {
    return request({
      url: baseUrl + url,
      method: 'post',
      params
    })
}

// 获取未中签课程
export const getUnsignedCourseData = function(url, params) {
    return request({
      url: baseUrl + url,
      method: 'get',
      params
    })
}

// 选课前预判
export const sendAddPredicate = function(url, params) {
    return request({
      headers:{
        contentType: 'application/json'
      },
      url: baseUrl + url,
      method: 'post',
      params
    })
}

// 退课前预判
export const sendDropPredicate = function(url, params) {
    return request({
      url: baseUrl + url,
      method: 'post',
      params
    })
}

// 获取预判结果
export const fetchPredicateResult = function(url, params) {
    return request({
      url: baseUrl + url,
      method: 'post',
      params
    })
}

// 发起选课请求
export const sendAddRequest = function(url, params) {
    return request({
      headers:{
        contentType: 'application/json'
      },
      url: baseUrl + url,
      method: 'post',
      params
    })
}

// 发起退课请求
export const sendDropRequest = function(url, params) {
    return request({
      headers:{
        contentType: 'application/json'
      },
      url: baseUrl + url,
      method: 'post',
      params
    })
}

// 获取选课结果
export const fetchAddDropResult = function(url, params) {
    return request({
      url: baseUrl + url,
      method: 'post',
      params
    })
}

// 获取课程备注
export const fetchSelectionRemark = function(url, params) {
    return request({
      url: baseUrl + url,
      method: 'get',
      params
    })
}
