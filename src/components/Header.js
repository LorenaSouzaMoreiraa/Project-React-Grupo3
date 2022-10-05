import * as React from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import './header.css'

export default function Header(){
  return (
    <nav class="navbar sticky-top navbar-dark navbar-expand-sm">
      <ul class="navbar-nav right text-left aling-items-center">
        <li class="nav-item active m5">
          <img alt="profile" src="../../assets/profile.jpg" width="60" height="60" class="rounded-circle"/>
        </li>
        <li class="nav-item m5 info">
          <p class="muted">Bem vindo,</p>
          <p class="name">User</p>
        </li>
      </ul>
      <div class="navbar-text header px-3 text-end">
        <Link to ="/login"><i class="ri-2x ri-login-box-fill" width="50" height="50"></i></Link>
      </div>
    </nav>
  );
}