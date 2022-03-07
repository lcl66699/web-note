// import React, { Component } from 'react'

// export default class Clock extends Component {
//   // 状态固定名字
//   state = {
//     date: new Date()
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState({
//         date: new Date()
//       })
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return (
//       <div>
//         {this.state.date.toLocaleTimeString()}
//       </div>
//     )
//   }
// }


import React, { Component } from 'react'

export default class Clock extends Component {
  state = {
    data: new Date()
  }
  //组件挂载html之后
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        data: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>Clock
        {this.state.data.toLocaleDateString()}
      </div>
    )
  }
}

