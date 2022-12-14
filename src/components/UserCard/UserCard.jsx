import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserCard({ item }) {
    console.log(item)
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://www.thesoftwarereport.com/wp-content/uploads/2018/06/github-collab-retina-preview.gif" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.username}  {item.phone}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
