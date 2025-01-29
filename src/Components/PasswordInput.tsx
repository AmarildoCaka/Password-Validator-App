// React Hook Imports:

import { useState } from 'react';

// Font Awesome Component Imports:

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

// Component Interface:

interface PasswordInputProps {

  password: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  onCopy: () => void;

  togglePasswordVisibility: () => void;

  isPasswordVisible: boolean;

}

// Password Input Component:

const PasswordInput: React.FC<PasswordInputProps> = ({ password, onChange, onCopy, togglePasswordVisibility, isPasswordVisible }) => {

  // Component Logic:

  type tooltipStateType = string;

  const [tooltipState, setToolTipState] = useState<tooltipStateType>('Copy');

  const tooltipClicknHadler = () => {

    setToolTipState('Copied');

    setTimeout(() => {

      setToolTipState('Copy');

    }, 500);

  }

  // JSX Code:

  return (

    <>

      <div className="password-form-container flex flex-row justify-center place-items-center text-center p-2">

        <div className='form-wrapper flex flex-row bg-[#272525] w-[440px]'>

          <input type={isPasswordVisible ? 'text' : 'password'} className="password-form bg-[#272525] text-white font-bold w-[400px] mb-2 p-5" onChange={onChange} value={password} maxLength={12} placeholder="Enter Your P4$5W0rD!" required/>

          <div className="input-btn-group flex flex-row justify-center lace-items-center text-center gap-x-4 p-5">
          
            <div className="group relative inline-block">

              <button type="button" onClick={togglePasswordVisibility} className="text-white bg-[#272525]">
              
                <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye}/>
            
              </button>

              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              
                {isPasswordVisible ? 'Show': 'Hide'}
              
              </span>

            </div>
          
            <div className="group relative inline-block">

              <button className="copy-btn bg-[#272525]" onClick={() => {

                onCopy();

                tooltipClicknHadler();

              }}>

                <FontAwesomeIcon icon={faCopy} className="text-white mr-2"/>

              </button>

              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tooltipState}</span>

            </div>

          </div>

        </div>
      
      </div>

    </>

  );

};

// Component Export:

export default PasswordInput;