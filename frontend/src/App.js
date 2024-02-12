import React from "react";

// Components
import Header from "./components/Header";
import BlogForm from "./components/BlogForm";
import Blogs from "./components/Blogs";

function App() {
  return (
    <>
      <Header />
      <div className="container p-4">
        <BlogForm />
        <Blogs />
      </div>
    </>
  );
}

export default App;
