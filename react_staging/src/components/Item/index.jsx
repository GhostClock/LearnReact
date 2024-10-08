import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    mouse: false
  }

  handleMouse(isEnter) {
    return () => {
      this.setState({mouse: isEnter})
    }
  }

  render() {
    const { name, done } = this.props
    const { mouse } = this.state
    return (
      <li className={mouse? 'active' :'normal'} 
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" 
          style={{display: mouse? 'block': 'none'}}>删除
        </button>
      </li>
    )
  }
}
