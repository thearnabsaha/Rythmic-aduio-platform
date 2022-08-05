import React,{useState} from 'react'
import Card from '../Components/Card'
import StepPhoneEmail from '../Pages/Steps/StepPhoneEmail'
import StepOtp from '../Pages/Steps/StepOtp'
const steps={
    1:StepPhoneEmail,
    2:StepOtp,
}

const Signin = () => {
    const [step, setStep] = useState(1)
    const Step = steps[step]
    const handleNext=()=>{
      if(step==2){
        setStep(2)
      }else{
        setStep(step+1)
      }
    }
    const handleBack=()=>{
      if(step==1){
        setStep(1)
      }else{
        setStep(step-1)
      }
    }
    return (
      <div>
          <Card>
            <Step/>
            <button onClick={handleNext}>Next</button>
            <button onClick={handleBack}>Back</button>
          </Card>
      </div>
    )
}

export default Signin