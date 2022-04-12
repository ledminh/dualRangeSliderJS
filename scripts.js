const container = document.querySelector(".slidebar");

const handleHoverStyles = {
    backgroundColor: "blue"
}

const dualRangeSlidebar = createDualRangeSlideBar({
    containerElem: container,
    // wrapperStyles: wrapperStyles,
    // progressBarStyles: progressBarStyles,
    // handleStyles: handleStyles,
    min: 20,
    max: 100,
    step: 1,
});

function createDualRangeSlideBar({ containerElem, wrapperStyles, wrapperHoverStyles, 
                                    progressBarStyles, progressBarHoverStyles,
                                    handleLeftStyles, handleLeftHoverStyles, 
                                    handleRightStyles, handleRightHoverStyles,
                                    min, max, step}) {
    
    
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
        
    let Wrapper, ProgressBar, HandleLeft, HandleRight;
    
    
    const defaultWrapperStyle = {
        position: "relative",
        width: "100%",
        height: "20px"
    };

    const defaultWrapperHoverStyle = {};

    const defaultProgressBarStyle = {
        position: "absolute",
        left: "10%",
        backgroundColor: "rgb(31, 102, 102)",
        width: "50%",
        height: "100%"
    };

    const defaultProgressBarHoverStyle = {};

    const defaultHandleStyle = {
        position: "absolute",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "rgb(100, 11, 11)",
        boxShadow: "0 0 2px black",
        cursor: "pointer"
    };

    const defaultHandleHoverStyle = {
        boxShadow: "0 0 6px black",
        backgroundColor: "rgb(165, 18, 18)"
    };


    const defaultHandleLeftStyle = {
        left: "0",
        transform: "translateX(-50%) translateY(-10px)"
    }

    const defaultHandleLeftHoverStyle = {};


    const defaultHandleRightStyle = {
        left: "100%",
        transform: "translateX(-50%) translateY(-10px)"
    }

    const defaultHandleRightHoverStyle = {};

    /****************************************************
     * Private
     */
    
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
    


        /***********************************************/
        //PRIVATE METHODS
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


    function init() {
        [Wrapper, ProgressBar, HandleLeft, HandleRight] = createMainElements();

        assembleElements();
        addElementsToContainer();

        addStyles();
        addHoverStyles();
    }








    /****************************************************
     * Public
     */
    
    


    /****************************************************
     * Execution
     */
        init();



    return {

    }
}
