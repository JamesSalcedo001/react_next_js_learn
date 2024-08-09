



// use DOM method getElementByID to select the div elem by its id 
 

// use DOM methods to create a new h1 elem



// instead of directly manipulating the DOM with plain JS, remove DOM methods, and add ReactDOM.createRoot() method to target a specific dom element and create a root to display your React components in. then add the root.render() method to render your React code to the DOM this will tell React to render our h1 title inside our #app elem





// ** what is JSX? 

// JSX is a syntax extension for JS that allows you to describe the UI in a familiar HTMLLike syntax. JSX is very similar to JS + HTML apart from 3 JSX rules


// but browsers dont understand JSX out the box so one needs a JS compiler such as Babel, to transform JSX code into regular JS.

// add babel to project







// ** Nesting components

// you can nest React components inside eachother like you would regular HTML elems. 

// ex: above we create a new component HomePage ^^

// and then nest the Header comp inside the new Homepage component ^^


// console.logging props shows that it is an object with a title property
