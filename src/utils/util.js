/*
 * 前端localStorage存储方法
 * */
export function setLocalStorage (KEY, value) {
    // 存
    window.localStorage.setItem(KEY, JSON.stringify(value))
  }
  export function getLocalStorage (KEY) {
    // 取
    const data = window.localStorage.getItem(KEY)
    try {
      return JSON.parse(data)
    } catch (e) {
      return data
    }
  }
  export function removeLocalStorage (KEY) {
    // 删除
    window.localStorage.removeItem(KEY)
  }
  
  /*
   * 前端localStorage存储方法
   * */
  export function setSessionStorage (KEY, value) {
    // 存
    window.sessionStorage.setItem(KEY, JSON.stringify(value))
  }
  export function getSessionStorage (KEY) {
    // 取
    const data = window.sessionStorage.getItem(KEY)
    try {
      return JSON.parse(data)
    } catch (e) {
      return data
    }
  }
  export function removeSessionStorage (KEY) {
    // 删除
    window.sessionStorage.removeItem(KEY)
  }