import { Card, CardText, CardTitle, Col, Row, CardBody } from "reactstrap";

interface PostDetailsProps {
  imageUrl: string;
  title: string;
  description: string;
  onClick?: () => void;
}
export function PostDetails({
  imageUrl,
  title,
  description,
  onClick,
}: PostDetailsProps) {
  return (
    <Card onClick={onClick} style={{ cursor: "pointer" }}>
      <CardBody>
        <Row>
          <Col>
            <img
              alt="Sample"
              src={imageUrl}
              style={{ width: "20rem", padding: "15px", cursor: "pointer" }}
            />
          </Col>
          <Col>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardText>{description}</CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
