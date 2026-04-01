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


