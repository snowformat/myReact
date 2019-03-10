import React from "react";
import {Grid,Icon} from "semantic-ui-react";
import {Route, Link } from "react-router-dom"
import "./main.css"
import Home from "./home/home.js"
import Chat from "./chat/chat.js"
import Info from "./info/info.js"
import My from "./my/my.js"

class Menu extends React.Component {
    render() {
        const {to, current,titleName, iconName} = this.props;
        return (
            <div>
                <Route
                    path={to}
                    exact={current}
                    children={({ match }) => (
                        <div className={`placeholder ${match?"active":""}`}>
                            <Link to={to}>
                                <div>
                                    <Icon className="menu-icon" name={iconName} />
                                    <div className="menu-content">{titleName}</div>
                                </div>
                            </Link>
                        </div>
                    )}
                />
            </div>
        )
    }
}
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="main-container">
                    <Route exact path="/home" component={Home} />
                    <Route path="/home/chat" component={Chat} />
                    <Route path="/home/info" component={Info} />
                    <Route path="/home/my" component={My} />
                </div>
                <div className="main-menu">
                   <Grid centered padded>
                        <Grid.Row columns={4}>
                            <Grid.Column>
                                <Menu to="/home" current={true} titleName="主页" iconName="address book"></Menu>
                            </Grid.Column>
                            <Grid.Column>
                                <Menu to="/home/chat" current={true} titleName="微聊" iconName="coffee"></Menu>
                            </Grid.Column>
                            <Grid.Column>
                                <Menu to="/home/info" current={true} titleName="咨询" iconName="certificate"></Menu>
                            </Grid.Column>
                            <Grid.Column>
                                <Menu to="/home/my" current={true} titleName="我的" iconName="address card"></Menu>
                            </Grid.Column>
                        </Grid.Row>
                   </Grid>
                </div>
            </div>
        )
    }
}

export default Main;