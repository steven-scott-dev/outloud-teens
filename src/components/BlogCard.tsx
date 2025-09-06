import { BlogPost } from "../types/blog";
import { Link } from "react-router-dom";

export default function BlogCard({ id, title, excerpt, date, image }: BlogPost) {
  return (
    <Link
      to={`/blog/${id}`}
      className="block bg-white shadow rounded overflow-hidden hover:shadow-neonPink/50 transition"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="font-bold text-lg text-black mb-2">{title}</h3>
        <p className="text-gray-700 mb-2">{excerpt}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </Link>
  );
}