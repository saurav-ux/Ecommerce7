import React ,{useState}from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Navbar from "react-bootstrap/Navbar";
// import logo from "../Images/myntralogo.png";
import logo from "../Images/myntralogoSmall.png";
import { useSelector ,useDispatch} from "react-redux";
// import {loginStatus } from "../Services/containerSlice";
import { logout } from "../Services/containerSlice";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Navbarr() {

  //handle snakvar
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const [message,setMessage] = useState("Login Successfully")
  const [snakcolor,setSnackColor]= useState("success")
  const { vertical, horizontal, open } = state;

  const count = useSelector((state) => state.containerr.addproduct);
  const loginName = useSelector((state) => state.containerr.logstatus);
  const dispatch = useDispatch()
  
  const handleLogout = ()=>{
    setState({ vertical: 'top',
    horizontal: 'center',
     open: true });
     setSnackColor("success")
     setMessage("Logout Successfully")
    //  dispatch(loginStatus(""))
    dispatch(logout(0))
  }

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <Navbar bg="white" expand="lg" className='navbar fixed-top'>
    <Container fluid>
     <Link to="/"> <Navbar.Brand href="#"><img src={logo} id="logo2 " alt="logo"/></Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
         <div className="bor a">  <Nav.Link href="#content1">  MEN</Nav.Link></div>
         <div className="bor b">  <Nav.Link href="#content2">WOMEN</Nav.Link></div>
         <div className="bor c"> <Nav.Link href="#content3">KIDS</Nav.Link></div>
         <div className="bor d">  <Nav.Link href="#content4">HOME & LIVING</Nav.Link></div>
          <div className="bor e">  <Nav.Link href="#content5">BEAUTY</Nav.Link>     </div>   
        </Nav>
        {loginName === "" || loginName === undefined ? "" : <b>Welcome {loginName}</b>}
       
        {loginName === "" || loginName === undefined ?
          <Link to="/login"> 
            <dfn title="Login/Signup"> 
              <a href="login.html"> <i class="fas fa-user-alt"></i> </a>
            </dfn> 
          </Link>
          : <Button variant="outline-success" style={{width:80,marginLeft:20}}  onClick={handleLogout}>Logout</Button>
        }
      
         <Link to="/wishlist"> <dfn title="Wishlist">  <a href="wishlist.html"><i class="fas fa-heart"> 
         {count.length === 0 ? " " : " "+count.length}
         </i></a>   </dfn></Link>
         <Link to="/">    <dfn title="Bag"> <a href="Shopping Bag.html" > <i class="fas fa-shopping-bag"></i> </a> </dfn></Link>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          {/* <Button variant="outline-success">Search</Button> */}
        </Form>
      </Navbar.Collapse>
    </Container>
       {/* alert snakbar start */}
       <Snackbar 
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
          open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snakcolor}  sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
            {/* alert snakbar end */}

  </Navbar>


    // <Navbar bg="white" className="navbar fixed-top">
    //   <Container fluid>
    //     <Link to="/">
    //       {" "}
    //       <Navbar.Brand href="#">
    //         <img src={logo} alt="logo" id="logo2 " />
    //       </Navbar.Brand>
    //     </Link>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: "100px" }}
    //         navbarScroll
    //       >
    //         <div className="bor a">
    //           {" "}
    //           <Nav.Link href="#content1"> MEN</Nav.Link>
    //         </div>
    //         <div className="bor b">
    //           {" "}
    //           <Nav.Link href="#content2">WOMEN</Nav.Link>
    //         </div>
    //         <div className="bor c">
    //           {" "}
    //           <Nav.Link href="#content3">KIDS</Nav.Link>
    //         </div>
    //         <div className="bor d">
    //           {" "}
    //           <Nav.Link href="#content4">HOME & LIVING</Nav.Link>
    //         </div>
    //         <div className="bor e">
    //           {" "}
    //           <Nav.Link href="#content5">BEAUTY</Nav.Link>{" "}
    //         </div>
    //       </Nav>
    //       {loginName === "" ? "" : "Welcome " + loginName}
    //       <Link to="/signin">
    //         {" "}
    //         <dfn title="Login/Signup">
    //           {" "}
    //           <a href="login.html">
    //             <i class="fas fa-user-alt"></i>{" "}
    //           </a>{" "}
    //         </dfn>{" "}
    //       </Link>
    //       <Link to="/wishlist">
    //         {" "}
    //         <dfn title="Wishlist">
    //           {" "}
    //           <a href="wishlist.html">
    //             <i class="fas fa-heart">
    //               {" "}
    //               {count.length === 0 ? " " : count.length}
    //             </i>
    //           </a>{" "}
    //         </dfn>
    //       </Link>
    //       <Link to="/">
    //         {" "}
    //         <dfn title="Bag">
    //           {" "}
    //           <a href="Shopping Bag.html">
    //             {" "}
    //             <i class="fas fa-shopping-bag"></i>{" "}
    //           </a>{" "}
    //         </dfn>
    //       </Link>

    //       <Form className="d-flex">
    //         <Form.Control
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         {/* <Button variant="outline-success">Search</Button> */}
    //       </Form>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default Navbarr;
