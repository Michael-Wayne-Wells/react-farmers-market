import React from "react";
import PageTitle from './PageTitle';
import SearchInput from './SearchInput';
import NavLinks from './NavLinks';
import { Navbar } from 'react-bootstrap';
import workoutVeggies from './../images/workoutVeggies.gif';
import workoutVeggies2 from './../images/workoutVeggies2.gif';

function Header(props){
  var imageFloat = {
    position: "absolute",
    float: "right",
    right: "0"
  }
  return(
    <div>
      <Navbar expand="lg">
        <style jsx>{`

            .navbar {
              font-family: 'bangers';
              background-color: rgba(167, 195, 180, 1);
            }
            .navbar h1 {
              font-family: 'Monoton', cursive;
            }
            .btn {
              color: black;
            }

            .navImage {
              width: 120px;
            }
            `}
          }
        }</style>
      <Navbar.Brand href="#home"><PageTitle/> <img className="navImage" src={workoutVeggies}></img> <img className="navImage" style={imageFloat} src={workoutVeggies2}></img>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLinks/>
          <SearchInput/>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

// <BrandIcon/>
