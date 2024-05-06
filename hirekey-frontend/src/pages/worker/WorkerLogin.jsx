import '../loginPage/loginHome.css'
import '../../index.css'
import Logo from '../../assets/images/HireKey.jpg'
import { Link } from 'react-router-dom'

const WorkerLogin = () => {
  return (
    <div className='container login-container'>
    <div className="intro-box">
        <img src={Logo} alt="logo" />
        <h1>HireKey</h1>
        <p>Where Employers Post jobs, find workers, hire workers, get work done in any Industry faster</p>
    </div>
    <div className="login-box">
        <form>
            <h1>Worker Login</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            <p>Don't have an account? <Link to='/workersignup'>Sign Up</Link></p>
        </form>
    </div>
</div>
  )
}

export default WorkerLogin