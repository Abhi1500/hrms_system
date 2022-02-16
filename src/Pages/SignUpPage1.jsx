import React from 'react'


export default function SignUpPage1() {
    return (<>
        <div style={{ backgroundColor: '#139487',height:'100vh' ,marginTop:'50px'}}>
            {/* <div style={{ backgroundColor: 'white', width: '50%', marginLeft: '25%', height: '95vh', position: "absolute", marginTop: '20px' }}> */}

                <div>
                     <div style={{ fontSize: '40px', padding: '20px', marginLeft: '20px' }}> <b>Sign Up</b></div>
                    <div style={{ marginLeft: '40px' }}>Please fill in this form to create an account!</div> 
                    
  

                    <form  style={{backgroundColor:'white',margin:'20px', paddingTop:'20px'}}>

                        <div class="col-sm-11" style={{ marginLeft: '45px', marginTop: '40px' }}>
                            <div style={{ marginTop: '40px' }}>
                                <label for="validationCustomUsername">Username</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">

                                        <span class="input-group-text" id="inputGroupPrepend"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg></span>
                                    </div>
                                    <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>

                                </div>
                            </div>
                            <div style={{ marginTop: '40px' }}>
                                <label for="validationCustomUsername">Email Address</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" fill="currentColor" class="bi bi-envelope-plus-fill" viewBox="0 0 16 16">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
                                            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                                        </svg></span>
                                    </div>
                                    <input type="text" class="form-control" id="validationCustomUsername" placeholder="Email Address" aria-describedby="inputGroupPrepend" required />
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>

                                </div>
                            </div>
                            <div style={{ marginTop: '40px' }}>
                                <label for="validationCustomUsername">Password</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                        </svg></span>
                                    </div>
                                    <input type="text" class="form-control" id="validationCustomUsername" placeholder="Password" aria-describedby="inputGroupPrepend" required />
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>

                                </div>
                            </div>
                            <div style={{ marginTop: '50px' }}>
                                <label for="validationCustomUsername">Confirm Password</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" fill="currentColor" class="bi bi-file-earmark-lock-fill" viewBox="0 0 16 16">
                                            <path d="M7 7a1 1 0 0 1 2 0v1H7V7zM6 9.3c0-.042.02-.107.105-.175A.637.637 0 0 1 6.5 9h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 12h-3a.637.637 0 0 1-.395-.125C6.02 11.807 6 11.742 6 11.7V9.3z" />
                                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0z" />
                                        </svg></span>
                                    </div>
                                    <input type="text" class="form-control" id="validationCustomUsername" placeholder="Confirm Password" aria-describedby="inputGroupPrepend" required />
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="form-group" style={{ padding: '30px', marginLeft: '20px' }}>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                <label class="form-check-label" for="invalidCheck2">
                                    Agree to terms and conditions
                                </label>
                            </div>
                        </div>
                        <div style={{ padding: '10px', marginLeft: '30px' }}>
                            <button class="btn btn-primary" type="submit" style={{ width: '300px', height: '50px', fontSize: '20px',boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}><b>Sign Up</b></button>
                        </div>
                        









                    </form>
                    <div style={{marginLeft:'20px',fontSize:'20px',color:'white'}}>Already have an account? <a style={{color:'white'}} href='LoginPage'>Login here</a></div>
                   


                </div>
            </div>
        {/* </div> */}


    </>
    )
}

