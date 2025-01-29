// React Hook Imports:

import { useState, useEffect } from 'react';

// Component Imports:

import PasswordInput from './PasswordInput';
import PasswordStrengthDisplay from './PasswordStrengthDisplay';
import PasswordConditions from './PasswordConditions';

// Component Interface:

interface Conditions {

  hasLowercase: boolean;
  
  hasUppercase: boolean;
  
  hasNumber: boolean;
  
  hasSymbol: boolean;

}

// Password Validator Component:

const PasswordValidator: React.FC = () => {

  // Components Logic:

  const [password, setPassword] = useState<string>('');
  
  const [error, setError] = useState(<p id='initilized-message-id' className='initilized-message'>{''}</p>);
  
  const [conditions, setConditions] = useState<Conditions>(
    
    {
  
      hasLowercase: false,
    
      hasUppercase: false,
    
      hasNumber: false,
    
      hasSymbol: false,
  
    }
  
  );

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const [clicked, setClicked] = useState<boolean>(false);

  const strengthCount = [conditions.hasLowercase, conditions.hasUppercase, conditions.hasNumber, conditions.hasSymbol].filter(Boolean).length;

  const strengthLabel = strengthCount === 1 ? 'Weak': strengthCount === 2 || strengthCount === 3 ? 'Medium': strengthCount === 4 ? 'Strong': '';

  const checkPassword = (value: string) => {
  
    const hasLowercase = /[a-z]/.test(value);
  
    const hasUppercase = /[A-Z]/.test(value);
  
    const hasNumber = /[0-9]/.test(value);
  
    const hasSymbol = /[$@#&!]/.test(value);

    setConditions(
      
      {
        
        hasLowercase,
        
        hasUppercase,
        
        hasNumber,
        
        hasSymbol
      
      }
    
    );

    if(value.length < 5)
    {

      setError(<p id='instruction-message-id' className='instruction-message text-green-500'>{'Maximum number of characters is 12'}</p>);
    
    }
    
    else if(value.length >= 12)
    {
      
      setError(<p id='error-message-id' className='error-message text-red-500'>{'You cannot have more than 12 characters in your password!'}</p>);
    
    }
    
    else
    {

      setError(<p id='null-message-id' className='null-message'>{''}</p>);
    
    }
  
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value;

    if(value.length <= 12)
    {

      setPassword(value);
      
      checkPassword(value);
    
    }
  
  };

  const handleCopy = async () => {
  
    try
    {

      await navigator.clipboard.writeText(password);
    
      alert('Password copied to clipboard!');
    
    }
    
    catch(err)
    {

      console.error('Failed to copy: ', err);
    
    }
  
  };

  const togglePasswordVisibility = () => {

    setIsPasswordVisible(!isPasswordVisible);
  
  };

  const handleSubmit = () => {

    let message = '';

    if(strengthCount === 0)
    {

      message = 'No password entered! Please enter a password.';
    
    }
    
    else if(strengthCount === 1)
    {
    
      message = 'Your password is weak!';
    
    }
    
    else if(strengthCount === 2 || strengthCount === 3)
    {
    
      message = 'Your password is medium strength!';
    
    }
    
    else if(strengthCount === 4)
    {
    
      message = 'Your password is strong!';
    
    }
    
    else
    {
    
      message = 'Invalid password strength!';
    
    }

    alert(message);

    setClicked(true);
  
  };

  const handleClear = () => {
      
    setPassword('');
    
    setConditions(
      
      {
    
        hasLowercase: false,
      
        hasUppercase: false,
      
        hasNumber: false,
      
        hasSymbol: false
    
      }

    );

    type clearMessageType = string;

    const clearMessage: clearMessageType = 'Input field is clear!';

    alert(clearMessage);

  };

  useEffect(() => {

    type welcomeMessageType = string;

    const welcomeMessage: welcomeMessageType = 'Welcome!';

    alert(welcomeMessage);

  }, []);

  // JSX Code:

  return (

    <>
    
      <div className="main-wrapper-box flex flex-col justify-center place-items-center bg-black mt-12 p-4">
    
        <p className="main-header font-bold text-white">Password Strength Tester</p>
    
        <PasswordInput password={password} onChange={handlePasswordChange} onCopy={handleCopy} togglePasswordVisibility={togglePasswordVisibility} isPasswordVisible={isPasswordVisible}/>
    
        <div className="wrapper-section w-[440px] max-w-md p-6">
    
          <PasswordConditions conditions={conditions}/>
    
          <PasswordStrengthDisplay strengthLabel={strengthLabel} conditions={conditions}/>
    
          <div className='flex flex-col justify-center place-items-center text-center p-2'>

            <button type="submit" className='submit-btn font-semibold bg-green-400 border-xl rounded-lg text-black w-full transform cursor-pointer hover:font-bold hover:scale-103 hover:duration-300 mt-2 mb-2 p-2' onClick={() => {

              handleSubmit();

            }}>Submit</button>

            <button type='button' className='submit-btn font-semibold bg-red-500 border-xl rounded-lg text-white w-full transform cursor-pointer hover:font-bold hover:scale-103 hover:duration-300 p-2' onClick={() => {

              handleClear();

            }}>Clear</button>

          </div>

          <div className="flex flex-col justify-start place-items-start w-full mt-3">
    
            <p className="text-white font-bold">Strength Message: {strengthLabel}</p>

            <p id="instruction-message-id" className="instruction-message text-white mt-1">{error}</p>
                      
          </div>
        
        </div>
      
      </div>

    </>

  );

};

// Component Export:

export default PasswordValidator;