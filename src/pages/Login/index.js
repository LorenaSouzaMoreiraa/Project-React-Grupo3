import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login () {
    return(
    <div className="app">
        <div class="container-fluid">
            <div class="row no-gutter">
                <div class="col-md-4 d-none d-md-flex bg-image">
                </div>

                <div class="col-md-8">
                    <div class="login d-flex align-items-center py-5">

                        <div class="container login">
                            <div class="row text-center">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h1 class="title">Login</h1>
                                    <form>
                                        <div class="form-group mb-5 text-start">
                                            <label for="floatingInput">Email</label>
                                            <input id="inputEmail" type="email" placeholder="email@example" required="" autofocus="" class="form-control"/>
                                        </div>
                                        <div class="form-group mb-5 text-start">
                                            <label for="floatingInput">Password</label>
                                            <input id="inputPassword" type="password" placeholder="........." required="" class="form-control"/>
                                        </div>
                                        <Link to ="/admin"><button type="submit" class=" btn-block border-0 text-uppercase mb-2 shadow-sm">Entrar</button></Link>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Login;