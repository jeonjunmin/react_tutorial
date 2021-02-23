import React, {Component} from 'react';

class Toc extends Component {
    render() {
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(<li key={data[i].id}><a href = {"/content/"+data[i].id}  data-id={data[i].id}
        onClick={function(e){ 
          // debugger; //여기에서 실행을 멈춤
          e.preventDefault(); //다른페이지로 가지 않게 하는것
          this.props.onChangePage(e.target.dataset.id); //e.target.dataset.id는 a태그의 data-id를 가르킴
         }.bind(this)}>{data[i].title}</a></li>);
        i = i + 1;
      }

      return (
        <nav>
          <ul>          
            {lists}
          </ul>
        </nav>
      );
    }
  }

  export default Toc  //외부에서 Toc클래스를 쓸수 있게 해준다.