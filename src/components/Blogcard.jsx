import Link from "next/link";
import { Button } from "@/components/ui/button";

const BlogCard = ({ blog }) => {
  const { id, title, body: description } = blog || {};

  const sliceDescription = (text) => {
    return text.length > 80 ? text.slice(0, 80) + "..." : text;
  };

  const sliceTitle = (text) => {
    return text.length > 30 ? text.slice(0, 20) + "..." : text;
  };

  return (
    <div className="bg-white shadow rounded p-6 grid place-items-stretch">
      <h1 className="text-2xl font-semibold">Title: {sliceTitle(title)}</h1>
      <h3 className="text-lg font-medium my-3">
        <span className="font-semibold">Description:</span>{" "}
        {sliceDescription(description)}...
      </h3>
      <Link href={`/blogs/${id}`}>
        <Button className="bg-blue-400 hover:bg-blue-400 hover:text-black">Read More</Button>
      </Link>
    </div>
  );
};

export default BlogCard;