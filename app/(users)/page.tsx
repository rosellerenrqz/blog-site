import BlogContent from "@/components/BlogContent";
import Hero from "@/components/Hero";
import { client } from "@/libs/createClient";

const getData = async () => {
  const query = `*[_type == "post"] {
    ...,
    author->,
      categories[]->,
  
  } | order(_createdAt desc)`;
  const data = await client.fetch(query);
  return data;
};

export default async function Home() {
  const data = await getData();
  // console.log("data", data);
  return (
    <main>
      <Hero />
      <BlogContent data={data} />
    </main>
  );
}
