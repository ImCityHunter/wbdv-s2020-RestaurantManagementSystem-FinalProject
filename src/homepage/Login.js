import React from 'react';

class Login extends React.Component{
    login = () => {
        fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify((this.state.user)),
            headers:{
                'content-type': 'application/json'
            },
            credentials: "include"
        }).then(response => response.json()).then(user=>this.props.history.push('/profile'));
    }


    state = {
        user:{
            username:'',
            password: '',
            id:''
        }
    }
    render(){
        return(
            <div>
                <h1>login</h1>
                <input placeholder="username" value={this.state.user.username} onChange={(e)=>{
                    let username = e.target.value;
                    this.setState(prevState=>({
                        user:{
                            ...prevState.user,
                            username:username
                        }}))}}/>
                <input placeholder="password" value={this.state.user.password} onChange={(e)=>{
                    let password = e.target.value;
                    this.setState(prevState=>({
                        user:{
                            ...prevState.user,
                            password:password
                        }}))}}/>
                <button onClick={()=>this.login()}>login</button>
            </div>
        )
    }
}
export default Login;
