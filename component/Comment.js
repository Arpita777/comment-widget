import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply,faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';

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
      {comment.user}<hr/><br/>
      {comment.comment}<br/>
      <FontAwesomeIcon icon={faReply}
                 onClick={()=>setReply(comment.userid)}
                style={{cursor:'pointer'}}/><br/>

      <FontAwesomeIcon icon={faEdit}
                 onClick={()=>setEdit(comment.userid)}
                style={{cursor:'pointer'}}/><br/>

      <FontAwesomeIcon icon={faTrash}
                 onClick={()=>setDelete(comment.userid)}
                style={{cursor:'pointer'}}/>
       
      </div>
      {nestedComments}
    </div>
  )
}
export default Comment