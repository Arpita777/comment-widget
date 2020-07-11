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
    <div className='commentBox'>
         <div className='leftPanelImg'>
            <FontAwesomeIcon icon={faUserCircle}
                     size={'3x'}
                     style={{color:'green'}}/>
         </div>
         <div className='rightPanel'>
          <span className='user'>{comment.user}</span>
          <p>
          {comment.comment}<br/>
         
          </p>
         </div>
         <div className='icons' style={{float:'right'}}>

        <span> 
             <FontAwesomeIcon icon={faReply}
                onClick={()=>setReply(comment.userid)}
                style={{cursor:'pointer',marginLeft:'4px',color:'green'}}/>
               
              
        </span>
        
        
         <span> <FontAwesomeIcon icon={faEdit}
                 onClick={()=>setEdit(comment.userid)}
                style={{cursor:'pointer',marginLeft:'2px',color:'green'}}/>
               
        </span>
        
         
          <span> <FontAwesomeIcon icon={faTrash}
                 onClick={()=>setDelete(comment.userid)}
                style={{cursor:'pointer',marginLeft:'0px',color:'green'}}/>
               
          </span>
          
          </div>
         <div className='clear'></div>
       </div>
      {nestedComments}
    </div>
  )
}
export default Comment