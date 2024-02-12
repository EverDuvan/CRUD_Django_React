import React from "react";

// Components
import Header from "./components/Header";
import BlogForm from "./components/BlogForm";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <BlogForm />
      </div>
    </div>
  );
}

export default App;
