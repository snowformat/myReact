import React from "react";
import {Input} from "semantic-ui-react"
// import "semantic-ui-css/semantic.min.css"
import ImageGallery from 'react-image-gallery';
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import "./home.css";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           list: []
        }
    }
    componentDidMount() {
        axios.post("homes/swipe").then(data => {
            if(data.meta.status === 200) {
                this.setState({
                    list: data.data.list
                })
            }
        })
    }
    render () {
        // const images = [
        //     {
        //       original: 'http://lorempixel.com/1000/600/nature/1/'
        //     },
        //     {
        //       original: 'http://lorempixel.com/1000/600/nature/2/'
        //     },
        //     {
        //       original: 'http://lorempixel.com/1000/600/nature/3/'
        //     }
        //   ]
        return (
            <div className="main-content">
                <div className="main-topbar">
                    <Input icon={{ name: 'search', circular: true, link: true }} placeholder='Search...' className="search-input" />
                </div>
                <div>
                    <ImageGallery items={this.state.list} showThumbnails={false}/> 
                </div>
            </div>
        )
    }
}

export default Home;