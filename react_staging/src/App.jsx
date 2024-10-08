// 创建 外壳 组件App
import React,{Component} from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

// 创建并暴露App组件
export default class App extends Component {
  // 初始化数据
  state = {
    todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: true},
      {id: '003', name: '撸代码', done: false},
    ]
  }

  render() {
    const { todos } = this.state
    return (
        <div className="todo-container">
          <div className="todo-wrap">
            <Header />
            <List todos={todos} />
            <Footer />
          </div>
        </div>
    )
  }
}