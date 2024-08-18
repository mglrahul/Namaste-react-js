import React from "react";

class ChildClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userInfo: {}
        }
        console.log("child - constructor called")
    }

    async componentDidMount(){
        console.log("child - componentDidMount called")
        const data = await fetch(`https://api.github.com/users/mglrahul`)
        const dataRes = await data.json();
        console.log("componentDidMount", dataRes)
        this.setState({userInfo: dataRes})
    }

    componentDidUpdate(){
        console.log("child - componentDidUpdate called")
    }

    componentWillUnmount(){
        console.log("child - componentWillUnmount called")
    }

    render(){
        console.log("child - render called")
        return(
            <div className="child-cla">
                <h1>Child class</h1>
                <h2><img src={this.state.userInfo.avatar_url} alt="avtar" /></h2>
                <h2>name: {this.state.userInfo.name}</h2>
                <h2>location: {this.state.userInfo.location}</h2>
                <h2>Props test1: {this.props.test1}</h2>
                <h2>Props test2: {this.props.test2}</h2>
            </div>
        )
    }
}

export default ChildClass;