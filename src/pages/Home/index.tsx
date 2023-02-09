import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "./components/Main";
import { api } from "../../lib/api";

export function Home() {
  const [posts, setPosts] = useState();

  async function getPosts() {
    /*const response = await fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {}
    })
    const data = await response.json()
    console.log(data)*/
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <>
      <Header />

      <Main />

      <Footer />
    </>
  )
}