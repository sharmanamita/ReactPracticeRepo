import React, { Fragment } from "react";

export const FragmentsEx = () => {

  const title = "Walking Dead";
  const rating = "3";
  const age = 16;
  const summary = `The Walking Dead is a post-apocalyptic horror series about Deputy Sheriff Rick 
  Grimes waking from a coma to find the world overrun by "walkers" (zombies), forcing him 
  and other survivors to navigate a harsh world while battling the undead and human threats to 
  find a safe haven and rebuild society. The story follows Rick's journey to reunite with his 
  family and his growth from a struggling leader to the visionary figure of the "living" community.`;

  return (
    // As JSX does not allows you to return multiple objects at same time  like div, p, h2 etc. 
    // it needs wrapper div which creates extra element in DOM.
    // this is where fragments comes into picture which bundles the elemenst without adding extra div in DOM.
    // ways to do

    // 1. add <></>
    // <>
    //   <img src='TheWalkingDeadPoster.jpg' alt='TheWalkingDeadPoster.jpg' width={'20%'} height={'40%'}></img>
    //   <h2>Title: Walking Dead</h2>
    //   <h3>Rating: 3</h3>
    //   <p>Summary: The Walking Dead is a post-apocalyptic horror series about Deputy Sheriff Rick Grimes waking from a coma to find the world overrun by "walkers" (zombies), forcing him and other survivors to navigate a harsh world while battling the undead and human threats to find a safe haven and rebuild society. The story follows Rick's journey to reunite with his family and his growth from a struggling leader to the visionary figure of the "living" community. </p>
    // </>

    // 2. <React.Fragment></React.Fragment> or <Fragment></Fragment>
    <Fragment>
      <img src='TheWalkingDeadPoster.jpg' alt='TheWalkingDeadPoster.jpg' width={'20%'} height={'40%'}></img>
      <h2>Title: {title}</h2>
      <h3>Rating: {rating}</h3>
      <p>Summary: {summary}</p>
      <button>{age> 18 ? "Watch Now": "Not Available"}</button>
    </Fragment>    
  )
}

// export default FragmentsEx 

