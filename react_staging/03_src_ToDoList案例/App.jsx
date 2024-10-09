// 创建 外壳 组件App
import React,{Component} from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

// 创建并暴露App组件
export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里

  // 初始化数据
  state = {
    todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: true},
      {id: '003', name: '撸代码', done: false},
    ]
  }
  // 用于添加一个todo对象
  addTodo = (todoObj) => {
    // 获取原始todo
    const { todos } = this.state
    // 在前面追加一个todo
    const newTodos = [todoObj, ...todos]
    // 更新状态
    this.setState({todos: newTodos})
  }

  // 更新一个todo的状态
  updateTodo = (id, done) => {
    // 获取原始todo
    const { todos } = this.state
    // 匹配处理数据
    const newTodos = todos.map(todoObj => {
      if (todoObj.id === id) {
        return {...todoObj, done}
      }
      return todoObj
    })
    // 更新状态
    this.setState({todos: newTodos})
  }

  // 删除一个todo
  deleteTodo = (id) => {
    // 获取原始todo
    const { todos } = this.state
    // 删除指定id的todo对象
    const newTodos = todos.filter(todoObj => todoObj.id !== id)
    // 更新状态
    this.setState({todos: newTodos})
  }

  // 全选和取消全选
  checkAllTodo = (done) => {
    // 获取原始todo
    const { todos } = this.state
    // 处理数据
    const newTodos = todos.map(todoObj => {
      return {...todoObj, done}
    })
    // 更新状态
    this.setState({todos: newTodos})
  }

  // 清除所有完成的
  clearAllDone = () => {
    // 获取原始todo
    const { todos } = this.state
    // 处理数据
    const newTodos = todos.filter(todoObj => !todoObj.done)
    // 更新状态
    this.setState({todos: newTodos})
  }

  render() {
    const { todos } = this.state
    return (
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
          </div>
        </div>
    )
  }
}