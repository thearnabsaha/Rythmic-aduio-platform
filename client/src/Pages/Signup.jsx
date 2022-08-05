import React,{useState} from 'react'
import Card from '../Components/Card'
import StepPhoneEmail from '../Pages/Steps/StepPhoneEmail'
import StepOtp from '../Pages/Steps/StepOtp'
import StepName from '../Pages/Steps/StepName'
import StepAvatar from '../Pages/Steps/StepAvatar'
import StepUsername from '../Pages/Steps/StepUsername'
const steps={
    1:StepPhoneEmail,
    2:StepOtp,
    3:StepName,
    4:StepAvatar,
    5:StepUsername
}


const Signup = () => {
  const [step, setStep] = useState(1)
  const Step = steps[step]
  const handleNext=()=>{
    if(step==5){
      setStep(5)
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

export default Signup