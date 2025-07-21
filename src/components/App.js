import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"; // New import

function App() {
  return (
    <div className="App">
      <h1>Now</h1> {/* Changed from dynamic date to static "Now" */}
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the HTML,
        and also allows us to add in components, which are separate, self-contained
        chunks of JSX.
      </p>
      <ExampleComponent /> {/* Only ONE instance remains */}
      <TestComponent /> {/* New component added below ExampleComponent */}
    </div>
  );
}

export default App;
