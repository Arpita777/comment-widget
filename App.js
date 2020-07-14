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
    replied:this.state.replied?false:this.state.replied,
    currentIndex:-1
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
  findUIDObj = (uid, arr) => {
    if (!arr) return;
    const idx = arr.findIndex(obj => obj.userid === uid);
    if (idx > -1) return [arr, idx];
    for (const obj of arr) {
        const result = this.findUIDObj(uid, obj.children);
        if (result) return result;
    }
};
  handleDelete=(id)=>{
    var newArr=this.state.arr;
    const [arr, idx] = this.findUIDObj(id, newArr) || [];
if (arr) {
    arr.splice(idx, 1); // Remove object from its parent array
}
this.setState({
  arr:newArr
})
  }

  render() {
    return (
      <div className='App'>
      {this.state.replied && <h3>Replying ...</h3>}
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
                     handleDelete={this.handleDelete}
                     handleEdit={this.handleEdit}
                     comment={comment}
                     handleReply={this.handleReply}/>
            
          )
        })
      }
      
      </div>
    );
  }
}
export default App
