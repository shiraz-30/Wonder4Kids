import React from "react"

function Login(){
    const flexContainer={
    display:"flex"
    }

    const blue = {
        backgroundColor: "Blue",
        // display: "inline-flex",
        padding: "0.5rem",
        width: "50vw",
        height: "50vh",
    }
    const purple = {
        backgroundColor: "purple",
        padding: "0.5rem",
        // display: "flex",
        width: "50vw",
        height: "50vh",
    }
    const orange = {
        padding: "0.5rem",
        backgroundColor: "orange",
        // display: "flex",
        width: "50vw",
        height: "50vh",
    }
    const green = {
        padding: "0.5rem",
        backgroundColor: "green",
        // display: "flex",
        width: "50vw",
        height: "50vh",
    }
    
    const darkBlue={
        position : "Absolute",
    top:"15%",
    left:"25%",
        padding: "0.5rem",
        backgroundColor: "#1A2146",
        // display: "flex",
        width: "50%",
        height: "70%"
    }

    return(
    <>
        <div style={darkBlue}></div>
        <div className ="flexContainer" style = {flexContainer}>
            <div  style={blue}></div>
            <div  style={green}></div>        
        </div>
        <div className ="flexContainer" style = {flexContainer}>
            <div  style={purple}></div>
            <div  style={orange}></div>
        </div>

    </>

    )
}

export default Login
