
import BlogCard from "@/components/Blogcard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();



  return (
    <div className="min-h-screen container mx-auto ">
      
      
      <div className="pb-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mt-3 text-center">Explore Blogs</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {blogs.slice(0, 12).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      {/* view more button */}
      <div className="w-1/2 md:w-1/3 lg:w-1/4 mx-auto mt-8">
        <Link href={"/blogs"}>
          <Button className="w-full bg-blue-400 hover:bg-blue-400 hover:text-black">View More</Button>
        </Link>
      </div>



    </div>
  );
}
