export default function Square() {
    return <button className="square">X</button>;
};



// Creating and nesting components

/* React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. a component can be as small as a button, or as large as an entire page. React components: JavaScript functions that return markup:


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


    // writing markup with JSX

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


    // Adding styles

    React specify a CSS class with className. works the same way as the HTML class attribute
    
    <img className="avatar" />


    then write the CSS rules for it in a separate CSS file:

    // styles.css

    .avatar {
        border-radius: 50%;
    }

    notes: React does not prescribe how to add CSS files. In simplest case, you'll add <link> tga to HTML. If using a build tool or framework, one must consult documentation to learn how to add CSS file to project.


*/