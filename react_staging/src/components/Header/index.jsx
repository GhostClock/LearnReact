import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

  handleKeyUp = ({target, keyCode}) => {
    // 判断是否是回车按钮
    if (keyCode !== 13) { return }
    const { value } = target
    // 判空处理
    if (value.trim() === '') {
      return alert('输入不能为空')
    }
    // 创建一个todo对象
    const todoObj = {
      id: nanoid(),
      name: value,
      done: false
    }
    // 将数据传递给App组件
    this.props.addTodo(todoObj)
    // 清空输入框
    target.value = ''
  }

  render() {
    return (
        <div className="todo-header">
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
    )
  }
}
