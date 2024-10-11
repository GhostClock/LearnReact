import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  // 初始化状态
  state = {
    users: [], // 初始值为数据
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    error: '', // 存储请求相关的错误信息
  }

  componentDidMount() {
    this.token = PubSub.subscribe('SEARCH_RESULT', (_, data) => {
      this.setState(data)
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { users, isFirst, isLoading, error} = this.state
    return (
        <div className="row">
          {
            isFirst ? <h2>欢迎使用，请输入关键字，然后点击搜索</h2> :
            isLoading ? <h2>Loading......</h2> :
            error ? <h2 style={{color: 'red'}}>{error}</h2> :
            !users.length ? <h2>没有搜索到相关内容</h2> :
            users.map(user => {
              return (
                  <div className="card" key={user.id}>
                    <a href={user.html_url} target="_blank" rel="noreferrer">
                      <img alt='head_portrait' src={user.avatar_url} style={{width: '100px'}}/>
                    </a>
                    <p className="card-text">{user.login}</p>
                  </div>
                )
            })
          }
        </div>
    )
  }
}
