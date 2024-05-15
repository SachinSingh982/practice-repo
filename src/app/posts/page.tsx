import React from "react";
import Link from "next/link";

type DataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return data;
};

const Posts = async () => {
  const data = await getData();
  return (
    <>
      {data?.map((info: DataType) => {
        return (
          <div key={info.id}>
            <Link href={`/posts/${info.id}`}>
              <li>{info.title}</li>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
