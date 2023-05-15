import { useEffect, useState } from "react";
import Header from '../../components/header/header';
import Posts from '../../components/posts/posts';
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import Footer from "../../components/footer/footer";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header/>
      <div className="home">
        <Posts posts={posts} />
      </div>
      <Footer/>
    </>
  );
}
