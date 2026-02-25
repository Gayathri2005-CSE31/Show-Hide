# Show-Hide
A simple React Show/Hide Text application built using the useState hook to demonstrate state management, conditional rendering, and dynamic styling.

🚀 React Show / Hide Text App

A simple and beginner-friendly React application that demonstrates how to toggle text visibility using the useState hook.
This project focuses on understanding state management, conditional rendering, and dynamic styling in React.

📌 Project Overview

The Show / Hide Text App allows users to toggle the visibility of text using a button or toggle switch.

When:

🟢 Toggle is ON → Text is displayed

🔴 Toggle is OFF → Text is hidden

The UI updates automatically whenever the state changes.

This project is designed to strengthen React fundamentals and improve understanding of how components re-render based on state.

✨ Features

Toggle button to show or hide text

Dynamic color change based on state

Conditional rendering

useState hook usage

Clean and centered layout

Responsive design

🧠 Concepts Covered
1️⃣ Functional Components

The entire application is built using a React functional component.

2️⃣ useState Hook
const [isVisible, setIsVisible] = useState(false);

isVisible → Stores the current visibility state

setIsVisible → Updates the state

Initial value → false (text hidden)

3️⃣ Toggle Logic
const handleToggle = () => {
  setIsVisible(prev => !prev);
};

This function switches the state between true and false.

4️⃣ Conditional Rendering
{isVisible && <p>Your text appears here!</p>}

The text is rendered only when isVisible is true.

5️⃣ Dynamic Styling
color: isVisible ? "green" : "red"

Green → Text visible

Red → Text hidden

This demonstrates conditional styling in React.
