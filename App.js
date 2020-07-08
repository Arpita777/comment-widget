import React, { Component } from 'react';
import Form from './component/Form'
import Comment from './component/Comment'
import './style.css';

class App extends Component {
  state={

    arr:[],
    replied:false,
    repliedId:'',
    currentIndex:-1
  }
 
  handleState=(arr)=>{
    
    this.setState({
    arr,
    replied:this.state.replied?false:this.state.replied
    })
   
  }
  handleEdit=(id)=>{
    this.setState({
      currentIndex:id
    })
  }
  handleReply=(id)=>{
   
   this.setState({
     replied:true,
     repliedId:id
   })
  
  }

  render() {
    console.log(this.state.arr)
    return (
      <div className='App'>
      {this.state.replied && <h2>Replying to...</h2>}
      <Form arr={this.state.arr}
            handleState={this.handleState}
            replied={this.state.replied}
            repliedId={this.state.repliedId}
            currentIndex={this.state.currentIndex}/>
      {
        this.state.arr.map((comment)=>{
          return(
            
            
            <Comment key={comment.userid}
                     handleReply={this.handleReply}
                     handleEdit={this.handleEdit}
                     comment={comment}/>
            
          )
        })
      }
      
      </div>
    );
  }
}
export default App
