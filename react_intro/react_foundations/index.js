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





*/