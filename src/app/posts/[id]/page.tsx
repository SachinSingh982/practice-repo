import React from "react";

type DataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getDetailProduct = async (id: number): Promise<DataType> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const DetailPage: React.FC<{ params: { id: number } }> = async ({ params }) => {
  const detailInfo = await getDetailProduct(params.id);
  return (
    <>
      <h1>Title : {detailInfo?.title}</h1>
      <p>Body : {detailInfo?.body}</p>
    </>
  );
};

export default DetailPage;
