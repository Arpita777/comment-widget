import React from 'react'

const Comment = ({handleDelete,handleEdit,handleReply,comment}) => {
  const setReply=(id)=>{
    handleReply(id)
  }
  const setEdit=(id)=>{
    handleEdit(id)
  }
  const setDelete=(id)=>{
    handleDelete(id)
  }
  const nestedComments = (comment.children || []).map(comment => {
    return <Comment key={comment.userid} comment={comment} handleReply={handleReply} handleEdit={handleEdit} handleDelete={handleDelete} type="child" />
  })

  return (
    <div style={{"marginLeft": "25px", "marginTop": "10px"}}>
      <div className='card'>
      UserName:{comment.user}<br/>
      {comment.comment}<br/>
      <button onClick={()=>setReply(comment.userid)}>Reply</button><br/>
      <button onClick={()=>setEdit(comment.userid)}>Edit</button>
       <button onClick={()=>setDelete(comment.userid)}>Delete</button>
      </div>
      {nestedComments}
    </div>
  )
}
export default Comment