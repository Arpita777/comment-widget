import React from 'react'

const Comment = ({handleEdit,handleReply,comment}) => {
  const setReply=(id)=>{
    handleReply(id)
  }
  const setEdit=(id)=>{
    handleEdit(id)
  }
  const nestedComments = (comment.children || []).map(comment => {
    return <Comment key={comment.userid} comment={comment} handleReply={handleReply} handleEdit={handleEdit} type="child" />
  })

  return (
    <div style={{"marginLeft": "25px", "marginTop": "10px"}}>
      <div className='card'>
      UserName:{comment.user}<br/>
      {comment.comment}<br/>
      <button onClick={()=>setReply(comment.userid)}>Reply</button><br/>
      <button onClick={()=>setEdit(comment.userid)}>Edit</button>
      </div>
      {nestedComments}
    </div>
  )
}
export default Comment