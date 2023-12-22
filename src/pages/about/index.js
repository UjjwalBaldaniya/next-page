import { posts } from "@/description/about.description";
import useUseRoute from "@/hooks/useUseRoute";
import Button from "@/shared/Button";
import { removeAuthToken } from "@/utils/auth";
import Link from "next/link";

const About = ({ posts }) => {
  const { handlePush } = useUseRoute();
  const logout = () => {
    console.log("hello");
    removeAuthToken();
    handlePush("/signin");
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <Button onClick={logout}>Logout</Button>
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
