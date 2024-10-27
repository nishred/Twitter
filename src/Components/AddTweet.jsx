import React, { useState } from "react";
import "../CSS/AddTweet.css"


const AddTweet = ({handleAddTweet}) => {

  
  const [tweet,setTweet] = useState("")

   return (

    <form onSubmit={(e) => {

      e.preventDefault()

      handleAddTweet(tweet)

      setTweet("")


    }} >
    <textarea value={tweet} placeholder="Add a tweet" onChange={(e) => {

       setTweet(e.target.value)
         
    }} />

    <button className="submit-btn"  type="submit">Tweet</button>
    </form>
   )


}

export default React.memo(AddTweet)

