import { Metadata } from "next";

type Props = {
    params: {id:string}
}
type Post = {
    title: string;
    body: string;
    id: number | string;
}

async function getData(id: string): Promise<Post> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
        revalidate: 60,
        
      }
    })
    return response.json()
  }
 
export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
    const post = await getData(id)
    return {
        title: post.title
    }
}

export default async function Post({params}: Props) {
    const {id} = params;
    const post = await getData(id);
    return ( 
    <>
    <div className="mx-auto">
    <h1>
        {post.title}
    </h1>
    <p>{post.body}</p>
    </div>
    </>
    )
}