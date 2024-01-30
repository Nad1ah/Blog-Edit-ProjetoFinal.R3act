import { Card, CardBody, CardText, CardTitle } from "reactstrap";

interface CardProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  handleCardClick: (id: string) => void;
}

export function CardComponent({ title, description, imageUrl }: CardProps) {
  return (
    <Card
      style={{
        width: "18rem",
        padding: "15px",
      }}
    >
      <img
        alt="Sample"
        src={imageUrl}
        style={{ borderRadius: "10px", height: "rem" }}
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
      </CardBody>
      <CardText>{description}</CardText>
    </Card>
  );
}
