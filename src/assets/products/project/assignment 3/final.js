/*function signature/sample */
function newPrice(currentPrice , discount ) {
   if(
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||    
    discount < 0 ||
    discount > 100
   ) 
   {
    return "Invalid";
   } 

   const discountAmount = (currentPrice * discount) / 100;
   const finalPrice = currentPrice - discountAmount;

   return finalPrice.toFixed(3);

}




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




/*function signature/sample */
function finalScore (omr) {
         if (typeof omr !== "object" || omr === null || Array.isArray(omr)) {
            return "Invalid";
         }

         const { right, wrong, skip } = omr;

         if (typeof right !== "number" || typeof wrong !== "number" || typeof skip !== "number"){
                return "Invalid"
            }

         if (right + wrong + skip !== 100) {
            return "Invalid";
         }  

            const score = right * 1 + wrong * -0.5 + skip * 0;
            return Math.round(score);
}




/*function signature/sample */
function gonoVote(array) {
          if(!Array.isArray(array)) {
            return "Invalid";
          }

          let haCount = 0;
          let naCount = 0;

          for (let vote of array) {
            if (vote === "ha"){
                haCount++;            
          } else if ( vote === "na"){
            naCount++;
          }
        }

          if (haCount > naCount) {
            return true;
          } else if (haCount === naCount){
            return "equal";
          } else {
            return false;
          }

}




/*function signature/sample */
function  analyzeText(str) {
          if (typeof str !== "string"){
            return "Invalid";
          }

          if (str.trim() == ""){
            return "Invalid";
          }

          const token = str.split(" ").join("").length;

          const words = str.trim().split(/\s+/);

          let longwords = words[0];
          for (let word of words) {
            if (word.length > longwords.length) {
                longwords = word;
            }
          }

          return { longwords, token };
}



