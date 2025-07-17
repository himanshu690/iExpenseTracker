import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutAction } from '../redux/slice/authSlice';


export default function PublicNavbar() {
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        dispatch(logoutAction());
        localStorage.removeItem("userInfo");
    }
  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand me-3">iExpenseTracker</Link>
            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
            <Link className="nav-link" to="#">Add Transaction</Link>
            <Link className="nav-link" to="#">Add Categories</Link>
            <Link className="nav-link" to="#">Category</Link>
            <Link className="nav-link" to="#">Profile</Link>

          <form className="d-flex">
            <button onClick={logoutHandler} className="btn btn-sm btn-outline-secondary" type="button">Logout</button>
          </form>
        </div>
      </nav>
    </div>
  )
}
