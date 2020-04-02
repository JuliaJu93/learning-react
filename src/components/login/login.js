import React from "react";
import Error from "../error";
import { 
  Redirect,
} from "react-router-dom";


import "./login.css";

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        password: '',
        showUserError: false,
        authorization: false,
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
      const {name, password, showUserError} = this.state;

      if ((name !== prevState.name || password !== prevState.password) && showUserError) {
        this.setState({showUserError: false});
      }
    };
  
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
      event.preventDefault();
        if (this.state.name === 'толстая' && this.state.password === 'перепелка') {
          localStorage.setItem('user', 'true');
          this.setState({authorization: true});
        }
        else {
          this.setState({showUserError: true});
    };
    }

    render() {
      const { showUserError } = this.state;
      const { authorization } = this.state;
    return (
    <div>  
    {showUserError && <Error />}
    {authorization && <Redirect to="/profile" />} 
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="name">Имя</label>
      <input type="text" id="name" name ="name" value={this.state.name} onChange={this.handleChange}></input>

      <label htmlFor="password">Пароль</label>
      <input type="password" id="password" name ="password" value={this.state.password} onChange={this.handleChange}></input>
        
      <input type="submit" class="send"></input>
    </form>
    </div>
    );
};
};

export default Login;