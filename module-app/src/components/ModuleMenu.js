import React from "react";
import 'antd/dist/antd.css';
import "../App.css"
import "../wall.png"
import {Link} from "react-router-dom";
import {Layout, Menu, Breadcrumb} from "antd";
import { Module } from "module";
const {Header, Footer, Content} = Layout;



class ModuleMenu extends React.Component{
    render(){
        return(
            <Layout>
                <Content>
                <div  id = "mazSection" className="back" style={{ padding: 24, minHeight: 1000, textAlign: "center", color:"blue"}}>

                            <h1>
                                Year 1
                            </h1>

                            Automata and Formal Languages<br/>
                            Computer Systems and Networks<br/>
                            Fundamentals of Web Technology<br/>
                            Information Systems Analysis<br/>
                            Logic and Discrete Structures<br/>
                            Object Oriented Programming<br/>
                            Procedural Programming<br/>
                            Professional and Research Practice

                            <div style={{textAlign:"center", width:"250px"}}>
                                <h1>
                                    Year 2
                                </h1>

                                Algorithms and Data Structures<br/>
                                Database Systems<br/>
                                Graphical User Interfaces<br/>
                                Internet Protocols and Applications<br/>
                                Operating Systems<br/>
                                Probability and Matrices<br/>
                                Software Engineering<br/>
                                Software Engineering Project<br/>
                            </div>
                            <div style={{textAlign:"center", marginTop:"-220px", marginLeft:"900px"}}>
                                <h1>
                                    Year 3
                                </h1>

                                Web Programming<br/>
                                Big Data Processing<br/>
                                Computability, Complexity and Algorithms<br/>
                                Interaction Design<br/>
                                Security Engineering<br/>
                                Multi-platform Game Development<br/>
                            </div>
                
            </div>
                </Content>
            </Layout>
        )
    }
}








export default ModuleMenu
