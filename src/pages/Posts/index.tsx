import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainPosts } from "./components/Main";

import { ContainerPosts } from "./components/Main/styles";

export function Posts() {
  return (
    <>
      <Header />
      <MainPosts />
      <Footer />
    </>


  )
}