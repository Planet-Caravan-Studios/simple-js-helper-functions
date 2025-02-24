
/* ===== ================= ===== */
/* ===== If Element Exists ===== */
/* ===== ================= ===== */
    function doesElementExist(selector) {
        return document.querySelector(selector) !== null;
    }


    // Usage examples:
    console.log(doesElementExist('#myElement')); // Returns true if an element with ID "myElement" exists
    console.log(doesElementExist('.myClass')); // Returns true if an element with class "myClass" exists

/* ===== ================= ===== */
/* ===== If Element Exists ===== */
/* ===== ================= ===== */
    function checkElementInstances(selector) {
        const elements = document.querySelectorAll(selector);
        const count = elements.length;
    
        if (count === 0) {
            return count;
        } else if (count === 1) {
            return count;
        } else {
            return count;
        }
    }
    
    // Usage examples:
    console.log(checkElementInstances('#myElement')); // Returns 'One element found' if one element with ID "myElement" exists
    console.log(checkElementInstances('.myClass')); // Returns 'X elements found' where X is the number of elements with class "myClass"
    


/* ===== ==================================== ===== */
/* ===== Get Viewport Size in Absolute Pixels ===== */
/* ===== ==================================== ===== */
    function convertViewportToPixels(value) {
        // Check if the value ends with 'vw' or 'vh'
        const unit = value.slice(-2);
        const number = parseFloat(value);

        if (isNaN(number) || (unit !== 'vw' && unit !== 'vh')) {
            throw new Error('Invalid input. Please provide a value with "vw" or "vh" units.');
        }

        if (unit === 'vw') {
            // Calculate pixels based on viewport width
            return (number / 100) * window.innerWidth;
        } else if (unit === 'vh') {
            // Calculate pixels based on viewport height
            return (number / 100) * window.innerHeight;
        }
    }

    // Example usage:
        //const vwValueInPixels = convertViewportToPixels('50vw');
        //const vhValueInPixels = convertViewportToPixels('50vh');

        //console.log(vwValueInPixels);  // Returns the pixel value equivalent to 50vw
        //console.log(vhValueInPixels);  // Returns the pixel value equivalent to 50vh

/* ===== =================== ===== */
/* ===== Timestamp Functions ===== */
/* ===== =================== ===== */
    function getCurrentTimestamp() {
        return Date.now();
    }
    
    // Usage example:
    console.log(getCurrentTimestamp()); // Returns the current timestamp in milliseconds

    function isTimestampOlderThanXDays(previousTimestamp, days) {
        const millisecondsInADay = 86400000; // 1000 ms * 60 s * 60 min * 24 hours
        const currentTimestamp = getCurrentTimestamp();
        const differenceInMilliseconds = currentTimestamp - previousTimestamp;
        
        return differenceInMilliseconds > (days * millisecondsInADay);
    }
    
    // Usage example:
    const previousTimestamp = Date.now() - (5 * 86400000); // Simulates a timestamp from 5 days ago
    const days = 7;
    
    console.log(isTimestampOlderThanXDays(previousTimestamp, days)); // Returns false if the previous timestamp is less than 7 days old
    
        
/* ===== ==================================== ===== */
/* ===== Main Function - URL Parameter Logger ===== */
/* ===== ==================================== ===== */
function parameterLogger(param) {
    var searchParams = new URLSearchParams(window.location.search); 
    var paramValue = "";
    var state = "";

    if(searchParams.has(param)) {
      //if parameters are present in URL
      state = "url";
      paramValue = searchParams.get(param);
      sessionStorage.setItem(param, paramValue);
      localStorage.setItem(param, paramValue);
    }else if(sessionStorage.getItem(param)){
      //if parameters are not present in URL, but are in SessionStorage
      state = "shortTerm";
      paramValue = sessionStorage.getItem(param);
    }else if(localStorage.getItem(param)){
      //if parameters are not present in URL or SessionStorage, but are in LocalStorage
      utm_state = "longTerm";
      paramValue = localStorage.getItem(param);
    }
    //console.log("UTM detected: "+param+": "+paramValue+", utm_state: "+utm_state);

    //NOTES:
    //paramValue: actual value of the UTM
    //utm_state: context state of the individual value

    //return paramValue;
    return {paramValue, state};
  };