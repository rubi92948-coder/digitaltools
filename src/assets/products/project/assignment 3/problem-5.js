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



