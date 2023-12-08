import { usePosts } from "@/store";
import Link from "next/link";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

const Posts = () => {
  const [loading, posts, getAllPosts] = usePosts(state => [state.loading, state.posts, state.getAllPosts], shallow);
  useEffect(() => {
  getAllPosts()
  }, [])

  return (
    loading ? (
        <h3>Loading...</h3>
    )
    :
    (<ul>
      {posts.map((post: any) => (
        <li key={post.id}><Link href={`/blog/${post.id}`}  >{post.title}</Link></li>
      ))}
    </ul>)
  )
}

export default Posts