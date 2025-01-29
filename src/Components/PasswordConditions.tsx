// Component interface:

interface PasswordConditionsProps {

  conditions: {
    
    hasLowercase: boolean,
    
    hasUppercase: boolean,
    
    hasNumber: boolean,
    
    hasSymbol: boolean
  
  };

}

// Password Conditions Component:

const PasswordConditions: React.FC<PasswordConditionsProps> = ({ conditions }) => {
  
  // JSX Code:

  return (

    <>

      <div className="first-inner-wrapper-section flex flex-col space-y-2 mb-4">

        {['hasLowercase', 'hasUppercase', 'hasNumber', 'hasSymbol'].map((key, idx) => (

          <label key={idx} className="flex items-center space-x-2">
        
            <input type="checkbox" className="condition-checkbox text-indigo-600" checked={conditions[key as keyof typeof conditions]} readOnly/>
        
            <span className="checkbox-condition-text cursor-text text-white">
        
              {`${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
        
            </span>
        
          </label>
        
        ))}

      </div>

    </>

  );

};

// Component Export:

export default PasswordConditions;