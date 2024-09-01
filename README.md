

# Finance Dashboard React Component

## Overview

This Finance Dashboard is a React component that provides a simple interface for managing personal finances. It allows users to:

- View their current balance
- Add income and expenses
- See a transaction history

## Features

- Display of current balance
- Input fields for adding income and expenses
- Buttons to update the balance based on income and expenses
- Transaction history with color-coded entries

## Prerequisites

Before you can use this component, you need to have the following installed:

- Node.js (version 12 or higher)
- npm (usually comes with Node.js)
- A React project set up (version 16.8 or higher)

## Installation

1. First, make sure you have a React project set up. If you don't, you can create one using Create React App:

   ```
   npx create-react-app my-finance-app
   cd my-finance-app
   ```

2. Install the necessary dependencies:

   ```
   npm install lucide-react @radix-ui/react-slot
   ```

3. Install the shadcn/ui components. This project uses several components from shadcn/ui. You can add them to your project by following the instructions on the [shadcn/ui website](https://ui.shadcn.com/docs/installation).

4. Copy the `FinanceDashboard.jsx` file into your project's `src` directory.

## Usage

1. Import the FinanceDashboard component in your app:

   ```jsx
   import FinanceDashboard from './FinanceDashboard';
   ```

2. Use the component in your JSX:

   ```jsx
   function App() {
     return (
       <div className="App">
         <FinanceDashboard />
       </div>
     );
   }
   ```

3. Run your app:

   ```
   npm start
   ```

## Customization

You can customize the appearance of the dashboard by modifying the CSS classes in the FinanceDashboard component. The component uses Tailwind CSS classes for styling.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, please open an issue in this repository.
