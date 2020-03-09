import React, {useState} from 'react';

const RegistrationForm = props => {
    const [state, setState] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        confirmPW :'',
        submitted : false
    })
    const onChangeHandler = event =>{
        event.preventDefault();
        setState({
            ...state,
            [event.target.name]:event.target.value
        })
    }
    let message;
    if(state.submitted){
        message=<h1>You have submitted the form</h1>;
    }else{
        message=<h1>You have not yet submitted the form</h1>;
    }
    const onSubmitHandler = event =>{
        event.preventDefault();
        console.log(state);
        setState({
            submitted : true,
        })
        
    }
    return(
        <>
        {message}
            <form onSubmit = { onSubmitHandler }>
                <label>First Name:</label><br></br>
                <input type = "text" name = "firstName" onChange = { onChangeHandler }/><br></br>
                {state.firstName.length < 2 ?<p>First name must be at least 2 letters</p> : "" }
                <label>Last Name:</label><br></br>
                <input type = "text" name = "lastName" onChange = { onChangeHandler }/><br></br>
                {state.lastName.length < 2 ?<p>Last name must be at least 2 letters</p> : "" }
                <label>Email:</label><br></br>
                <input type = "email" name = "email" onChange = { onChangeHandler }/><br></br>
                {state.email.length < 5 ?<p>Name must be at least 5 letters</p> : "" }
                <label>Password:</label><br></br>
                <input type = "password" name = "password" onChange = { onChangeHandler }/><br></br>
                {state.password.length < 8 ?<p>Password must be at least 8 characters</p> : "" }
                <label>Confirm Password:</label><br></br>
                <input type = "password" name = "confirmPW" onChange = { onChangeHandler }/><br></br>
                {state.password != state.confirmPW ? <p>Passwords must match!</p>: ""}
                <input  type = "submit"/>
            </form>
            <h1>Current Information</h1>
                <p>
                    First Name:  {state.firstName}
                </p>
                <p>
                    Last Name: {state.lastName}
                </p>
                <p>
                    Email: {state.email}
                </p>
                <p>
                    Password: {state.password}
                </p>
                <p>
                    Confirm Password: {state.confirmPW}
                </p> 
        </>
    )
}


export default RegistrationForm;