import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInForm from "./components/auth/SignInForm";
import SignUpForm from "./components/auth/SignUpForm";
import Homepage from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="login" element={<SignInForm />} />
        <Route path="signup" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
