import { Col, Container, Row } from 'reactstrap'
import { CardComponent } from '../components/postCard'
import useRootPage from '../components/hooks/useRootPage'

function RootPage() {
  const { postsList, handleCardClick, selectValue, handleSelect } =
    useRootPage()

  return (
    <Container>
      <div
        style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '2rem',
        }}
      >
        <select value={selectValue} onChange={handleSelect}>
          <option value="newest">Mais recente</option>
          <option value="oldest">Mais antiga</option>
        </select>
      </div>
      <Row lg="4">
        {postsList.map((card) => (
          <Col key={card.id}>
            <CardComponent
              id={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              handleCardClick={handleCardClick}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default RootPage
