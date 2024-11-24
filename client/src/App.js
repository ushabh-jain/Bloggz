import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Blogs from "./pages/Blogs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserBlogs from "./pages/UserBlogs";
import CreateBlog from "./pages/CreateBlog";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/my-blog" element={<UserBlogs />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
