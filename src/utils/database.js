import Dexie from "dexie"

const key = "courseSelectDatabase"

const createDB = function(dbName) {
  dbName = dbName || key
  let db = new Dexie(dbName)
  window.db = db
  window.db.version(1).stores({
    curseData: "++id, key, value"
  })
  db.open()
  return db
}

const addData = function(key, value) {
  window.db.curseData.add({ key: key, value: value })
}

// 若无数据返回空数组
const getData = function(key) {
  return window.db.curseData
    .where("key")
    .equals(key)
    .toArray()
}

const deleteData = function(key) {
  return window.db.curseData
    .where("key")
    .equals(key)
    .delete()
}

export { createDB, addData, getData, deleteData }
