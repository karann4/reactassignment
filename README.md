1. Why you picked the particular framework?

JSX: JSX stands for JavaScript XML. Its an XML/ HTML like syntax used by React. With JSX, we can go a step further by again embedding the HTML code inside the JavaScript. This makes HTML codes easy to understand and boosts JavaScript’s performance while making our application robust.

Virtual DOM: Like an actual DOM, virtual DOM is also a node tree that lists the elements and their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It updates the DOM every time it gets changed.

Testing: Since we can manipulate with state of the components which we pass to the ReactJS view and take a look at the output and triggered actions, events, functions, etc. This makes React applications quite easy to test and debug.

Server Side REndering:  This allows you to pre-render the initial state of your react components at the server side only. With SSR, the server’s response to the browser becomes only the HTML of the page which is now ready to be rendered. Thus, the browser can now start rendering without having to wait for all the JavaScript to be loaded and executed. As a result, the webpage loads faster. 

2. What about that framework appealed to you?

I liked the concept of virtual DOM. The way react creates a copy of the actual DOM and makes changes with minimal effort, this is done by changing only the difference between the previous and next state.
The browser has to search, check, parse a rather large number of proprieties and values for each node. The modern browsers are all spectacularly fast and efficient at doing this, but problems arise when you try and manipulate a large number of nodes.
A part of the DOM bloat is legacy, but increasingly HTML5 contributes more to the bloat problem with new APIs and proprieties, and it’s only going to get worse. All of the shiny new features come at a cost, and web developers seem to ignore this cost.
It’s my opinion that React is a hack and it disguises the actual problem which is the browser DOM bloat.

3. What alternative frameworks did you consider?

AngularJS is one of the framework that can create Rich Internet Applications (RIA).
AngularJS provides developers an options to write client side applications using JavaScript in a clean Model View Controller (MVC) way.
Applications written in AngularJS are cross-browser compliant. AngularJS automatically handles JavaScript code suitable for each browser.
AngularJS is open source, completely free, and used by thousands of developers around the world. It is licensed under the Apache license version 2.0.
It is capable of creating Single Page Application in a very clean and maintainable way.
It provides data binding capability to HTML. Thus, it gives user a rich and responsive experience.
AngularJS provides reusable components.
With AngularJS, the developers can achieve more functionality with short code.
In AngularJS, views are pure html pages, and controllers written in JavaScript do the business processing.

4. What resources did you read/watch/listen to?

https://reactjs.org/docs/getting-started.html
https://www.youtube.com/watch?v=rALJykvIM-M&t=86s
https://www.youtube.com/watch?v=YZ07hXs8aNg
https://www.youtube.com/watch?v=Tk1Ju98J4Io

5. What kind of application did you make?

I created a fan website for Game of Thrones. Comtaining 6 hyperlinks to each of the houses, alongside a navigation bar and, a footer. The details of every house were rendered quickly as React did not have to reload the entire website, only the part of it where the text was changed. User's could also go back to the homepage even if they were on any webpage of the website. Bootsrap 4 was used to render the navbar, footer, jumbotron. 

