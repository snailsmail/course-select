import _each from "lodash/each"
import { addData, getData } from "@/utils/database"
import $axios from "axios"

export function getDataName(data) {
  if (data == null) {
    return ""
  }
  if (window.LOCALE === "zh") {
    return data.nameZh ? data.nameZh : ""
  } else {
    return data.nameEn && data.nameEn != "" ? data.nameEn : data.nameZh
  }
}

async function getVersionData(allLessons, item, reject) {
  await getData(item).then((data) => {
    if (!data.length) {
      $axios
        .get(
          "http://localhost:30012/cache/course-select/addable-lessons/441/" +
            item +
            ".json"
        )
        .then((resVersionData) => {
          allLessons = allLessons.concat(JSON.parse(resVersionData.data.data))
          addData(item, resVersionData.data.data)
        })
        .catch(() => {
          reject(allLessons)
        })
    } else {
      allLessons = allLessons.concat(JSON.parse(data[0].value))
    }
  })
  return allLessons
}

export const getAllLessonData = function() {
  let allLessons = []
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "http://localhost:30012/cache/course-select/version/441/version.json?_=1610356679433"
      )
      .then((res) => {
        _each(res.data, function(item) {
          allLessons = getVersionData(allLessons, item, reject)
        })
        resolve(allLessons)
      })
      .catch(() => {
        reject(allLessons)
      })
  })
}
