// Code Keypad Component Here
import React from "react";



function Keypad (){
    function handlChange(event){
        console.log("Entering password...")
    }
    return (
        <>
            <form>
                <input type="password"
                onChange={handlChange} />
            </form>
        </>
    )
}

export default Keypad;