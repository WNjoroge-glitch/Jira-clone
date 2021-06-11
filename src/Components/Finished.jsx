import React from 'react'
import { Droppable,Draggable } from 'react-beautiful-dnd'
import Todo from './Todo'

function Finished({id,list}) {
    return (
       
        <Droppable droppableId={id}>
            {
                (provided) => (
            <div className="div" ref={provided.innerRef} {...provided.droppableProps}>
            <h1>Finished</h1>
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

export default Finished
