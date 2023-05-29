
import { Route, Routes } from "react-router-dom";
import Index from "./pages/";
import Register from "./pages/register";
import Posts from "./pages/posts";
import User from "./pages/user";
import './App.css'
import Layout from "./layout";

const App = () => (
  <Layout>
    <Routes>
      <Route element={<Index />} path='/' />
      <Route element={<Register />} path='/register' />
      <Route element={<Posts />} path='/posts' />
      <Route element={<User />} path='/user'/>
    </Routes>
  </Layout>

)

export default App;