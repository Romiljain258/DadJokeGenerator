import React from "react";
import axios from "axios";
import { Button,Container, Row, Col } from 'reactstrap';

class JokeGenerator extends React.Component{
constructor(){
    super();
    this.state={
        setup:"",
        punchline:"",
        showPunchline:false,
    };
}

  componentDidMount(){
    this.generateJoke();
  }

  showPunchline=()=>{
      this.setState({
        showPunchline:true,
      })
  }

  generateJoke=()=>{
    axios.get("https://official-joke-api.appspot.com/random_joke")
    .then((result)=>{
        let {setup,punchline}=result.data;
        this.setState({
          setup:setup,
          punchline:punchline,
          showPunchline:false,
        })
    })
    .catch((error)=>{
        console.log("error");
    })
  }
  render(){
      return (
        <div id="block">
         
          <div id="text1">{this.state.setup}</div>
          {this.state.showPunchline ?<div id="text2">{this.state.punchline}</div>:null}
          <Button id="btn1" color="primary" onClick={this.showPunchline}>Tell Me</Button>
          <button  id="btn2" onClick={this.generateJoke}>Generate Another Joke</button>
       
          </div>
      );
  }
}
export default JokeGenerator;