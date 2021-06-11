import React, {useState,useEffect} from 'react'
import './App.css';
import Todo from './Components/Todo';
import InProgress from './Components/InProgress';
import Finished from './Components/Finished';
import {DragDropContext} from 'react-beautiful-dnd';
import Data from './Data';
import uuid from 'react-uuid';



function App() {

  const [data,setData] = useState([])
  const [listItem,setListItem] = useState([])
  const [listItem1,setListItem1] = useState([])
  const [value,setValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    let newData = {id:uuid(),content:value}
    let newDatas = [...Data,newData]
    setData(newDatas)
    
}

  useEffect(() => {
    setData(Data)
  }, [])

const dragEnd = (result) => {
   const { destination, source} = result
  
  
  
  const start = source.droppableId
  const finish = destination.droppableId
  if (start === finish){
    const items = Array.from(data)
  const [reorderedItem] = items.splice(source.index, 1)
  items.splice(destination.index, 0, reorderedItem);
  setData(items)
  console.log(`index:${source.index},finish:${finish}`)

  
  } else {
    if(start === "1"){
    const startItems = Array.from(data)
    const [firstColumn] = startItems.splice(source.index,1)
    setData(startItems)
   

    let newList = listItem.concat(firstColumn)
    let listItem2 = listItem1.concat(firstColumn)
    if(finish === "2"){
      setListItem(newList)
    } else {
      setListItem1(listItem2)
    }
    
    
   
    } else if(start === "2") {
      const startItems = Array.from(listItem)
      const [item] = startItems.splice(source.index,1)
      setListItem(startItems)
      let newList = data.concat(item)
      let newList1 = listItem1.concat(item)

      if(finish === "1"){
        setData(newList)
      } else {
        setListItem1(newList1)
      }

     


    } else {
      const startItems = Array.from(listItem1)
      const [item] = startItems.splice(source.index,1)
      setListItem1(startItems)

      let newList = data.concat(item)
      let newList1 = listItem.concat(item)

      if(finish === "1"){
        setData(newList)

      } else {
        setListItem(newList1)

      }

    }
   
    

    
    

  }
  //moving from one column to another

  

  

  


   
}

  return (
    
    <DragDropContext onDragEnd={dragEnd}>
    <div className="App">
    
    <Todo id="1" data={data} />
     <InProgress id="2" list={listItem} />
     <Finished id="3" list={listItem1}/>
     <div>
            <h1>Add Task</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="add task" value={value} onChange={(e) => setValue(e.target.value)}/>
                <input type="submit" value="Submit"/>
            </form>
           
        </div>
     
    </div>
    </DragDropContext>
    
    
  );
}

export default App;
