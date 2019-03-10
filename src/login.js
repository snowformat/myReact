import React from  "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Form} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./login.css";
class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            uname: "",
            pwd: ""
        }
    }
    handleChange = (event) => {
        console.log(event.target)
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = () => {
        const {history}  = this.props;
        // console.log(this.state.uname, this.state.pwd)
        axios.post("users/login", {
            uname: this.state.uname,
            pwd: this.state.pwd 
        }).then( data => {
            // console.log(data.data)
            if(data.meta. status === 200) {
                localStorage.setItem('mytoken',data.data.token)
                history.push('/home')
            }
        })
    }
    render() {
        const {uname, pwd} = this.state;
        return (
            <div className="login-container">
                <div className="login-title">登录</div>
                <div className="login-form">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Input
                           icon="user"
                           iconPosition="left"
                           required
                           size="big"
                           name="uname"
                           value={uname}
                           onChange={this.handleChange}
                           placeholder="请输入用户名......"
                        />
                        <Form.Input
                           icon="lock"
                           required
                           type="password"
                           name="pwd"
                           iconPosition="left"
                           value={pwd}
                           onChange={this.handleChange}
                           size="big"
                           placeholder="请输入密码....."
                        />
                        <Form.Button positive content="登录" />
                    </Form>
                </div>
                
            </div>
        )
    }
}

export default withRouter(Login);