import { Link } from 'react-router-dom'
import  './loginHome.css'
import '../../index.css'
import  Logo from '../../assets/images/HireKey.jpg'

const LoginHome = () => {
  return (
    <div className='container login-container'>
        <div className="intro-box">
            <img src={Logo} alt="logo" />
            <h1>HireKey</h1>
            <p>Where Employers Post jobs, find workers, hire workers, get work done in any Industry faster</p>
        </div>
        <div className="login-box">
            <h1>Continue As</h1>
            <Link to='/contractorlogin' className='contractor'>
                <h1>Contractor &#8594;</h1>
                <small>Post jobs, find workers, hire workers, get work done in any Industry</small>
            </Link>
            <Link to='/workerlogin' className='worker'>
                <h1>Worker &#8594;</h1>
                <small>Find jobs, apply on jobs, get hired, do work and get fair paid</small>
            </Link>
        </div>
    </div>
  )
}

export default LoginHome