import { notFound } from 'next/navigation';
import { posts } from '../../data/posts';

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPost({ params }) {
  const post = posts.find((post) => post.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
          <p className="text-sm text-gray-600">
            By {post.author} on {post.date}
          </p>
          <p>{post.content}</p>
        </section>
      </main>
    </div>
  );
}
