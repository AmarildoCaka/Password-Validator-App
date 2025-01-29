// Component Interface:

interface PasswordStrengthDisplayProps {

  strengthLabel: string;

  conditions: {
    
    hasLowercase: boolean,
    
    hasUppercase: boolean,
    
    hasNumber: boolean,
    
    hasSymbol: boolean
  
  };

}

// Password Strength Component:

const PasswordStrengthDisplay: React.FC<PasswordStrengthDisplayProps> = ({ strengthLabel, conditions }) => {

  // JSX Code:

  return (

    <>

      <div id='password-strength-display-box-id' className='password-strength-display-box bg-[#272525] w-full'>

        <div className="second-inner-container flex flex-row justify-between place-items-center gap-x-2 w-full bg-[#171616dd] p-5">

          <p className="text-white font-semibold mr-4">PASSWORD STRENGTH:</p>

          <div className="flex flex-row justify-between place-items-center">

            <p className="text-white font-bold mr-4">{strengthLabel}</p>
        
            <div className="flex flex-row gap-x-2">
          
              {
              
                ['hasLowercase', 'hasUppercase', 'hasNumber', 'hasSymbol'].map((key, idx) => (
                
                  <div key={idx} className={`w-2 h-6 border border-white ${idx === 0 && conditions[key as keyof typeof conditions] ? 'bg-red-500': 
                    idx === 1 && conditions[key as keyof typeof conditions] ? 'bg-yellow-300': 
                    idx === 2 && conditions[key as keyof typeof conditions] ? 'bg-yellow-400': 
                    idx === 3 && conditions[key as keyof typeof conditions] ? 'bg-green-500' : 
                    'bg-black'}`}/>

                ))
              
              }

            </div>

          </div>
        
        </div>
      
      </div>

    </>

  );

};

// Component Export:

export default PasswordStrengthDisplay;