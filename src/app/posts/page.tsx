import React from "react";
import Link from "next/link";

type DataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getData = async () => {
  console.log("working");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const data = await res.json();
  return data;
};

const Posts = async () => {
  const data = await getData();
  return (
    <div>
      <ul>
        {data?.map((info: DataType) => (
          <li key={info.id}>
            <Link href={`/posts/${info.id}`}>{info.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
