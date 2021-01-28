
import React, {Component} from 'react';

class Content extends Component {
    render() {
      return (
        <article>
          <h1>{this.props.title}</h1>
          {this.props.desc}
        </article>
      );
    }
  }
  
  export default Content  //외부에서 Content클래스를 쓸수 있게 해준다.