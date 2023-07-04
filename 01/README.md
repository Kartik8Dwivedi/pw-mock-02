Positioning represents one of the fundamental concepts of CSS, apart from floats and the display property, and is used to build rich CSS layouts.
The position property helps place elements in a specific position within their containers or above other elements such as a tag on top of an image. 
The position property takes five values and they are static, relative, absolute, fixed and inherit. Offset properties top, left, bottom and right are 
used in conjunction with the position property to specifically hone an element’s position in the page. Let’s take a look at these properties in detail 
along with some examples.

`Static`: This is the default value of all elements. Static means they appear in the same order as specified in the HTML file. It is important to remember
that the offset properties cannot be applied to a static element but can be applied to all other values.

`Relative`: When you apply the relative value to an element along with the offset properties, the element will be moved relative to it’s original position 
in the markup. But, just like static, they are still part of the normal flow of the document, meaning surrounding elements are not affected by the 
relative positioned element.

`Absolute`: What if you want to take an element out of the normal flow and define it’s starting point on the page? In this case, absolute value is your best 
bet. Absolute works very differently when compared with relative and static.

`Fixed`: Fixed elements literally fixes the element at the top of the browser window. When you scroll down the page, the element will always be visible at the 
top of the window. All offset properties can be applied to the fixed element as well and other elements in the page will take up the original position of the 
fixed element just like how it works with absolutely positioned elements. Fixed is commonly used for header or footer navigation menu. Fixed positioning will 
not work if you do not provide the top offset value.

`Inherit`: Inherit value will enable the element to inherit the position value of the parent element.
For code examples, checkout the attached files by running th live server
