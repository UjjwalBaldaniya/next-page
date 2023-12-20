import Link from "next/link";

const posts = [
  { id: "1", title: "First Post" },
  { id: "2", title: "Second Post" },
];

const About = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/about/${post.id}`} legacyBehavior>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}

export default About;
