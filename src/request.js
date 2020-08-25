import axios from 'axios'
import Mock from 'mockjs'
import data from './data.js'
export default {
  request(params){
    this.userMock()
    return axios({
      method:'get',
      url:'/api/getHourseRaces',
      data:params
    }).then(res => {
      if(res.status === 200){
        return data
      }
      return null
    })
  },
  userMock(){
    Mock.mock("/api/getHourseRaces", "get", (config) => {
      return config;
    })
  },
  async get(params){
    const data = await this.request(params)
    return data
  }
}
