import { Link } from 'react-router-dom'
import Logo from '../../assets/images/HireKey.jpg'
import '../loginPage/loginHome.css'
import '../../index.css'


const WorkerSignup = () => {
  return (
    <div className='container login-container'>
    <div className="intro-box">
        <img src={Logo} alt="logo" />
        <h1>HireKey</h1>
        <p>Where Employers Post jobs, find workers, hire workers, get work done in any Industry faster</p>
    </div>
    <div className="login-box">
        <form>
            <h1>Worker Sign Up</h1>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="User Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            <p>have an account? <Link to='/workerlogin'>Login</Link></p>
        </form>
    </div>
</div>
  )
}

export default WorkerSignup