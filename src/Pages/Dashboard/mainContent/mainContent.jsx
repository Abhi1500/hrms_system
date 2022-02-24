import React from 'react';
import Capture1 from './mainImages/capture1.jfif';
import Capture2 from './mainImages/capture2.jfif';
import Capture3 from './mainImages/capture3.jfif';
import Capture4 from './mainImages/capture4.jfif';
import Capture5 from './mainImages/capture5.jfif';
import Capture6 from './mainImages/capture6.jfif';
import Capture7 from './mainImages/capture7.jfif';
import Capture8 from './mainImages/capture8.jfif';
import Capture9 from './mainImages/capture9.jfif';
import './maincontent.css';
function Maincontent() {
    return (

<div>
<section className = "py-5 text-center container" padding >
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Xavier's School</h1>
        <p className="lead text-muted">
            Xavier's School is a 163 years old institution with rich heritage and long tradition.
                        The tiny seed has grown into a mighty tree from 83 students in 1860 to 8,635 students in January 2022.
           </p>
      </div>
    </div>
  </section> 

<div className="album py-5 bg-light">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img src={Capture1} width="100%" height="225" alt='' />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as
               a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src={Capture2} width="100%" height="225" alt='' />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as
                      a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
          <img src={Capture3} width="100%" height="225" alt='' />
           
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as
               a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
          <img src={Capture4} width="100%" height="225" alt='' />
           
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
          <img src={Capture5} width="100%" height="225" alt='' />
           
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
          <img src={Capture6} width="100%" height="225" alt='' />
           
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
          <img src={Capture7} width="100%" height="225" alt='' />
           
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
          <img src={Capture8} width="100%" height="225" alt='' />
           
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
          <img src={Capture9} width="100%" height="225" alt='' />
           
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  </div>
    );
}
export default Maincontent;