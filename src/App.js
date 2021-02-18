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
      mode:'welcome',
      subject:{title:'WEB',sub:'World Wide Web'},
      welcome:{title:"Welcome",desc:"Hello, React!!"},
      contents:[
        {id:1, title:"HTML",desc:"HTML is HyperText ..."},
        {id:2, title:"CSS",desc:"CSS is design ..."},
        {id:3, title:"JavaScript",desc:"JavaScript is for interactive"}
      ]
    }
  }
  
  //render함수는 props, state값이 바뀌면 재호출 되도록 되어있다.(화면이 다시 그려진다.)
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc
    }
    return (
      <div className="App">
        {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Subject title="React" sub="For UI"></Subject> */}
        <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            //this.state.mode = 'welcome';
            this.setState({
              mode:'read'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>  
          {this.state.subject.sub}       
        </header>
        <Toc data={this.state.contents}></Toc>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );    
  }
}

export default App;
