import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { Posts } from "./pages/Posts";

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/posts/:id' element={<Post />} />
    </Routes>
  )
}