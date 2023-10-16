import React from 'react';
import CustomNavbar from './Components/Header';
import HomeBody from './Home_body';
import './Home.css';
function Home() {
  return (
    <div>
      <CustomNavbar></CustomNavbar>
      <nav class="navbar navbar-cus navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
              <form class="d-flex ml-auto align-middle">
              <i class="fa-solid fa-magnifying-glass" style={{paddingTop:'11px'}}></i><input style={{marginLeft:'10px',width: '400px'}} class="Cus-search me-2" type="search" placeholder="Search order number, customer name, or items" aria-label="Search"/>
                  <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
              <button class="btn btn-dark">Filter</button>
          </div>
      </nav>
      <HomeBody></HomeBody>
    </div>
  );
}

export default Home;
