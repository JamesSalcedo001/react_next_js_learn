/*

note: Next.js is a flexible React framework that gives you the building blocks to create fast, full stack web applications

** building blocks of web apps

note: a few things to consider when building modern apps:

- user interface: how users will consume and interact with your app

- routing: how users navigate between diff parts of your app

- data fetching: where data lives and how to get it

- rendering: when and where you render static or dynamic content

- integrations: what third party services you use (for CMS, auth, payments, etc) and how you connect to them

- infrastructure: where you deploy, store, and run your app code (serverless, CDN, edge, etc)

- performance: how to optimize your app for end users

- scalability: how your app adapts to your team, data, and traffic grow

- dev experience: your team's experience building and maintaining your application

for each part of the app, you need to decide whether you will build a solution yourself or use other tools such as packages, libraries, and frameworks


** what is React?

note: React is a JS library for building interactive user interfaces

by user interfaces(UI) we mean elements that users see and interact with on screen

by library, we mean React provides helpful functions (API's) to build UI, but leaves it up to the dev where to use those functions in their app.

part of react's success is that it is relatively unopinionated about the other aspects of building apps. this has resulted in a flourishing ecosystem of third party tools and solutions including NExt.js

it also means there is some work put into building things from the ground up including configuring tools and reinventing solutions for common app reqs


** what is Next.js?

NExt.js is a react framework that gives building blocks to create web apps.

by framework, we mean next.js handles the tooling and config needed for React, and provides additional structure, features, and optimizations for your app.

you can use React to build your UI and then incrementally adopt NExt.js features to solve common app requirements such as routing, data fetching, and caching, all while improving the dev and end user exp.

you can use React and Next.js to build fully interactive, highly dynamic, and performant web apps





** rendering UI

to understand React, we need understanding of how browsers interpret code to create or render UI

when a user visits a web page, the server returns an HTML file to the browser

the browser then reads the HTML and constructs the Document Object Model (DOM)


**what is the DOM?


DOM is an object representation of the HTML elements. it acts as a bridge between code and the UI, and has a tree like structure with parent and child relationships


you can use DOM methods and JS, to listen to user events and manipulate the DOM by selecting, adding updating and deleting specific elements in the UI. DOM manip. allowws targeting of elements and changing the style and content




** updating UI with JS

start with creating an html file



** HTML vs DOM

if you look at the DOM elems in dev tools, you notice the DOM includes the h1 elem, and the dom of the page is different from the source code - the original HTML file you created.

this is because the HTML represents the initial page content, whereas the DOM represents the updated page content, which was changed by the JS code written. 

updating the DOM with JS is powerful but verbose. with this approach, devs spend a lot of time writing instructions to tell the computer how it should do things. it would be pretty nice to describe what you want to show and let the computer figure out how to update the DOM.


** imperative vs declarative programming

the JS code is a good example of imperative programming. you're writing the steps for how the UI should be updated. but when it comes to building UI, a declarative approach is often preferred because it can speed up the dev process. instead of having to write the DOM methods, it would be helpful if devs were able to declare what they want to show

imperative programming is like giving the chef step by step instructions on how to make a pizza. 

declarative programming is like ordering a pizza without being concerned about the steps it takes to make the pizza.

React is a popular declarative library you can use to build UI

As a dev, you can tell Rect what you want to happen to the UI and React will figure out the steps of how to update the dom on your behalf.


** using react

load two react scripts from an external site called unpkg.com

react is the core library

react dom provides dom specific methods that enable you to use React with the DOM


React is a library that contains reusable snippets of code that perform tasks on your behalf



** React core concepts

3 core concepts of React 

Components

State

Props




** Components

UI can be broken down into smaller building blocks called components

components allow you to build self contained reusable snippets of code. think of them as lego bricks, you can take these bricks and combine them together to form larger structures. if you need to update UI, simply update specific component or brick



modularity allows code to be more maintainable as it grows bcause you can add update delete components without touching rest of app

nice thing about components is that they are just JS. 

creating components

in react components are functions inside script tag, create new funcion called header:

a component is a function that returns UI elems. inside the return statement of the function, you can write JSX



Components trees

you can keep nesting components to form component trees

ex: top level Homepage component could hold a Header, an Article, and Footer component

each of those components could also have their own child components and so on. 

the headr component could contain a Logo, Title, and Navigation component 

this modular format allows you to reuse components in different places inside your app

now since HomePage is now a top level component and you can pass it to the root.render() method


** displaying data with props

html elems have attributes that you can use to pass pieces of info that change the behavior of elements. ex: changing the src attribute of an <img> elem changes the image that is shown. changing the href attribute of an <a> tag changed the destination of the link. in the same way you can pass pieces of info as properties to React components called props. 

similar to JS functions, you can design components that accespt custom arguments(props) that change the components behavior or what is visibly shown when its rendered to the screen. then you can pass down these props from parent components to child components.

in React data flows down the component tree. this is referred to as one way data flow. state can be passed down from parent to child components as props.


** using props

in homepage component, you can pass custom title prop to the HEader component, just like you pass HTML attributes

since props is an object, you can use object destructuring to explicitly name the values of props inside your function params


if you open your browser you can see that <h1>title</h1> will just show up as the word title, not the prop passed down. this is because react thinks you intend to render the plain text string to the dom. you need a way to tell react this is a JS variable




** using variables in JSX


to use the title prop, add curly braces {} these are special JSX syntax that allows you to write regular JS inside JSX markup

using curly braces enables usage of javascript expressions(something that evaluates to a single value)

ex: object property with dot notation

    function Header(props) {
        return <h1>{props.title}</h1>;
    }


    a template literal

    function Header({ title }) {
        return <h1>{`Cool ${title}`}</h1>;
    }


    the returned value of a function

    function createTitle(title) {
        if (title) {
            return title;
        } else {
            return "Default Title"; 
        }
    }


    function HEader({ title }) {
        return <h1>{createTitle(title)}</h1>;
    }


    or ternary operators

    function Header({ title }) {
        return <h1>{title ? title : "Default Title"}</h1>;
    }



** iterating through lists

common to have data you need to show as a list. you can use array methods to manipulate tour data and generate UI elems that are identical in style but hold different pieces of info.


you can use the array.map() method to iterate over the array and use an arrow function to map a name to a list item

react needs somethng to uniquely identify items in an array so it knows which elemens to update in the dom

it is recommended to use ID so it is unique

*/