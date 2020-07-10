import React from 'react'
import '../style.css'

class Form extends React.Component{
  constructor(props){
    super(props);
    this.orig={}
    this.state={
       ...this.returnStateObject(),
       userid:1,
       children:[]
    }
  }

  returnStateObject(){
    if(this.props.currentIndex==-1){
      return {user:'',comment:''}
    }
    else{
      this.findOrig(this.props.arr,this.props.currentIndex)
      return {
        user:this.orig.user,
        comment:this.orig.comment
      }
    }
  }
  componentDidUpdate(prevProps){
    if(prevProps.currentIndex!=this.props.currentIndex ||
       prevProps.arr.length != this.props.arr.length){
         this.setState({
           ...this.returnStateObject(),
           userid:this.state.userid,
           children:prevProps.children
         })
       }
  }
   findOrig=(arr,id)=>{
      arr.map(obj=>{
for(var key in obj){
		if(typeof obj[key] === 'object'){
			return this.findOrig(obj[key], id);
		}

		if (obj[key] === id){
			this.orig=obj
     
      return true
		}
	}
	return false;})
   }
  contains=(arr,id)=>{
      arr.map(obj=>{
for(var key in obj){
		if(typeof obj[key] === 'object'){
			return this.contains(obj[key], id);
		}

		if (obj[key] === id){
    if(this.props.currentIndex==-1){
			obj.children.push({
              user:this.state.user,
              comment:this.state.comment,
              userid:this.state.userid,
              children:[]
      })
    }
    else{
      obj.user=this.state.user,
      obj.comment=this.state.comment
    }
      
     
      return true
		}
	}
	return false;})
   }
   handleSubmit=(e)=>{
     e.preventDefault();
     const arr=this.props.arr;
     if(!this.props.replied && this.props.currentIndex==-1){
       console.log('if block of handle submit called!')
       arr.push({
              user:this.state.user,
              comment:this.state.comment,
              userid:this.state.userid,
              children:[]
              }
            )
             
     }
     else if(this.props.replied && this.props.currentIndex==-1){
       console.log('else if block of handle submit called!')
      this.contains(this.props.arr,this.props.repliedId)
     
        
     }
     else{
       console.log('else block of handle submit called!')
        this.contains(this.props.arr,this.props.currentIndex)
     }
     this.props.handleState(arr)
     
     
      this.setState({
        user:'',
        comment:'',
        userid:this.state.userid+1
      })
    
  }
  handleChange=(e)=>{
    
    this.setState({
     [e.target.name]:e.target.value
    })
  }
  render(){
    const {user,comment}=this.state
    return(
       <form onSubmit={this.handleSubmit}>
         <input type='text' name='user' value={user} 
                onChange={this.handleChange}
                placeholder='user'/><br/>
         <textarea name="comment" value={comment}
                   placeholder='Type your comment here'
                   onChange={this.handleChange}>Enter text here...</textarea><br/>
         <input type='submit' value='Post'/>
       </form>
    )
  }
}
export default Form