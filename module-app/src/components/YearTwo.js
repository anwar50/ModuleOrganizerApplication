import React from "react"
import axios from "axios"
import ModuleItems from "./ModuleItems"
import { Layout, Breadcrumb} from "antd";
const {Content} = Layout

class YearTwo extends React.Component{
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
        axios.get('http://localhost:8080/api/secondyears').then((res) => {
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
    render(){
        return(
        <Layout >
            <Content style={{padding: "0 50px"}}>
                <Breadcrumb style={{margin: "16px", textAlign: "center"}}>
                    <Breadcrumb.Item style={{borderBottomColor: "red", color:"red", size:"30px"}}>Year 2</Breadcrumb.Item>
                </Breadcrumb>
                <div id="mazSection" style={{background: "#fff", padding: 24, minHeight: 1000, textAlign: "center"}}>
                    <ModuleItems 
                        name = {this.state.name[0]}
                        year = {this.state.year[0]}
                        coursework = {this.state.coursework[0]}
                        exam = {this.state.exam[0]}
                        />
                    <br />
                    <ModuleItems 
                        name = {this.state.name[1]}
                        year = {this.state.year[1]}
                        coursework = {this.state.coursework[1]}
                        exam = {this.state.exam[1]}
                        />
                    <br />
                    <ModuleItems 
                        name = {this.state.name[2]}
                        year = {this.state.year[2]}
                        coursework = {this.state.coursework[2]}
                        exam = {this.state.exam[2]}
                        />
                    <br />
                    <ModuleItems 
                        name = {this.state.name[3]}
                        year = {this.state.year[3]}
                        coursework = {this.state.coursework[3]}
                        exam = {this.state.exam[3]}
                        />
                    <br />
                    <ModuleItems 
                        name = {this.state.name[4]}
                        year = {this.state.year[4]}
                        coursework = {this.state.coursework[4]}
                        exam = {this.state.exam[4]}
                        />
                    <br />
                    <ModuleItems 
                        name = {this.state.name[5]}
                        year = {this.state.year[5]}
                        coursework = {this.state.coursework[5]}
                        exam = {this.state.exam[5]}
                        />
                    <br />
                    <ModuleItems 
                        name = {this.state.name[6]}
                        year = {this.state.year[6]}
                        coursework = {this.state.coursework[6]}
                        exam = {this.state.exam[6]}
                        />
                    <br />
                    <ModuleItems 
                        name = {this.state.name[7]}
                        year = {this.state.year[7]}
                        coursework = {this.state.coursework[7]}
                        exam = {this.state.exam[7]}
                        />
                    <br />
                </div>
            </Content>
        </Layout>
        )
    }
}


export default YearTwo