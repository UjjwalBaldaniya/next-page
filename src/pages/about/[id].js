import useUseRoute from "@/hooks/useUseRoute";

const posts = [
  { id: "1", title: "First Post" },
  { id: "2", title: "Second Post" },
];

const Posts = ({ post }) => {
  const { router } = useUseRoute();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Post content goes here.</p>
    </div>
  );
};

export async function getStaticPaths() {
  const postIds = posts.map((post) => ({ params: { id: post.id } }));

  return {
    paths: postIds,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.id === params.id);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

export default Posts;
