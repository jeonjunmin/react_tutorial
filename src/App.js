// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Toc from "./components/TOC"  //TOC.js파일의 Toc클래스를 쓸 수 있게 해준다.
import ReadContent from "./components/ReadCONTENT"  //CONTENT.js파일의 Content클래스를 쓸 수 있게 해준다.
import Subject from "./components/SUBJECT"  //SUBJECT.js파일의 Subject클래스를 쓸 수 있게 해준다.
import Control from "./components/Control"  //SUBJECT.js파일의 Subject클래스를 쓸 수 있게 해준다.
import CreateContent from "./components/CreateCONTENT"
import UpdateContent from "./components/UpdateCONTENT"


class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'welcome',
      selected_content_id:2,
      subject:{title:'WEB',sub:'World Wide Web'},
      welcome:{title:"Welcome",desc:"Hello, React!!"},
      contents:[
        {id:1, title:"HTML",desc:"HTML is HyperText ..."},
        {id:2, title:"CSS",desc:"CSS is design ..."},
        {id:3, title:"JavaScript",desc:"JavaScript is for interactive"}
      ]
    }
  }

  getReadContent(){
    var i = 0;
    while(i<this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id){
        // _title = data.title;
        // _desc = data.desc;
        return data;
        break;
      }
      i = i+1;
    }
  }

  getContent(){
    var _title, _desc ,_article, _content= null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read'){
      _content = this.getReadContent();
      
      // _title = this.state.contents[0].title;
      // _desc = this.state.contents[0].desc
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      
    } else if (this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title,_desc){        
        this.max_content_id = this.max_content_id+1;
        
        //**push로 데이터 삽입시 기존데이터를 바꾼다.
        // this.state.contents.push(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // )
        // this.setState({
        //   contents:this.state.contents
        // })
        
        //**concat로 데이터 삽입시 기존데이터를 건드리지 않는다.
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        )
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        })
               
      }.bind(this)}></CreateContent>
    }else if (this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title,_desc){        
        var _contents = Array.from(this.state.contents); //this.state.contents의 값을 복사한 새로운 배열을 만든다.
        var i = 0;
        while(i < _contents.length){
          if(_contents[i].id === _id){
            _contents[i] = {id:_id, title:_title, desc:_desc};        
            break;
          }
          i = i+1;
        }

        this.setState({
          contents:_contents,
          mode:'read'
        })
       
        

      }.bind(this)}></UpdateContent>
    }


    return _article;

  }
  //render함수는 props, state값이 바뀌면 재호출 되도록 되어있다.(화면이 다시 그려진다.)
  render() {
    
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
              mode:'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>  
          {this.state.subject.sub}       
        </header>
        <Toc onChangePage={function(id){          
          // debugger;
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
          
        }.bind(this)} data={this.state.contents}></Toc>
        <Control onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm('really?')){   //확인창(window.corfirm) :  확인누르면 true 아니면 false
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i < _contents.length)                {
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1);
                  break; 
                }
                i = i + 1;
              }
              this.setState({
                mode:'welecome',
                contents : _contents
              });
              alert('deleted');
            }
          }else{
            this.setState({
              mode:_mode
            });
          }

          
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );    
  }
}

export default App;
