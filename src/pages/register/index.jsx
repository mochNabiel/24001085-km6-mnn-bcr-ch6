import RegisterForm from "../../components/Register";
import { Card, Col, Row } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <Row className="mt-5">
        <Col md={6} className="offset-md-3">
          <Card>
            <Card.Header>Register</Card.Header>
            <Card.Body>
              <RegisterForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Register;
