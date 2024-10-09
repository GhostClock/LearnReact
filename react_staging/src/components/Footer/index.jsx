import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  // 全选和取消全选
  handleCheckAll = ({target}) => {
    this.props.checkAllTodo(target.checked)
  }
  // 清除所有完成的
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props
    // 已完成的
    // const doneCount = (todos.filter(todoObj => todoObj.done)).length
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    // 总数
    const total = todos.length

    return (
        <div className="todo-footer">
          <label>
            <input type="checkbox" onChange={this.handleCheckAll} 
            checked={(total !== 0 && doneCount === total)}/>
          </label>
          <span>
            <span>已完成{doneCount}</span> / 全部{total}
          </span>
          <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
        </div>
    )
  }
}
