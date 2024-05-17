import React from "react";
import { fetchPostData } from "../../lib/post";

type DataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostPage: React.FC<{ params: { id: number } }> = async ({ params }) => {
  const post = await fetchPostData(params.id);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return posts.map((post: DataType) => ({
    id: post.id.toString(),
  }));
}
