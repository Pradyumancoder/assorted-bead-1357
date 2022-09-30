import { Button, Stack } from "@chakra-ui/react";
import  { Component } from "react";
// import { Button } from "./Button";
import { MenuItems } from "./MenuItems";
import "./Navbar.css"



class Navbar extends Component {
    state ={clicked:false}

    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return (
            <nav className="NavbarItems">
              <h1 className="navbar-logo" > <img  src="https://mailtrap.io/wp-content/uploads/2021/04/mailtrap-new-logo.svg" alt="mailtrap" />   </h1>
              <div className="menu-icon" onClick={this.handleClick}><i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i></div>
              <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item,index)=>{
                    return (
                        <li key={index}>
                            <a className={item.name} href={item.Url}> {item.title}</a>
                        </li>
                    )
                })}
              </ul>
              <Stack direction='row' spacing={4} align='center'>
  <Button className="btnlog-"   colorScheme='teal' variant='outline'>
    Sign Up
  </Button>
 

  <Button className="btnlog-"   colorScheme='teal'>
    Log In
  </Button>
 </Stack>

            </nav>
        )
    }
}
export default Navbar