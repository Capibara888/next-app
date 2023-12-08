import { API_URL } from ".";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export async function getAllPosts(): Promise<Post[]> {
    const response = await fetch(`${API_URL}/posts`)
    return await response.json()
    
}
export async function getOne(id:number): Promise<Post> {
    const response = await fetch(`${API_URL}/posts/${id}`)
    return await response.json();
}

export const getPostsBySearch = async (search: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?q=${search}`
    );
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
  };
  