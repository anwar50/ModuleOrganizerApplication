import React from "react"
import axios from 'axios'
import ModuleItems from "./ModuleItems";
import 'antd/dist/antd.css';
import "../App.css"
import "../wall.png"
import {Link} from "react-router-dom";
import {Layout, Menu, Breadcrumb} from "antd";
import { Module } from "module";
const {Header, Footer, Content} = Layout;


class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name: [],
            year: [],
            coursework: [],
            exam: []
        }
    }
    componentDidMount = () => {
        axios.get('http://localhost:8080/api/modules').then((res) => {
            for(var i=0; i< res.data.length; i++)
            this.setState({
                name: [...this.state.name, res.data[i].name],
                year: [...this.state.year, res.data[i].year],
                coursework: [...this.state.coursework, res.data[i].coursework],
                exam: [...this.state.exam, res.data[i].exam]
            });
            
        }).catch((err) => {
            console.log(err);
        })
        
    }
    Style = {
        margin: '10px',
        padding: '10px'
      };
    backgroundStyle = {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    };
    render(){
        return(
            
                // <Header>
                // <Menu
                //     theme ="dark"
                //     style={{lineHeight:'64px', textAlign:'center'}}
                // >
                //     <h1> Module Menu </h1>
                // </Menu>
                // </Header>
                // <div className="ui list" style={this.Style}>
                //     <div className="content">
                //         <h1><a className="header" href="d">{this.state.name[0]}</a></h1>
                //         <div className="description"><h3>year :{this.state.year[0]}</h3></div>
                //         <div className="description"><h3>coursework worth :{this.state.coursework[0]} %</h3></div>
                //         <div className="description"><h3>exam worth :{this.state.exam[0]} %</h3></div>
                //     </div>
                // </div>
    
                <Layout>
                    <Header>
                        <div className="logo"/>
                        <Menu theme="dark" mode="horizontal"  style={{lineHeight: '55px', textAlign: "left"}}>
                            <Menu.Item key="1" ><Link to="./YearOne">Year 1</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="./YearTwo">Year 2</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="./YearThree">Year 3</Link></Menu.Item>        
                        </Menu>
                    </Header>
                    <Content  style={{padding: "0 50px"}} style={this.backgroundStyle}>
                        <Breadcrumb style={{margin: "16px", textAlign: "center"}}>
                            <Link to="./ModuleMenu"><Breadcrumb.Item style={{borderBottomColor: "red", color:"red", size:"30px"}}>Module Menu</Breadcrumb.Item></Link>
                        </Breadcrumb>
                        <div  id="mazSection" className="back" style={{ padding: 24, minHeight: 1000, textAlign: "center"}}>

                            <h1> Welcome to my module organizer 
                                <br />
                                An insight to all of my modules !
                                <br />
                                Have fun !
                            </h1>
                            
                        </div>
                    </Content>
                </Layout>
        ) 
        
    }

}

export default App