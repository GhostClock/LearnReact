import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, error} = this.props
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
