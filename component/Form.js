import React from 'react'

class Form extends React.Component{
  state={
    user:'',
    comment:'',
    userid:1,
    children:[]
  }
    contains=(arr,id)=>{
      arr.map(obj=>{
for(var key in obj){
		if(typeof obj[key] === 'object'){
			return this.contains(obj[key], id);
		}

		if (obj[key] === id){
			obj.children.push({
              user:this.state.user,
              comment:this.state.comment,
              userid:this.state.userid,
              children:[]
      })
      return true
		}
	}
	return false;})
   }
   handleSubmit=(e)=>{
     e.preventDefault();
     const arr=this.props.arr;
     if(!this.props.replied){
       arr.push({
              user:this.state.user,
              comment:this.state.comment,
              userid:this.state.userid,
              children:[]
              }
            )
             
     }
     else{
      this.contains(this.props.arr,this.props.repliedId)
     
        
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
       placeholder='comment'
      onChange={this.handleChange}>Enter text here...</textarea>
       <input type='submit' value='Comment'/>
       </form>
    )
  }
}
export default Form