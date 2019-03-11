import React from 'react';
import { connect } from 'dva';

const name = 'example'

@connect(({example})=>({example}))
class B extends React.Component {
  constructor(props) {
    super(props)
    this.module = name
  }
  state = {
    // list : [1,2,3,4,5]
  }
  handle = () => {
    let list = this.props[name].list
    list = list.reverse()
    this.props.dispatch({
      type: `${name}/revese`,
      payload: {list}
    })
  }

  addBtn = () => {
    let list = this.props[name].list
    list.push(Math.random())
    this.props.dispatch({
      type: `${name}/add`,
      payload: {list}
    })
  }
  render () {
  console.log(this.props[name].list)

    return (
      <div>b
        {this.props[name].list.map((v,i) => <div key={i}>{v}</div>)}
        <button onClick={this.handle}>按钮</button>
        <button onClick={this.addBtn}>添加</button>

      </div>
    )
  }
}

B.propTypes = {
};

export default connect(({example})=>({example}))(B);
