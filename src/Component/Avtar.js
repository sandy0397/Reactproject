import React, { Component } from "react";

import 'tachyons';
import Avtarlist from "./Avtarlist";

    class Avtar extends Component{
        constructor(){
            super();
            this.state = {
                name : "Welcome to Avtar World"
            }
        }
            namechange(){
                this.setState({
                    name : "Welcome to my Portfolio Website" 
                })
            }

        render() {
            const Avtarlistarray = [
        
                {
                    id:1,
                    image:"Sandeep",
                    name:"Sandeep",
                    work:"Web Developer"
                },
                {
                    id:2,
                    image:"Ashish",
                    name:"Ashish",
                    work:"Digital Marketing"
                },
                {
                    id:3,
                    image:"kapil",
                    name:"kapil",
                    work:"Web Designer"
                },
                {
                    id:4,
                    image:"Jatin",
                    name:"Jatin",
                    work:"Digital Marketing"
                },
                {
                    id:5,
                    image:"Sandeep",
                    name:"Sandeep",
                    work:"Web Developer"
                },
                {
                    id:6,
                    image:"Ashish",
                    name:"Ashish",
                    work:"Digital Marketing"
                },
                {
                    id:7,
                    image:"kapil",
                    name:"kapil",
                    work:"Web Designer"
                },
                {
                    id:8,
                    image:"Jatin",
                    name:"Jatin",
                    work:"Digital Marketing"
                },
                {
                    id:9,
                    image:"Sandeep",
                    name:"Sandeep",
                    work:"Web Developer"
                },
                {
                    id:10,
                    image:"Ashish",
                    name:"Ashish",
                    work:"Digital Marketing"
                },
                {
                    id:11,
                    image:"kapil",
                    name:"kapil",
                    work:"Web Designer"
                },
                {
                    id:12,
                    image:"Jatin",
                    name:"Jatin",
                    work:"Digital Marketing"
                }
        
        
            ]
            const arrayavtarcard = Avtarlistarray.map( (avtarcard, i) => {
                return <Avtarlist key={i} id={Avtarlistarray[i].name}
                                    image={Avtarlistarray[i].image}
                                    name={Avtarlistarray[i].name}
                                    work={Avtarlistarray[i].work} />
            })
            
            return(
                <div id="avtar" className="mainpage pt-5">
                    <h1 className="welcome"> {this.state.name} </h1> 
                    <div className="text-center">
                        {arrayavtarcard} 
                    </div>
                    <div className="p-5 text-center">
                        <button onClick = { () => this.namechange() } className="subscribe">  Subscribe </button>
                    </div> 
                     
                </div>         
            
            )
        }
    }

    

export default Avtar;
