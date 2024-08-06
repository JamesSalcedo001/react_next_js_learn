export default function Square() {
    return <button className="square">X</button>;
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

        


*/