import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply,faEdit,faTrash,faUserCircle} from '@fortawesome/free-solid-svg-icons';

const Comment = ({handleDelete,handleEdit,handleReply,comment}) => {
  const setReply=(id)=>{
    window.scroll(0, 0)
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
      <FontAwesomeIcon icon={faUserCircle}
                       size={'2x'}
                       style={{margin:'auto',justifyContent:'center'}}/>
      <div className='user'>{comment.user}</div><hr/><br/>
      <div className='comment'>{comment.comment}</div><br/>
      <FontAwesomeIcon icon={faReply}
                 onClick={()=>setReply(comment.userid)}
                style={{cursor:'pointer'}}/>

      <FontAwesomeIcon icon={faEdit}
                 onClick={()=>setEdit(comment.userid)}
                style={{cursor:'pointer'}}/>

      <FontAwesomeIcon icon={faTrash}
                 onClick={()=>setDelete(comment.userid)}
                style={{cursor:'pointer'}}/>
       
      </div>
      {nestedComments}
    </div>
  )
}
export default Comment