import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    // 标识鼠标移入移出
    mouse: false
  }
  // 鼠标移入，移出的回调
  handleMouse(isEnter) {
    return () => {
      this.setState({mouse: isEnter})
    }
  }
  // 勾选或者取消勾选某个tudo
  handleCheck = (id) => {
    return ({target}) => {
      const { checked } = target
      this.props.updateTodo(id, checked)
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li className={mouse? 'active' :'normal'} 
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" 
          style={{display: mouse? 'block': 'none'}}>删除
        </button>
      </li>
    )
  }
}
