import "./App.css";
import React from "react";
import Navbarr from "./Components/Navbarr";
import Crousel1 from "./Components/Crousell";
import Container1 from "./Components/Container1";
import Container2 from "./Components/Container2";
import Container3 from "./Components/Container3";
import Container4 from "./Components/Container4";
import Container5 from "./Components/Container5";
import WishList from "./Components/WishList";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router7,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  // return (
  //   <>
  //   <Navbarr/>
  //   <Crousel1/>
  //   <Container1/>
  //   <Container2/>
  //   <Container3/>
  //   <Container4/>
  //   <Container5/>
  //   <WishList/>
  //   <Footer/>
  //   </>
  // );

  return (
    <>
      <Router7>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbarr />
                <Crousel1 />
                <Container1 />
                <Container2 />
                <Container3 />
                <Container4 />
                <Container5 />
                <Footer />
              </div>
            }
          />
          <Route
            path="/wishlist"
            element={
              <>
                <Navbarr />
                <WishList />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router7>
    </>
  );

  // return (
  //   <>
  //     <Router>
  //       <Navbarr />
  //       <Switch>
  //         <Route
  //           exact
  //           path="/"
  //           render={() => {
  //             return (
  //               <>
  //                 <Crousel1/>
  //                 <Container1/>
  //                 <Container2/>
  //                 <Container3/>
  //                 <Container4/>
  //                 <Container5/>
  //               </>
  //             );
  //           }}
  //         ></Route>
  //         <Route exact path="/wishlist">
  //         <WishList/>
  //         </Route>
  //       </Switch>

  //       <Footer />
  //     </Router>
  //   </>
  // );
}

export default App;
