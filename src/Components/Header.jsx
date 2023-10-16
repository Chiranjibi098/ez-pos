import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const CustomNavbar = () => {
  return (
    <>
        <nav class="navbar navbar-cus-head navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><i class="fa-solid fa-bars" style={{marginRight:'20px'}}></i>Orders</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active Active-a" aria-current="page" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link Completed-a" href="#">Completed</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <li className='nav-item' style={{listStyle: 'none'}}>
                        <Link><a className='nav-link icons' href=""><i class="fa-solid fa-house"></i></a></Link>
                    </li>
                    <li className='nav-item' style={{listStyle: 'none'}}s>
                        <Link><a className='nav-link icons' href=""><i class="fa-solid fa-bell"></i></a></Link>
                    </li>
                </form>
                </div>
            </div>
        </nav>
    </>

  );
};

export default CustomNavbar;