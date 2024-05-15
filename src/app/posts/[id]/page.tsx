"use client";
import React, { useEffect, useState } from "react";

type DataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const DetailPage: React.FC<{ params: { id: number } }> = ({ params }) => {
  const [detailInfo, setDetailInfo] = useState<DataType>();
  useEffect(() => {
    try {
      const getDetail = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`
        );
        const data = await res.json();
        setDetailInfo(data);
      };
      getDetail();
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <>
      <h1>Title : {detailInfo?.title}</h1>
      <p>Body : {detailInfo?.body}</p>
    </>
  );
};

export default DetailPage;
