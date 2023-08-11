import React, { useState } from "react";



const ToDoList =() =>{
    const [num,setNum] = useState(0);

 const incNum = () =>{
    if(num<20){
        setNum(num+1);
    }
    else{
        alert("Jyada mt kro bhai fat jayegi ")
    }
 };

 const decNum =()=>{
    if(num>0){
        setNum(num-1);
    }
    else{
        setNum(0);
        alert("you can not decrese furthor ")
    }
 };
    return(
        <>
        <div className="main_div">
            <div className="center_div">

                <h1>{num}</h1>
                <div className="btn_div">
                    <button onClick={decNum}>DNC--</button>
                    <button onClick={incNum}>INC++</button>
                   
                </div>
            </div>
        </div>
        </>
    );
};


export default ToDoList;