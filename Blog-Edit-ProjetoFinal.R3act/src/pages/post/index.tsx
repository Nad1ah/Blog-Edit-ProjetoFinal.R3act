import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import { Post } from "../index";

type PostPageProps = {
  post: Post | null;
};

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  if (!post) return <div>Post not found</div>; // Add a null check here
  return (
    <Card>
      <CardImg top width="100%" src={post.imageUrl} alt={post.title} />
      <CardBody>
        <CardTitle tag="h5">{post.title}</CardTitle>
        <p>{post.description}</p>
      </CardBody>
    </Card>
  );
};

export default PostPage;
