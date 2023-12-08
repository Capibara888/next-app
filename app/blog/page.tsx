'use client'

import { getAllPosts } from "@/services/post";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Posts from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";



export const metadata: Metadata = {
    title: 'Blog | Next App',
  }



 function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getAllPosts().then(setPosts).finally(() => setLoading(false))
  }, [])

    return (<>    
    <h1>Blog</h1>
    <PostSearch onSearch={setPosts} />
    {loading ? <h3>Loading...</h3> : 
    <Posts posts={posts} />
    }
    </> );
}

export default Blog;