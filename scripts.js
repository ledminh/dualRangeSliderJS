/***********************************
 * DEFAULT SLIDEBAR
 */ 
  
const containerDefault = document.querySelector(".default-slidebar");


createDualRangeSlideBar({
    containerElem: containerDefault
})



/***********************************
 * CUSTOMIZED SLIDEBAR
 */
const containerCustomized = document.querySelector(".customized-slidebar");
const leftValueDisplay = document.querySelector(".left-value");
const rightValueDisplay = document.querySelector(".right-value");

const changeListenerCustomizedSlideBar = (value) => {
    console.log("Customized Slidebar: ", value);
}

const wrapperStyles = {
    borderRadius: "10px",
    boxShadow: "0 0 3px black"
}

const wrapperHoverStyles = {
    boxShadow: "0 0 6px black"
}

const progressBarStyles = {
    backgroundColor: "rgb(31, 78, 150)"
}

const handleStyle = {
    backgroundColor: "rgb(45, 179, 41)"
}


createDualRangeSlideBar({
    containerElem: containerCustomized,
    minUserDefined: 15,
    maxUserDefined: 200,
    stepUserDefined: 2,
    wrapperStyles: wrapperStyles,
    wrapperHoverStyles: wrapperHoverStyles,
    progressBarStyles: progressBarStyles,
    handleLeftStyles: handleStyle,
    handleRightStyles: handleStyle,
    leftValueDisplayUserDefined: leftValueDisplay,
    rightValueDisplayUserDefined: rightValueDisplay,
    userDefinedchangeListener: changeListenerCustomizedSlideBar
});
