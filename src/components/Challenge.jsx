import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function Challenge({ title, targetTime }) {
    const timer=useRef();
    const dialog=useRef();
    // const [timerExpired,setTimerExpired]=useState(false);
    // const [timerStarted,setTimerStarted]=useState(false);
     const [timeRemain,setTimeRemain]=useState(targetTime*1000);
     const activeTimer=timeRemain>0&&timeRemain<targetTime*1000;
     if(timeRemain<=0){
      handleStop();
     }
    function handleStart(){
      
        timer.current=setInterval(()=>{
           setTimeRemain(prevTimeRemain=>prevTimeRemain-50);
           
            
        },50)
    }
    function handleReset(){
        setTimeRemain(targetTime*1000);
    }
    function handleStop(){
        clearInterval(timer.current)
        dialog.current.open()
       
    }
  return (
    <>
     <ResultModal ref={dialog}  targetTime={targetTime} timeRemain={timeRemain} onReset={handleReset}  />
    <section className="challenge">
      <h2>{title}</h2>
      
      <p className="challenge-time">
        {targetTime} Second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={activeTimer?handleStop:handleStart}>{activeTimer?"Stop":"Start"}</button>
      </p>
      <p className={activeTimer?"active":undefined}>{activeTimer?"time is running...":""}</p>
    </section>
    </> 
  );
}
