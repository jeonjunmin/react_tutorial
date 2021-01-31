// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Toc from "./components/TOC"  //TOC.js파일의 Toc클래스를 쓸 수 있게 해준다.
import Content from "./components/CONTENT"  //CONTENT.js파일의 Content클래스를 쓸 수 있게 해준다.
import Subject from "./components/SUBJECT"  //SUBJECT.js파일의 Subject클래스를 쓸 수 있게 해준다.


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB',sub:'World Wide Web'}
    }
  }

  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <Toc></Toc>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );    
  }
}

export default App;
