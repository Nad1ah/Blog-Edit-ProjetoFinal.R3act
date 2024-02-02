import { Button, Card, CardBody, CardTitle } from "reactstrap";

interface CardProps {
  id: string;
  imageUrl: string;
  title: string;

  handleCardClick: (id: string) => void;
}

export function CardComponent({
  id,
  title,

  imageUrl,
  handleCardClick,
}: CardProps) {
  return (
    <Card
      onClick={() => handleCardClick(id)}
      style={{
        maxWidth: "1250px",
        position: "relative",
        margin: "auto",
        padding: "18px",
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

      <Button
        variant="secondary"
        style={{
          display: "flex",
          justifyContent: "space-around",
          position: "unset",
          padding: "5px",
          width: "110px",
          backgroundColor: "#DCDCDC",
          color: "black",
        }}
      >
        View More🔍
      </Button>
    </Card>
  );
}
