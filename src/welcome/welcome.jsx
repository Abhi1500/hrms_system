import React  from 'react'
import { Link } from 'react-router-dom'
import './carousel.css'
import Carousel from './carousel';
import Chairman from './images/ashish.jpeg'
import Principal from './images/principal.png'
import Vice_principal from './images/vice_principal.jpg'
import  Campus1 from './images/campus1.jpg'
import  Campus2 from './images/campus2.jpg'
import  Campus3 from './images/campus3.jpg'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,  } from 'reactstrap';

export default function Welcome() {
  return (<>
    <header>
        
      <nav style={{height:'60px', backgroundColor:'#04293A' }}class="navbar navbar-expand-md navbar-dark fixed-top ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">ST. XAVIER'S HIGH SCHOOL</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"></a>
              </li>
            </ul>
            <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret >
                    <form className="d-flex">
              <button Link to='' className="btn btn-primary" >Register</button>
            </form>
                    </DropdownToggle>
                    <DropdownMenu right >
                      <DropdownItem >
                        <Link to="LoginPage" >LOGIN</Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to="SignupPage1" >SIGNUP</Link>
                      </DropdownItem>
                    
                      
                    </DropdownMenu>
                  </UncontrolledDropdown>
           
          </div>
        </div>
      </nav>
    </header>

    <main>
     <div><Carousel /></div>
     
      

      <div className="container marketing">

        <div className="row">
          <div className="col-lg-4">
              <img src={Chairman} style={{paddingLeft:'0px'}}/>
             <h2>Chairman</h2>
            <h4>Er. Ashish Diwedi</h4>B.Tech, M.Sc<p></p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div>
          <div class="col-lg-4">
          <img src={Principal} />
            <h2>Principal</h2>
            <h4>Mr. A. K. Das</h4><p>M.Sc, B.ED</p>
            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div>
          <div class="col-lg-4">
          <img src={Vice_principal} />
            <h2>Vice-Principal</h2>
            <h4>Dr. Subin Joy</h4><p>MA, Phd, B.ED</p>
            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div>
        </div>



        <hr className="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Xavier's School is a 163 years old institution <span class="text-muted">with rich heritage and long tradition.</span></h2>
            <p class="lead">The tiny seed has grown into a mighty tree from 83 students in 1860 to 8,635 students in January 2022.</p>
          </div>
          <div class="col-md-5">
           <img src={Campus1}/>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2" style={{ paddingLeft:'110px'}}>
            <h2 class="featurette-heading"> Xavier's rated the second best science <span class="text-muted">and commerce school in the country.</span></h2>
            <p class="lead"  >The national India Today magazine's report on school has consistently rated Xavier's in the top 10 in India in recent years. </p>
          </div>
          <div class="col-md-5 order-md-1">
          <img src={Campus2}/>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Education at Xavier’s transcends the boundaries <span class="text-muted"> of the classrooms</span></h2>
            <p class="lead">Education at Xavier’s is to focus more on formation of the youth rather than just imparting knowledge.The school inculcates the qualities of a passion for excellence, desire for freedom, courage, confidence, spirit of inquisitiveness etc. in its students.</p>
          </div>
          <div class="col-md-5">
          <img src={Campus3}/>
          </div>
        </div>

        <hr className="featurette-divider" />


      </div>


      <footer class="container">
        <p class="float-end"><a href="#">Back to top</a></p>
        <p>&copy; ST. XAVIER'S HIGH SCHOOL &middot; <a Link to="">Privacy</a> &middot; <a Link to="">Terms</a></p>
      </footer>
    
  </main>

  </>
  )
}
