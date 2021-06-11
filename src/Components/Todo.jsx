import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';


function Todo({data,id}) {
  
    
    return (
        
        <div className="div">
            
            <Droppable droppableId={id}>
                {
                    (provided) => (
                        <div className="heading" ref={provided.innerRef} {...provided.droppableProps} id="first-div">
                       
                       <div className="div-heading">
                      
                            <ul>
                            <h1>Todo</h1>
                                    {
                                        data.map((li,index) => (
                                          <Draggable draggableId={li.id} index={index} key={li.id}>
                                              {
                                                  (provided,snapshot) =>(
                                                      
                                                          <li
                                                         
                                                           ref={provided.innerRef}
                                                           isDragging={snapshot.isDragging}
                                                           {...provided.draggableProps}
                                                           {...provided.dragHandleProps} 
                                                           
                                                           className="list">
                                                               
                                                               {li.content}
                                                          </li>
                                                      
                                                  )}
                                          </Draggable>
          
                                        ))
                                    }
                                  
                                
                                          </ul>
                                          </div>
                                          {/* <div className="div-heading" id="second-div">
                                              <h1>Doing</h1>
                                          </div>
                                          <div className="div-heading" id="third-div">
                                              <h1>Done</h1>
                                          </div> */}
    
                                
                            
                            {provided.placeholder}
                             </div>

                            
                                         
                
                    

                    
                    )
                }
            </Droppable>    
               
        </div>               
    )

            }
export default Todo
