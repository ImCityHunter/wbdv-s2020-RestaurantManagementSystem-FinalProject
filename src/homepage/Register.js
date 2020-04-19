import React from 'react';

class Register extends React.Component{
    register = ()=> {
        fetch('http://localhost:8080/register', {
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
            validPassword: '',
            id:'', //do not use this
            type: ''
        }
    }
    render(){
        return(
            <div className={"container"}>
                <h1 className={"text-center"}>
                    Register
                </h1>


                <form>
                    <div className="form-group row">
                        <label for={this.state.user.username} className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input className={"form-control"} placeholder="username" value={this.state.user.username} onChange={(e)=>{
                                let username = e.target.value;
                                this.setState(prevState=>({
                                    user:{
                                        ...prevState.user,
                                        username:username
                                    }}))}}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for={this.state.user.password} className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input className={"form-control"} placeholder="password" value={this.state.user.password} onChange={(e)=>{
                                let password = e.target.value;
                                this.setState(prevState=>({
                                    user:{
                                        ...prevState.user,
                                        password:password
                                    }}))}}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor={this.state.user.validPassword} className="col-sm-2 col-form-label">Valid Password</label>
                        <div className="col-sm-10">
                            <input className={"form-control"} placeholder="valid password" value={this.state.user.validPassword}
                                   onChange={(e) => {
                                       let validPassword = e.target.value;
                                       this.setState(prevState => ({
                                           user: {
                                               ...prevState.user,
                                               validPassword: validPassword
                                           }
                                       }))
                                   }}/>
                        </div>
                    </div>
                    <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                                           value="option1" checked/>
                                        <label className="form-check-label" htmlFor="gridRadios1">
                                            First radio
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                           value="option2"/>
                                        <label className="form-check-label" htmlFor="gridRadios2">
                                            Second radio
                                        </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group row">
                        <div className="col-sm-2">Checkbox</div>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Example checkbox
                                    </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </form>



                <button className={"btn btn-primary"} onClick={()=>this.register()}>
                    Register
                </button>
            </div>

        )
    }
}
export default Register;
