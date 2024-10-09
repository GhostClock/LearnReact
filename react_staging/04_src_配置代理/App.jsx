import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  getData(url) {
    axios.get(url).then(
      response => {
        console.log('响应的数据 ', response.data);
      },error => {
        console.log('错误信息 ', error);
      }
    )
  }

  getStudentData = () => {
    this.getData('/api1/students')
  }

  getCarData = () => {
    this.getData('/api2/cars')
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点击学生获取数据</button>
        <button onClick={this.getCarData}>点击汽车获取数据</button>
      </div>
    )
  }
}
