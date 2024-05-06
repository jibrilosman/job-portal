import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import LoginHome from "./pages/loginPage/LoginHome";
import Layout from "./components/Layout";
import ContractorLogin from "./pages/contractor/ContractorLogin";
import ContractorSignup from "./pages/contractor/ContractorSignup";
import WorkerLogin from "./pages/worker/WorkerLogin";
import WorkerSignup from "./pages/worker/WorkerSignup";
import StepOneForm from "./pages/contractor/StepTwoForm";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/continue" element={<LoginHome />} />
      <Route path="/contractorlogin" element={<ContractorLogin />} />
      <Route path="/contractorsignup" element={<ContractorSignup />} >
        <Route path="contractorsignup/StepTwoForm" element={<StepOneForm />} />
      </Route>
      <Route path="/workerlogin" element={<WorkerLogin />} />
      <Route path="/workersignup" element={<WorkerSignup />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
