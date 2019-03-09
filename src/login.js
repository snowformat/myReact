import React from  "react";
import axios from "axios";
import { withRouter } from "react-router-dom";


// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            uname: "",
            pwd: ""
        }
    }
    handleUname = (event) => {
        this.setState ({
           uname: event.target.value
        })
    }
    handlePwd = (event) => {
        this.setState({
            pwd: event.target.value
        })
    }
    handleSubmit = () => {
        const {history}  = this.props;
        // console.log(this.state.uname, this.state.pwd)
        axios.post("http://47.96.21.88:8086/users/login", {
            uname: this.state.uname,
            pwd: this.state.pwd 
        }).then( data => {
            // console.log(data.data)
            if(data.meta.status === 200) {
                localStorage.setItem('mytoken',data.data.token)
                history.push('/home')
            }
        })
    }
    render() {
        return (
            <div>
                <div>登录</div>
                <div>
                    用户名：<input type="text" name="uname" value={this.state.uname} onChange={this.handleUname}/>
                </div>
                <div>
                    密码：<input type="text" name="pwd" value={this.state.pwd} onChange={this.handlePwd} />
                </div>
                <button onClick={this.handleSubmit}>提交</button>
            </div>
        )
    }
}

export default withRouter(Login);