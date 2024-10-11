import React, { Component } from 'react'
import axios from 'axios';
import PubSub from 'pubsub-js'

export default class Search extends Component {
  search =  () => {
    // 获取用户的输入
    const { keyWordRef: { value: keyWord } } = this // 连续写解构+重命名
    if (!keyWord) {  return alert('请输入关键字')}
    
    // 发送请求前通知List更新状态
    PubSub.publish('SEARCH_RESULT', {isFirst: false, isLoading: true});
    // 发起网络请求
    axios.get(`/api/search/users?q=${keyWord}`).then(
      response => {
        const { data:{ items: users } } = response
        // 请求回来后给List回调数据
        PubSub.publish('SEARCH_RESULT', {isLoading: false, users});
      }, error => {
        // 发生错误后给List回调数据
        PubSub.publish('SEARCH_RESULT', {isLoading: false, users: [], error: error.message});
      }
    )
  }

  render() {
    return (
        <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索Github用户</h3>
          <div>
            <input ref={c => this.keyWordRef = c} type="text" placeholder="请输入关键字"/>&nbsp;
            <button onClick={this.search}>搜索</button>
          </div>
        </section>
    )
  }
}
