import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/HireKey.jpg'
import '../loginPage/loginHome.css'
import '../../index.css'
import { useState } from 'react'
import axios from 'axios'


const ContractorSignup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
 const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      companyName: '',
      companyPhone: '',
      companyLocation: '',
      companyInterests: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleInterestClick = (interest) => {
    // Check if the interest is already selected
    const isInterestSelected = formData.companyInterests.includes(interest);
    if (isInterestSelected) {
      // Remove the interest from 
      const updatedInterests = formData.companyInterests.filter((i) => i !== interest);
      setFormData({ ...formData, companyInterests: updatedInterests });
    } else {
      // Add the interest to the list
      const updatedInterests = [...formData.companyInterests, interest];
      setFormData({ ...formData, companyInterests: updatedInterests });
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contractoruser', formData);
      alert('Contractor signed up successfully');
      navigate('/contractorlogin');
    } catch (error) {
      console.error(error);
    }
  }

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className='container login-container'>
      <div className="intro-box">
        <img src={Logo} alt="logo" />
        <h1>HireKey</h1>
        <p>Where Employers Post jobs, find workers, hire workers, get work done in any Industry faster</p>
      </div>
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h1>Contractor Sign Up</h1>
          {currentStep === 1 && (
            <>
              <span>(1/3)</span>
              <input type="text" name="name" value={formData.name} placeholder="Name" onChange={handleChange} />
              <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
              <input type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} />
              <button type="button" onClick={nextStep}>Next</button>
            </>
          )}
          {currentStep === 2 && (
            <>
              <span>(2/3)</span>
              <input type="text" name="companyName" value={formData.companyName} placeholder="Company Name" onChange={handleChange} />
              <input type="tel" name="companyPhone" value={formData.companyPhone} placeholder="Company Phone" onChange={handleChange} />
              <input type="text" name="companyLocation" value={formData.companyLocation} placeholder="Company Location" onChange={handleChange} />
              <div className='steps-btn'>
                <button type="button" onClick={prevStep}>Back</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </>
          )}
          {currentStep === 3 && (
            <>
              <span>(3/3)</span>
              <fieldset>
                <legend>Company Interests:</legend>
                <button
                  type="button"
                  onClick={() => handleInterestClick('Buildings')}
                  className={formData.companyInterests.includes('Buildings') ? 'selected' : ''}
                >
                  Buildings
                </button>
                <button
                  type="button"
                  onClick={() => handleInterestClick('IT')}
                  className={formData.companyInterests.includes('IT') ? 'selected' : ''}
                >
                  IT
                </button>
                <button
                  type="button"
                  onClick={() => handleInterestClick('Cleaning')}
                  className={formData.companyInterests.includes('Cleaning') ? 'selected' : ''}
                >
                  Cleaning
                </button>
                </fieldset>
                <br />
                <fieldset>
                <button
                  type="button"
                  onClick={() => handleInterestClick('Photography')}
                  className={formData.companyInterests.includes('Photography') ? 'selected' : ''}
                >
                  Photography
                </button>
                <button
                  type="button"
                  onClick={() => handleInterestClick('Artists')}
                  className={formData.companyInterests.includes('Artists') ? 'selected' : ''}
                >
                  Artists
                </button>
                <button
                  type="button"
                  onClick={() => handleInterestClick('Hotel')}
                  className={formData.companyInterests.includes('Hotel') ? 'selected' : ''}
                >
                  Hotel
                </button>
              </fieldset>
              <div className='steps-btn'>
                <button type="button" onClick={prevStep}>Back</button>
                <button type="submit">Submit</button>
              </div>
            </>
          )}

          <p>Have an account? <Link to='/contractorlogin'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default ContractorSignup