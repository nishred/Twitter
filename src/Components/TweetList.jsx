import React from "react";
import "../CSS/TweetList.css"
import Tweet from "./Tweet";


const TweetList = ({tweets,handleUpdateTweet}) => {

    return (

     <ul>
     {tweets.map((tweet) => {
      return (<Tweet key={tweet.id} content={tweet.content} likes={tweet.likes} createdAt={tweet.createdAt} id = {tweet.id} handleUpdateTweet = {handleUpdateTweet}  />)
     })}     
     </ul> 


    )


}

export default TweetList

