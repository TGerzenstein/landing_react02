import React from 'react';
import Link from 'next/link';

function Navigation() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
         <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
               <ul class="navbar-nav me-auto">
                  <li class="nav-item">
                     <a class="nav-link active" href="/">Home
                        <span class="visually-hidden">(current)</span>
                     </a>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" href="/services">Services</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" href="/about">About</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" href="/profiles">Profiles</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
    </>
  )
}

export default Navigation;