import Link from 'next/link';
import { posts } from "../data/posts";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
          <ul className="list-none p-0">
            {posts.map((post) => (
              <li key={post.id} className="mb-4">
                <h3 className="text-xl font-semibold">
                  <Link href={`/posts/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
