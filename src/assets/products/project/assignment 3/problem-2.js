/*function signature/sample */
function validOtp(otp) {
         if (typeof otp !== "string"){
            return "Invalid";
         }

         if (otp.length === 8 && otp.startsWith("ph-")){
            return true;
         } else{
            return false;
         }
}

