import { useState } from "react"
import "../CSS/Tweet.css"

const Tweet  = ({content,createdAt,likes,id,handleUpdateTweet}) => {

   const [editable,setEditable] = useState(false)

   const [value,setValue] = useState("")
  

   return (

      <li>
      {
      editable?
      (
       
       <textarea className="edit-area" value={value} placeholder="edit tweet" onChange={(e) => {

           setValue(e.target.value)

       }}/>


      ):(<h1>{content}</h1>)
      }
      <div className="likes-date-wrapper">
      <div>
      Likes : {likes}
      </div>``
      <div>
      {createdAt.toString()}
      </div>
      <button onClick={() => {

       if(editable)
       {
    
          handleUpdateTweet(value,id)
          setValue("")
          
          setEditable(false)

       }
       else{

        setEditable(true)

       }


      }}>
      {editable?("Add"):("Edit")}</button>
      </div>
      </li> 

   )

}

export default Tweet