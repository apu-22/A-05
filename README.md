# DevStack - Build Your Ideal Tech Stack

DevStack is a simple and modern web application where developers can explore technologies and build their own tech stack.

## Technologies Used

- React
- Vite
- TypeScript
- JSON
- Tailwind CSS
- React Toastify

## 3 Core Features

**1. Add Tech Item to Stack**
Users can add technology items to their stack.

**2. Remove Tech Item from Stack**
Users can remove technology items from their stack.

**3. Hamburger Menu in Navbar**
A hamburger menu is added to the navbar for mobile devices.

## React Questions & Answers

**i. What is JSX, and why is it used in React?**

Answer:
JSX means JavaScript XML.
It allows us to write HTML-like code inside JavaScript or TypeScript.
It makes React code easier to write and understand.

**ii. What is the difference between props and state?**

Answer:
Props are data passed from a parent component to a child component.
State is data managed inside a component.
When state changes, React updates the UI.

**iii. What does the useState hook do, and where did you use it in this project?**

Answer:
useState is used to store and update data in a React component.
In this project, I used it to store the selected technology items.
I also used it to open and close the hamburger menu.

**iv. What does the useEffect hook do, and why did you need it to load the JSON data?**

Answer:
useEffect is used to run code after the component renders.
I used it to load the technology data from the JSON file.
It helps me load the data when the component starts.

**v. Why does every item in a .map() list need a unique key prop?**

Answer:
React uses the key to identify each item in a list.
It helps React know which item was added, removed, or changed.
So, every item should have a unique key.

**vi. What is conditional rendering? Show one place you used it.**

Answer:
Conditional rendering means showing different UI based on a condition.
In my project, I used it for the empty stack message.

If the stack is empty, it shows "Your stack is empty."
If the stack has items, it shows the selected technologies.

**vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

Answer:
A parent sends data to a child using props.
A child can send data back by calling a function passed through props.

Simple way to remember:
Parent → Child = Props
Child → Parent = Callback function
