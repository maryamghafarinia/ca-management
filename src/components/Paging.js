import React from "react"; 
import Button from "@material-ui/core/Button"; 
import { useTheme } from "@material-ui/core/styles"; 
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"; 
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"; 
import MobileStepper from "@material-ui/core/MobileStepper"; 
  
const Pagination = ({index , totalItems , onForwardButton , onPreviousButton}) => { 
  const theme = useTheme(); 
  const PageItems = 10;
  const steps = Math.ceil(totalItems / PageItems);
  return ( 
    <div> 
      <MobileStepper 
        steps={steps} 
        variant="dots"
        style={{ 
           flexGrow: 1, 
        //   maxWidth: 400, 
        }} 
        activeStep={index} 
        position="static"
        nextButton={ 
          <Button size="small" 
                  onClick={onPreviousButton}  
                  disabled={index === steps - 1}> 
            Next 
            {theme.direction !== "rtl" ? ( 
              <KeyboardArrowRight /> 
            ) : ( 
              <KeyboardArrowLeft /> 
            )} 
          </Button> 
        } 
        backButton={ 
          <Button size="small" 
                  onClick={onForwardButton}  
                  disabled={index === 0}> 
            {theme.direction !== "rtl" ? ( 
              <KeyboardArrowLeft /> 
            ) : ( 
              <KeyboardArrowRight /> 
            )} 
            Back 
          </Button> 
        } 
      /> 
    </div> 
  ); 
}; 
  
export default Pagination; 