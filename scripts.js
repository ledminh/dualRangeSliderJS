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
    changeListener: changeListenerCustomizedSlideBar
});

function createDualRangeSlideBar({ containerElem, 
                                    leftValueDisplayUserDefined, rightValueDisplayUserDefined, 
                                    wrapperStyles, wrapperHoverStyles, 
                                    progressBarStyles, progressBarHoverStyles,
                                    handleLeftStyles, handleLeftHoverStyles, 
                                    handleRightStyles, handleRightHoverStyles,
                                    minUserDefined, maxUserDefined, stepUserDefined,
                                    valueLeftUserDefined, valueRightUserDefined,
                                    changeListener}) {
    
    
    /*******************************************************
     * Properties/Variables
     */
    
    const userDefinedWrapperStyle = wrapperStyles? wrapperStyles: {},
        userDefinedWrapperHoverStyle = wrapperHoverStyles? wrapperHoverStyles: {},
        userDefinedProgressBarStyle = progressBarStyles? progressBarStyles: {},
        userDefinedProgressBarHoverStyle = progressBarHoverStyles? progressBarHoverStyles: {},
        userDefinedHandleLeftStyle = handleLeftStyles? handleLeftStyles: {},
        userDefinedHandleLeftHoverStyle = handleLeftHoverStyles? handleLeftHoverStyles: {},
        userDefinedHandleRightStyle = handleRightStyles? handleRightStyles: {},
        userDefinedHandleRightHoverStyle = handleRightHoverStyles? handleRightHoverStyles: {};
    

    const min = (minUserDefined && minUserDefined < maxUserDefined)? minUserDefined : 0,
            max = (maxUserDefined && minUserDefined < maxUserDefined)? maxUserDefined: 100,
            step = (stepUserDefined && stepUserDefined > 0)? stepUserDefined: 1,
            numSteps = Math.floor((max - min)/step);


    let valueLeft = (valueLeftUserDefined && valueLeftUserDefined <= valueRightUserDefine - step)? valueLeftUserDefined : Math.floor(numSteps*0.2),
            valueRight = valueRightUserDefined? valueRightUserDefined : Math.floor(numSteps*0.7);

    let Wrapper, ProgressBar, HandleLeft, HandleRight, leftValueDisplay, rightValueDisplay;
    
    
    const defaultWrapperStyle = {
        position: "relative",
        width: "100%",
        height: "20px",
        border: "5px solid black"
    };

    const defaultWrapperHoverStyle = {};

    const defaultProgressBarStyle = {
        position: "absolute",
        backgroundColor: "rgb(31, 102, 102)",
        height: "100%"
    };

    const defaultProgressBarHoverStyle = {};

    const defaultHandleStyle = {
        position: "absolute",
        
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        backgroundColor: "rgb(100, 11, 11)",
        boxShadow: "0 0 2px black",
        cursor: "pointer",
        zIndex: "100000",

        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "20px"

    };

    const defaultHandleHoverStyle = {
        boxShadow: "0 0 6px black",
        backgroundColor: "rgb(165, 18, 18)",
        zIndex: "100001"
    };

    const defaultHandleLeftStyle = {
        left: "0px",
        transform: "translateX(-50%) translateY(-10px)"
    }

    const defaultHandleLeftHoverStyle = {};


    const defaultHandleRightStyle = {
        left: "100%",
        transform: "translateX(-50%) translateY(-10px)"
    }

    const defaultHandleRightHoverStyle = {};

    
    
    /***********************************************/
    //UTILITIES
    /**********************************************/
    const createDiv = (className) => {
        const div = document.createElement('div');
        div.classList.add(className);

        return div;
    }
        
    function addStylesTo(elem, styles) {
        for(const style in styles) {
            if (styles.hasOwnProperty.call(styles, style)) {
                elem.style[style] = styles[style];
                
            }
        }
    }

    function removeAllStyles(elem) {
        elem.removeAttribute('style');
    }
    

    const fromValueToPercent = (val) => (val - min)*100/(max - min); 

    
    /***********************************************/
    //METHODS
    /**********************************************/

    function createMainElements() {
        const Wrapper = createDiv("wrapper");
        const ProgressBar = createDiv("progress-bar");
        const HandleLeft = createDiv("handle-left");
        const HandleRight = createDiv("handle-right");

        return [
            Wrapper,
            ProgressBar,
            HandleLeft,
            HandleRight
        ]
    }

    function assembleElements(){
        ProgressBar.appendChild(HandleLeft);
        ProgressBar.appendChild(HandleRight);
        Wrapper.appendChild(ProgressBar);    

    }

    function addElementsToContainer() {
        containerElem.appendChild(Wrapper);
    }

    function addStyles() {
        addStylesTo(Wrapper, defaultWrapperStyle);
        addStylesTo(Wrapper, userDefinedWrapperStyle);

        addStylesTo(ProgressBar, defaultProgressBarStyle);
        addStylesTo(ProgressBar, userDefinedProgressBarStyle);

        addStylesTo(HandleLeft, defaultHandleStyle);
        addStylesTo(HandleLeft, defaultHandleLeftStyle);
        addStylesTo(HandleLeft, userDefinedHandleLeftStyle);

        addStylesTo(HandleRight, defaultHandleStyle);
        addStylesTo(HandleRight, defaultHandleRightStyle);
        addStylesTo(HandleRight, userDefinedHandleRightStyle);
    }

    function addHoverStyles() {
        Wrapper.addEventListener('mouseover', (e) => {
            addStylesTo(Wrapper, defaultWrapperHoverStyle);
            addStylesTo(Wrapper, userDefinedWrapperHoverStyle);    
        });


        Wrapper.addEventListener("mouseleave", (e) => {
            removeAllStyles(Wrapper);

            addStylesTo(Wrapper, defaultWrapperStyle);
            addStylesTo(Wrapper, userDefinedWrapperStyle);

        });

        ProgressBar.addEventListener('mouseover', (e) => {
            addStylesTo(ProgressBar, defaultProgressBarHoverStyle);
            addStylesTo(ProgressBar, userDefinedProgressBarHoverStyle);
        }); 

        ProgressBar.addEventListener("mouseleave", () => {
            removeAllStyles(ProgressBar);

            addStylesTo(ProgressBar, defaultProgressBarStyle);
            addStylesTo(ProgressBar, userDefinedProgressBarStyle);

            setProgressBarValues();
    
        });


        HandleLeft.addEventListener('mouseover', () => {
            addStylesTo(HandleLeft, defaultHandleHoverStyle);
            addStylesTo(HandleLeft, defaultHandleLeftHoverStyle);
            addStylesTo(HandleLeft, userDefinedHandleLeftHoverStyle);
        

        }); 

        HandleLeft.addEventListener("mouseleave", () => {
            removeAllStyles(HandleLeft);

            addStylesTo(HandleLeft, defaultHandleStyle);
            addStylesTo(HandleLeft, defaultHandleLeftStyle);
            addStylesTo(HandleLeft, userDefinedHandleLeftStyle);
        });

        HandleRight.addEventListener('mouseover', () => {
            addStylesTo(HandleRight, defaultHandleHoverStyle);
            addStylesTo(HandleRight, defaultHandleRightHoverStyle);
            addStylesTo(HandleRight, userDefinedHandleRightHoverStyle);
        }); 

        HandleRight.addEventListener("mouseleave", () => {
            removeAllStyles(HandleRight);

            addStylesTo(HandleRight, defaultHandleStyle);
            addStylesTo(HandleRight, defaultHandleRightStyle);
            addStylesTo(HandleRight, userDefinedHandleRightStyle);
        });
    }

    const fromPosXToPercent = (posX) => {
        const WrapperBox = Wrapper.getBoundingClientRect();
        const wrapperLength = WrapperBox.right - WrapperBox.left;

        return (posX - WrapperBox.left)*100/wrapperLength;
    }

    const fromPercentToValue = (percent) => {
        const range = max - min,
                offset = range*percent/100;

        return min + offset;
    }

    function roundValue(value) {
        const currentStep = Math.floor((value - min)/step);

        return min + currentStep*step;
    }   
    
    
    function addDraggingFeature(Handle, handleSide){
        
        Handle.onmousedown = (e) => {                        
            
            const onMouseMove = (mouseMoveEvent)  => {
                const percent = fromPosXToPercent(mouseMoveEvent.clientX);
                if(handleSide === 'LEFT'){
                    let value = fromPercentToValue(percent);
                    value = roundValue(value);

                    if(value >= min && value <= valueRight - step){
                        valueLeft = value;
                        ProgressBar.style.left = percent + "%";
                    }
                }
                else if(handleSide === "RIGHT"){
                    
                    let value = fromPercentToValue(percent);
                    value = roundValue(value);

                    if(value <= max && value >= valueLeft + step){
                        valueRight = value;
                        ProgressBar.style.right = (100 - percent) + "%";
                    }
                
                }

                setValuesDisplay();

                changeListener({
                    valueLeft: valueLeft,
                    valueRight: valueRight
                });


                
            };

            document.addEventListener('mousemove', onMouseMove);

            document.onmouseup = () => {
                document.removeEventListener('mousemove', onMouseMove);
                Handle.onmouseup = null;
            }

            Handle.ondragstart = () => false;

        }
    }

    
    function setProgressBarValues() {
        const percentLeft = fromValueToPercent(valueLeft);
        ProgressBar.style.left = percentLeft + "%";


        const percentRight = fromValueToPercent(valueRight);
        ProgressBar.style.right = (100 - percentRight) + "%";
    }


    function setValuesDisplay() {
        leftValueDisplay.innerText = valueLeft;
        rightValueDisplay.innerText = valueRight;
    }

    function init() {
        [Wrapper, ProgressBar, HandleLeft, HandleRight] = createMainElements();

        leftValueDisplay = leftValueDisplayUserDefined? leftValueDisplayUserDefined : HandleLeft;
        rightValueDisplay = rightValueDisplayUserDefined? rightValueDisplayUserDefined : HandleRight;

        assembleElements();
        addElementsToContainer();

        addStyles();
        addHoverStyles();

        
        setProgressBarValues();

        addDraggingFeature(HandleLeft, "LEFT");
        addDraggingFeature(HandleRight, "RIGHT");

        setValuesDisplay();

 
    }








    
    


    /****************************************************
     * Execution
     */
        init();




}
