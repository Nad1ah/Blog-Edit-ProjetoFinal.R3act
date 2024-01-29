import { Container } from 'reactstrap'
import { PostDetails } from '../../components/postDetails'

function PostPage() {
  return (
    <div>
      <Container>
        <PostDetails
          imageUrl="'https://picsum.photos/300/200'"
          title="Meu quarto post"
          description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </Container>
    </div>
  )
}

export default PostPage
