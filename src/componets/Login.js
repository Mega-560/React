
import React, {Component} from 'react';
import { Link } from 'react-router-dom'



export default class Login extends Component {
    state = {
        email: '',
        password: '',
    
    };
    
  handleSubmit(event) {
    const email = this.state.email;
    const password = this.state.password;
    let bodyFormData = new FormData();
    bodyFormData.set('email', email);
    bodyFormData.set('password', password);
    console.log(bodyFormData);
  }

 render(){
    return ( 

    <form className="vh-100"  onSubmit={this.handleSubmit}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" >
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src=""
                alt="login form" className="img-fluid"  />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

             

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3"></i>
                    <span className="h1 fw-bold mb-0">Logo</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>

                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" name='email' className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" name="password" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example27">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>

                 
                  <Link to="/Reg">Forgot password?</Link>
                  <p className="mb-5 pb-lg-2" >Don't have an account? <a href="#!"
                      style={{'color' : '#393f81'}}>Register here</a></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
               

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>

    )   
 }
}