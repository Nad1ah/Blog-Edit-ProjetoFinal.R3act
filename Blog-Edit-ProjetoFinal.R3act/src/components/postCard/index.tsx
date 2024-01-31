import { Card, CardBody, CardText, CardTitle } from 'reactstrap'

interface CardProps {
  id: string
  imageUrl: string
  title: string
  description: string
  handleCardClick: (id: string) => void
}

export function CardComponent({
  id,
  title,
  description,
  imageUrl,
  handleCardClick,
}: CardProps) {
  return (
    <Card
      onClick={() => handleCardClick(id)}
      style={{ width: '18rem', padding: '15px', cursor: 'pointer' }}
    >
      <img
        alt="Sample"
        src={imageUrl}
        style={{ borderRadius: '10px', height: 'rem' }}
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
      </CardBody>
      <CardText>{description}</CardText>
    </Card>
  )
}
