import React from "react";
import {Grid,Icon} from "semantic-ui-react";
import {Route, Link } from "react-router-dom"
import "./main.css"

class Menu extends React.Component {
    render() {
        const {to, current} = this.props;
        return (
            <div>
                <Route
                    path={to}
                    exact={current}
                    children={({ match }) => (
                        <div className={`placeholder ${match ? 'active': ''}`}>
                            <Link to={to}>
                                <div>
                                    <Icon className="menu-icon" name='download' />
                                    <div className="menu-content">主页</div>
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
                                <Menu to="/home" current={true}></Menu>
                            </Grid.Column>
                            <Grid.Column>
                                <Menu to="/home/chat" current={true}></Menu>
                            </Grid.Column>
                            <Grid.Column>
                                <Menu to="/home/info" current={true}></Menu>
                            </Grid.Column>
                            <Grid.Column>
                                <Menu to="/home/my" current={true}></Menu>
                            </Grid.Column>
                        </Grid.Row>
                   </Grid>
                </div>
            </div>
        )
    }
}
const Home = () => {
    return <div>Home</div>
}
const Chat = () => {
    return <div>Chat</div>
}
const Info = () => {
    return <div>Info</div>
}
const My = () => {
    return <div>My</div>
}
export default Main;