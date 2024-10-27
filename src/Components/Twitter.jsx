import React, { useCallback, useState } from "react";
import TweetList from "./TweetList";
import AddTweet from "./AddTweet";
import "../CSS/Twitter.css"


const dummyTweets = [

{id : 0, content : "Cristiano Ronaldo",createdAt: new Date(),likes : 9},
{id : 1, content : "Lionel Messi",createdAt: new Date(),likes :10},
{id : 2, content : "Neymar jr",createdAt: new Date(),likes : 3}


]


const Twitter = () => {

   const [tweets,setTweets] = useState(dummyTweets)

   const [showFilter,setShowFilter] =useState(false)

   const [selectValue,setSelectValue] = useState("date") 


   function handleAddTweet(content)
   {
 
    
      setTweets((tweets) => {

      const nextTweets = [...tweets]

      nextTweets.push({
        id : tweets.length,
        content : content,
        likes : Math.floor(Math.random()*10),
        createdAt  : new Date()
      })


      return nextTweets
 

      })

   }


   const memoizedHandleAddTweet = useCallback(handleAddTweet,[])


   function handleUpdateTweet(content,id)
   {

       const nextTweets = tweets.map((tweet) => {

          if(tweet.id === id)
          {
  
             const nextTweet = {...tweet}
             nextTweet.content = content

             return nextTweet
          }
          else
          return tweet
   

       })


       setTweets(nextTweets)
      
  

   }

   function handleSortTweets(sortBy)
   {

       const nextTweets = [...tweets]
       
       nextTweets.sort((t1,t2) => {

         return t2[sortBy] - t1[sortBy]

       })
 
      

       setTweets(nextTweets)


   }

   return (

    <>
     
     <AddTweet handleAddTweet = {memoizedHandleAddTweet}/>
     <div className="filter-sort-wrapper">
     <button onClick={() => {

        if(!showFilter)
        {
            setShowFilter(true)
        }
        else
        {
            handleSortTweets(selectValue) 
            setShowFilter(false)
            setSelectValue("date")
   
        }


     }} className="sort-btn">{(showFilter)?"Sort":"Filter By"}</button>
     {showFilter && (

       <select value={selectValue} onChange={(e) => {

         setSelectValue(e.target.value)

       }}>
       <option value="createdAt">Date</option>
       <option value="content">Content</option> 
       <option value="likes">Likes</option>
       </select>

     )}
     </div>
     <TweetList tweets={tweets} handleUpdateTweet = {handleUpdateTweet} />
     </>

   )


}

export default Twitter