import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/HireKey.jpg'
import '../loginPage/loginHome.css'
import '../../index.css'


const ContractorSignup = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/contractorsignup/StepTwoForm')
  }
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
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" onClick={handleSubmit}>Next</button>
            <p>have an account? <Link to='/contractorlogin'>Login</Link></p>
        </form>
    </div>
</div>
  )
}

export default ContractorSignup