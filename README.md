# Dual Range Slider JS

Dual range slider in vanila JS.

This slider has two handles, left and right. User can use mouse to drag these two handles to adjust left and right value.

## USAGE

Download file `dualRangeSlideBar.js` in this repo then using `<script>` tag to add it to your html file before your own js file.

## API

`createDualRangeSlideBar(options)`

Options is an object that must have at least one property, `containerElem`, which is the DOM Node that is defined by user and will contain the slidebar.

Other properties (optional):

* **leftValueDisplayUserDefined**: DOM Node that is defined by user and will contain the value on the left hand side of the slidebar.
* **rightValueDisplayUserDefined**: DOM Node that is defined by user and will contain the value on the right hand side of the slidebar.
* **wrapperStyles**: css styles of the wrapper, defined as a JS object.
* **wrapperHoverStyles**: css styles of the wrapper when it is hovered, defined as a JS object.
* **progressBarStyles**: css styles of the progress bar, defined as a JS object.
* **progressBarHoverStyles**: css styles of the progress bar when it is hovered, defined as a JS object.
* **handleLeftStyles**: css styles of the left handle, defined as a JS object.
* **handleLeftHoverStyles**: css styles of the left handle when it is hovered, defined as a JS object.
* **handleRightStyles**: css styles of the right handle, defined as a JS object.
* **handleRightHoverStyles**: css styles of the right handle when it is hovered, defined as a JS object.
* **minUserDefined**: minimum value (at the left end) of the slide bar.
* **maxUserDefined**: maximum value (at the right end) of the slide bar.
* **stepUserDefined**: the smallest increase or decrease interval.
* **valueLeftUserDefined**: left value, or position of the left handle initially.
* **valueRightUserDefined**: right value, or position of the right handle initially.
* **changeListener**: listener to change. It has one parameter which is a `{valueLeft, valueRight}` object.

## DEMO

https://codepen.io/ledminh-the-lessful/pen/popORGW
