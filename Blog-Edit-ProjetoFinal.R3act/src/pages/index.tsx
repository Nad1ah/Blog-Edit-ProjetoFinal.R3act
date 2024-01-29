import { CardComponent } from '../components/postCard'
 import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'

interface PostProps {
  id: string
  imageUrl: string
  title: string
  description?: string
  creatdAt: Date
  handleCardClick:(id:string)=> void
}


function RootPage() {
  const [selectValue, selectValue] = useState<string>("")

  function handleCardClick(post: Post) {
    useEffect(() => {
      setSelectedPost(post)
      navigate(`/post/${post.id}`)
    })
  }

  return (
    <div>
  
      <Container>
        <div 
        style={{display: 'flex', justifyContent: "flex-end", marginBottom:"2rem"}}>
          <select name="sort-post" value={selectValue} onChange={handleSelect}>
            <option value="">Mais recente</option>
            <option value="">Mais antigo</option>
          </select>

        </div>
        <Row lg="4">
          {cardList.map((card) => (
            <Col key={card.id} }>
              <CardComponent
                key={card.id}
                imgUrl={card.imageUrl}
                title={card.title}
                description={card.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default RootPage
