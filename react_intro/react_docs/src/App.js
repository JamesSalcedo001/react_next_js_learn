import { useState } from "react";

function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue("X");
    }

    return (
        <button
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}


export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>

            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>

            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        
        </>
    );
};




/* 

** Creating and nesting components



React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. a component can be as small as a button, or as large as an entire page. React components: JavaScript functions that return markup:


ex:

    // declaring a button

    function MyButton() {
        return (
            <button>I'm a button</button>
        )
    }



    // nesting a button into another component

    export default function MyApp() {
        return (
            <div>
                <h1>Welcome to my app</h1>
                <MyButton />
            </div>
        );
    }


    // note: React component names start with capital letter, while HTML tags must be lowwercase

    // note: The export default keywords specify the main component in the file.


** writing markup with JSX

    this markup syntax is called JSX. It is optional, but most React projects use JSX for convenience.
    
    JSX is stricter than HTML. You have to close tags like <br />. component also cant return multiple JSX tags. you have to wrap them in shared parent, like a <div></div> or <></> wrapper.

    ex: 
        function AboutPage() {
            return (
                <>
                    <h1>About</h1>
                    <p>Hello there. <br />How do you do?</p>
                </>
            );
        }

        if you have to port a lot of HTML to JSX, you can use an online coverter


** Adding styles

    React specify a CSS class with className. works the same way as the HTML class attribute
    
    <img className="avatar" />


    then write the CSS rules for it in a separate CSS file:

    // styles.css

    .avatar {
        border-radius: 50%;
    }

    notes: React does not prescribe how to add CSS files. In simplest case, you'll add <link> tga to HTML. If using a build tool or framework, one must consult documentation to learn how to add CSS file to project.


** Displaying data

    JSX lets you put markup into JS. Curly braces let you escape back into JS so that you can embed some variable from your code and display it to the user. for example this displays user.name:

    return (
        <h1>
            {user.name}
        </h1>
    )

    you can also escape into JS from JSX attributes, but you have to use curly braces instead of quotes. EX: className="avatar" passes the "avatar" string as the CSS class, but src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute


    return (
        <img 
            className="avatar"
            src={user.imageUrl}
        />
    );



    note: you can put more complex expressions inside the JSX curly braces too, like string concatenation:

    ex: 


        const user = {
            name: "Hedy Lamarr",
            imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
            imageSize: 90
        }

        export default function Profile() {
            return (
                <>
                    <h1>{user.name}</h1>
                    <img 
                        className="avatar"
                        src={user.imageUrl}
                        alt={"Photo of " + user.name}
                        style={{
                            width: user.imageSize,
                            height: user.imageSize
                        }}
                    />
                </>
            );
        }


        in the example, style={{}} is a regular object inside the style={ } JSX curly braces. you can use the style attribute when your styles depend on JS variables


** conditional rendering


        use same JS techniques for conditional rendering in React, for example, if statement to conditionally include JSX


        ex: 

            let content;
            if (isLoggedIn) {
                content = <AdminPanel/>;
            } else {
                content = <LoginForm />; 
            }

            return (
                <div>
                    {content}
                </div>
            );


            note: one can also use the ternary operator but inside the curly braces:

            ex:

                <div>
                    {isLoggedIn ? (
                        <AdminPanel />
                    ) : (
                        <LoginForm /> 
                    )}
                </div>

            note: if the else branch is not necessary, one can use the logical && syntax:

            ex:

                <div>
                    {isLoggedIn && <AdminPanel />}
                </div>


            note: all of these can also be used to conditionally specify attributes as well

** rendering lists
           
           to render lists of components, you relay on JS features like the for loop and array map() function

           ex: you have an array of products

                const products = [
                    { title: "cabbage", id: 1},
                     { title: "garlic", id: 2},
                      { title: "apple", id: 3},
                ];

            note: inside your component, use map function to transform array of products into an array of <li> items:

            ex:

                const listItems = products.map(product => 
                    <li key={product.id}>
                        {product.title}
                    </li>
                )

                return (
                    <ul>{listItems}</ul>
                )

            note: notice <li> has a key attribute. for each item in a list, you should pass a string or number that uniquely identifies that item among its siblings. usually a key should be coming from your data, such as a database id. react uses your keys to know what happened if you later insert delete or reorder the items.


            ex:
                const products = [
                    { title: "cabbage", isFruit: false, id: 1 },
                    { title: "garlic", isFruit: false, id: 2 },
                    { title: "apple", isFruit: true, id: 3 },
                ];

                export default function ShoppingList() {
                    const listItems = products.map(product => 
                        <li
                            key={product.id}
                            style={{
                                color: product.isFruit ? "magenta" : "darkgreen"
                            }}
                        >
                        {product.title}
                        </li>    
                    );

                    return (
                        <ul>{listItems}</ul>
                    )
                }


** responding to events


you can use event handler functions inside your components

ex:

    function MyButton() {
        function handleClick() {
            alert("You clicked me!");
        }

        return (
            <button onClick={handleClick}>
                Click Me
            </button>
        );
    }

    note: notice how onClick={handleClick} has not parentheses at the end. do not call the event handler function; you only need to pass it down. React will call your event handler when the user clicks the button


** updating the screen

    note: you'll often want your component to remember some info and display it. ex: maybe you want to count the number of times a button is clicked. to do this, add state to your component. 

    first import useState from React:

    ex: import { useState } from "react";

    now you can declare a state variable inside your component:

    ex: function MyButton() {
        const [count, setCount] = useState(0);
    }

    notes: you get two things from useState: the current state (count), and the function that lets you update it (setCount). you can give them any names, but the convention is to write [something, setSomething].

    the first time the button is displayed, count will be 0 because you passed 0 to useState(). when you want to change state, call setCount() and pass the new value to it. clicking this button will increment the counter:

    ex:

        function MyButton() {
            const [count, setCount] = useState(0);

            function handleClick() {
                setCount(count + 1)
            }

            return (
                <button onClick={handleClick}>
                Clicked {count} times
                </button>
            )
        }


        note: React will call your component function again, this time count will be 1, then 2, etc.

        note: if you render the same component multiple times, each will get it's own state. click each button separately with this:

       ex:
            import { useState } from "react";
            
            export default funcction MyApp() {
                return (
                    <div>
                        <h1>Counter that update separately</h1>
                        <MyButton />
                        <MyButton />
                    </div>
                );
            }



            function MyButton() {
                const [count, setCount] = useState(0);

                function handleClick() {
                    setCount(count + 1);
                }

                return (
                    <button onClick={handleClick}>
                    Clicked {count} times
                    </button>
                )
            }





** using hooks

note: functions starting with use are called Hooks. useState is a built in Hook provided by React. You can write your own hooks by combining the existing ones as well.

note: hooks are more restrictive than other functions. you can only call hooks at the top of your components or other hooks. if you want to use useState in a condition or a loop, extract a new component and put it there.



** sharing data between components

note: in previous example each MyButton had its own independent count and when each button was clicked, only the count for the button clicked changed. 

note: however you'll often need components to share data and always update together.

note: to make both mybutton components display the same count and update together, you need to move the state from the individual buttons upwards to the closest component containing them, the parent component.

ex: for MyApp

    note: initially MyApp's count state is 0 and is passed down to both children
    
    note: on click, MyApp updates its count state to 1 and passes it down to both children


note: now when either button is clicked, the count in MyApp will change both Mybutton counts simultaneously

ex: first move the state up from MyButton into MyApp:

    export default function MyApp() {
        const [count, setCount] = useState(0);

        function handleClick() {
            setCount(count + 1);
        }

        return (
            <div>
                <h1>Counters that update separately</h1>
                <MyButton />
                <MyButton />
            </div>
        );
    }

    function MyButton() {
        // moving code from here ...
    }

    ex2: then pass the state down from MyApp to each MyButton, together with the shared click handler. you can pass info to MyButton using the JSX curly braces, just like previously done with built in tags like <img />:


        export default function MyApp() {
            const [count, setCount] = useState(0);

            function handleClick() {
                setCount(count + 1);
            }


            return (
                <div>
                    <h1>Counters that update together</h1>
                    <MyButton count={count} onClick={handleClick}/>
                    <MyButton count={count} onClick={handleClick}/>
                </div>
            )
        }


        note: the info you pass down like this is called props. now the MyApp component contains the count state and the handleClick event handler, and passes both of them down as props to each of the buttons. finally change MYButton to read the props you passed from its parent component:

        ex:

            function MyButton({ count, onClick }) {
                return (
                    <button onClick={onClick}>
                        Clicked {count} times
                    </button>
                )
            }


        note: when button is clicked, onClick handler fires. each button's onClick prop was set to the handleClick function inside MyApp, so the code inside of it runs. that code calls setCount(count + 1), incrementing the count state variable. the new count value is passed as a prop to each button, so they all show the new value. this is called lifting state up. by moving state up, you've shared it between components.


        ex:

            import { useState } from "react";

            export default function MyApp() {
                const [count, setCount] = useState(0);

                function handleClick() {
                    setCount(count + 1);
                }

                return (
                    <div>
                        <h1>Counters that update together</h1>
                        <MyButton count={count} onClick={handleClick}/>
                        <MyButton count={count} onClick={handleClick}/>
                    </div>
                );
            }



** tic tac toe section notes

note: a component is a piece of reusable code that represents a part of a user interface. components are used to render, manage, and update the UI elements in your application. 

note: the code at the top of this page defines a function called Square. the export JS keyword makes this function accessible outside this file. the default keyword tells other files using your code that its the main function in your file.



note: the second line returns a button. the return JS keyword means whatever comes after is returned as a value to the caller of the function. <button> is a JSX element. a JSX element is a combination of JS code and HTML tags that describes what you'd like to display. className="square" is a button property or 'prop' that tells CSS how to style the button. X is the text displayed inside the button and </button> closes the JSX element to indicate any following content shouldn't be placed inside the button. 


the index.js file here is the bridge between the component created in App.js and the web browser. 


lines 1-5 bring all the necessary pieces together: 

- React
- React's library to talk to web browsers(ReactDOM)
- the styles for components
- the component created in App.js

note: the remainder of the file brings all the pieces together and injects the final product into index.html in the public folder

note: React components need to retur a single JSX element and not multiple adjacent JSX elements like two buttons. to fix this you can use Fragments to wrap multiple adjacent JSX elements


** passing data through props

we want to chage the value of squares from empty to X when the user clicks on the square. currently, the way this board is built requires you to use the same kind of code to update the square 9 times. instead of copy-pasting, react's component architecture allows you to create a reusable component to avoid messy duplicated code. 

note: using the new code where one reuses the Square components, one can use props to pass the value each square should have from the parent component (Board) to its child (Square)

note: function Square({ value }) indicates the square comp can be passed a prop called value

note: to 'remember' things, components use state. React provides a special function called useState that you can call from your component to let it 'remember' things. we will store the current value of the square in state, and change it when the square is clicked

import usestate at the top of the file. remove the value prop from the square component. instead, add a new line at the start of the square that calls usestate. have it return a state variable called value.





note: below, value stores the value and setalue is a function that can be used to change the value. the null passed to usestate is used as the initial value for this state variable, so value here starts off equal to null



const [value, setValue] = useState(null);



*/