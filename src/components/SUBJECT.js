
import React, {Component} from 'react';

class Subject extends Component {
    render() {
      return (
        <header>
          <h1><a href="/">{this.props.title}</a></h1>
          {this.props.sub}       
        </header>
      );
    }
  }

  export default Subject  //외부에서 Subject클래스를 쓸수 있게 해준다.