"use client";
import { useEffect, useState } from "react";
import { clearScreenDown } from "readline";

type Post = {
  id: number;
  title: string;
};

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        console.log("Response:", res);

        if (!res.ok) throw new Error("Fetch failed");

        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Error:", err);
        setError("Error loading data");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="card mb-4">
      <ol className="list-decimal ml-5 text-gray-800">
        {posts.slice(0, 5).map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ol>
    </div>
  );
}
