import "./Login.css";
import React, { useState, useEffect } from "react";
import { Footer, Logo } from "../../Components";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const LoginContent = ({ handleEmailSubmit, handleEmailChange, haveEmail, email }) => {
  return (
    <div>
      <p>Enter your email address to sign in or to create an account</p>
      <form onSubmit={handleEmailSubmit} style={{ display: haveEmail ? "none" : "" }}>
        <TextField
          label="Email Address"
          type="email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          variant="outlined"
          margin="normal"
        />

        <Button type="submit" variant="contained" color="secondary" sx={{ width: "100%", borderRadius: "20px" }}>
          Continue
        </Button>
      </form>
    </div>
  )
}

const RegisterContent = ({ handlePasswordSubmit, handlePasswordChange, haveEmail, setHaveEmail, email, password }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="register-content">
      <p style={{fontWeight:"bold", fontSize: "1.5em", margin: "20px 0 10px 0"}}>Create a Password</p>
      <p>{email}</p>
      <p className="login-callback" onClick={() => {setHaveEmail(false)}}>Use a Different Email</p>
      <form onSubmit={handlePasswordSubmit} style={{ display: haveEmail ? "" : "none" }}>
        <TextField
          label="Create Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          variant="outlined"
          margin="normal"
          placeholder="Minimum 6 characters"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button type="submit" variant="contained" color="secondary" sx={{ width: "100%", borderRadius: "20px", margin: "10px 0 20px 0"}}>
          Create Account
        </Button>
        <p>
          By creating an account, you are agreeing to our privacy policy and terms of use.
        </p>
        <p style={{marginTop: "10px"}}>Have an account? <span className="login-callback" onClick={() => setHaveEmail(false)}>Sign In</span></p>
      </form>
    </div>
  )
}

const Login = (props) => {
  const {haveAccount, setHaveAccount, account, setAccount} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [haveEmail, setHaveEmail] = useState(false);
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setHaveEmail(true);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const newAccount = { email: email, password: password };
    setAccount([...account, newAccount]);
    setHaveAccount(true);
    navigate('/')
  };

  return (
    <div className="login">
      <div className="login-header">
        <Logo />
        <p>Secure Login</p>
      </div>

      <div className="login-body">
        {haveEmail ? (
          <RegisterContent
            email={email}
            password={password}
            haveEmail={haveEmail}
            setHaveEmail={setHaveEmail}
            handlePasswordSubmit={handlePasswordSubmit}
            handlePasswordChange={handlePasswordChange}
          />
        ) : (
          <LoginContent
            email={email}
            haveEmail={haveEmail}
            handleEmailSubmit={handleEmailSubmit}
            handleEmailChange={handleEmailChange}
          />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Login;
