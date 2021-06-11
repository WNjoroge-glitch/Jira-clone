import React from 'react';
import {Draggable, Droppable} from 'react-beautiful-dnd';



function InProgress({id,list}) {
    console.log(list)
    return (
       
       
        <Droppable droppableId={id}>
        {
            (provided) => (
        <div className="div" ref={provided.innerRef} {...provided.droppableProps}>
        <h1>In Progress</h1>
        {
            list.map((val,index) => (
                <Draggable draggableId={val.id} index={index} key={index}>
                    {
                        (provided)=>(
                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="list">{val.content}</li>

                        )
                    }
           
            </Draggable> 
            ))
        }
        {provided.placeholder}
        </div>
            )
        }

    </Droppable>
                )
          
        
    
}

export default InProgress
