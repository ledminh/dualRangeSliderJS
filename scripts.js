const Wrapper = document.querySelector(".slidebar .wrapper");
const ProgressBar = document.querySelector(".slidebar .progress-bar");
const Handle = document.querySelector(".slidebar .handle");



const dualRangeSlidebar = createDualRangeSlideBar({
    Wrapper: Wrapper,
    ProgressBar: ProgressBar,
    Handle: Handle,
    wrapperStyles: wrapperStyles,
    progressBarStyles: progressBarStyles,
    handleStyles: handleStyles,
    min: 20,
    max: 100,
    step: 1,
});

function createDualRangeSlideBar({Wrapper, ProgressBar, Handle, 
                                    wrapperStyles, progressbarStyles, handleStyles, 
                                    min, max, step}) {
    /****************************************************
     * Execution
     */
    
    init();


    /****************************************************
     * Private
     */
    function init() {
        addStyleTo(Wrapper, defaultWraperStyle);
        addStyleTo(Wrapper, userDefinedWraperStyle);

        addStyleTo(ProgressBar, defaultProgressBarStyle);
        addStyleTo(ProgressBar, userDefinedProgressBarStyle);

        addStyleTo(Handle, defaultHandleStyle);
        addStyleTo(Handle, userDefinedHandleStyle);
    }








    /****************************************************
     * Public
     */
    
    





    return {

    }
}
