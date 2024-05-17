export async function fetchPostData(id: number) {
  console.log("working");

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return post;
}
