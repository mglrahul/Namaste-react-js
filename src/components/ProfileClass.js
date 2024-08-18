import React from "react";
import ChildClass from "./ChildClass";

class ProfileClass extends React.Component {
    constructor(props) {
        super(props)
        console.log("parent - constructor called")
    }

    async componentDidMount(){
        console.log("parent - componentDidMount called")
        this.timer = setInterval(() => {
            console.log("setinterval called")
        }, 1000);
    }

    componentDidUpdate(){
        console.log("parent - componentDidUpdate called")
    }

    componentWillUnmount(){
        console.log("parent - componentWillUnmount called")
        clearInterval(this.timer)
    }

    render() {
        console.log("parent - render called")
        return (
            <div className="profileClass">
                <h1>profileClass page</h1>
                {/* <h2><img src={this.state.userInfo.avatar_url} alt="avtar" /></h2>
                <h2>name: {this.state.userInfo.name}</h2>
                <h2>location: {this.state.userInfo.location}</h2> */}
                <ChildClass test1={'test1'} test2={'test2'}/>
            </div>
        )
    }
}

export default ProfileClass;
