'use client';

import { Metadata } from "next";
import Posts from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";
import { usePosts } from "@/store";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";



export const metadata: Metadata = {
    title: 'Blog | Next App',
  }



 function Blog() {

    return (<>    
    <h1>Blog</h1>
    <PostSearch />
    <Posts/>
    
    </> );
}

export default Blog;