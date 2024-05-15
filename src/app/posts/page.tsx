"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type DataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Posts = () => {
  const [data, setData] = useState<DataType[]>();
  useEffect(() => {
    try {
      const getData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        if (data.length > 0) {
          setData(data);
        }
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      {data?.map((info) => {
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
