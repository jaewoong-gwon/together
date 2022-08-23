import React from "react";
import { Box, Container, Step, StepLabel, Stepper } from "@mui/material/";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import SignUpForm from "./SignUpForm";
import Terms from "./Terms";

function SignUp() {
  const steps = ["약관동의", "본인인증", "정보입력"];

  const [step, setStep] = useState(0);

  const HandleBack = () => {
    setStep(step - 1);
  };

  const HandleNext = () => {
    setStep(step + 1);
  };

  const MainPost = () => {
    if (step === 0) {
      return <Terms />;
    } else if (step === 1) {
      return <h1>정준원</h1>;
    } else if (step === 2) {
      return <SignUpForm />;
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h5">회원가입</Typography>
        <Stepper activeStep={step} sx={{ mt: 3 }}>
          {steps.map((step, index) => {
            return (
              <Step key={index}>
                <StepLabel>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Box sx={{ height: 400, mt: 5 }}>{MainPost()}</Box>
        <Box>
          <Button variant="contained" disabled={step === 0} onClick={HandleBack}>
            Back
          </Button>
          <Button variant="contained" onClick={HandleNext}>
            {step === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUp;
