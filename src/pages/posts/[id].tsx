import { GetStaticProps, GetStaticPaths } from 'next';
import { posts } from '@/data/posts';

interface PostProps {
  post: {
    id: string;
    title: string;
    content: string;
    author: string;
    date: string;
  };
}

export default function Post({ post }: PostProps) {
  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Date:</strong> {post.date}</p>
      <p>{post.content}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id?.toString();
  const post = posts.find((p) => p.id.toString() === id);

  return {
    props: {
      post: post || null,
    },
  };
};
