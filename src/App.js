import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInForm from "./components/auth/SignInForm";
import SignUpForm from "./components/auth/SignUpForm";
import Homepage from "./components/pages/Homepage";
import Products from "./components/pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <TopNavbar /> */}
        <Route exact path="/" element={<Homepage />} />
        <Route path="login" element={<SignInForm />} />
        <Route path="signup" element={<SignUpForm />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
