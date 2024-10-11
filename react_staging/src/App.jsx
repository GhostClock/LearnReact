import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  // 初始化状态
  state = {
    users: [], // 初始值为数据
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    error: '', // 存储请求相关的错误信息
  }

  // 更新App state
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
        <div className="container">
          <Search updateAppState={this.updateAppState} />
          {/* 批量传递 */}
          <List {...this.state} />
        </div>
    )
  }
}
