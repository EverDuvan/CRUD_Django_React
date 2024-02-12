import React, {useState, useEffect} from "react";
//import React, {useEffect} from "react";
import axios from "axios";
//import setBlogs from "./components/Blogs";
//import blogs from "./components/Blogs";

// Components
import Header from "./components/Header";
import BlogForm from "./components/BlogForm";
import Blogs from "./components/Blogs";

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("/get/")
    .then((Response) => {
      setBlogs(Response.data);
    }).catch(() => {
      alert('algo salió mal!')
    })
  }, [])

  return (
    <>
      <Header />
      <div className="container p-4">
        <BlogForm blogs={blogs} setBlogs={setBlogs}/>
        <Blogs blogs={blogs} setBlogs={setBlogs}/>
      </div>
    </>
  );
}

export default App;
