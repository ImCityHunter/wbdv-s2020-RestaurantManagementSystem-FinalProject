import React from "react";
class Home extends React.Component {
    render(){
        return(
            <div className={"container"}>
                <h1 className={"text-center"}> Welcome To Our Project </h1>
                <div>
                    <a href={"/register"}>Register</a>
                </div>
                <div>
                    <a href={"/login"}>login</a>
                </div>
            </div>
        )
    }
}

export default Home;
