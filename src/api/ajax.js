/*
* ajax请求函数模块
* 向外暴露一个对象，供其使用
* */
import axios from 'axios'
export default function ajax(url = '', data = {}, type = 'GET') {
  // resolve, reject属于高阶函数，成功调用resolve, 失败调用reject
  return new Promise(function (resolve, reject) {

    let promise

    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    // .then传回成功的数据
    promise.then(response => {
      resolve(response.data) // 目的是拿到data
    })// .catch传回失败的信息
      .catch(error => {
        reject(error)
      })
  })
}
