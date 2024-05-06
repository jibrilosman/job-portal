import { Link } from 'react-router-dom'
import Logo from '../../assets/images/HireKey.jpg'
import '../loginPage/loginHome.css'
import '../../index.css'


const StepTwoForm = () => {
  return (
    <div className='container login-container'>
    <div className="intro-box">
        <img src={Logo} alt="logo" />
        <h1>HireKey</h1>
        <p>Where Employers Post jobs, find workers, hire workers, get work done in any Industry faster</p>
    </div>
    <div className="login-box">
        <form>
            <h1>Contractor Sign Up</h1>
            <input type="text" placeholder="Company Name" />
            <input type="tel" placeholder="Company Phone" />
            <input type="text" placeholder="Company Location" />
            <button type="submit">Login</button>
            <p>have an account? <Link to='/contractorlogin'>Login</Link></p>
        </form>
    </div>
</div>
  )
}

export default StepTwoForm