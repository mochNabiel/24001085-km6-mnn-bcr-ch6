import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Card, Row, Col } from "react-bootstrap";
import { IoMdReturnLeft } from "react-icons/io";
import Spinner from "react-bootstrap/Spinner";

import { getProfile } from "../../redux/actions/auth";

import userProfile from "../../assets/user-profile.jpg";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleBackToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    dispatch(getProfile(null, null, null));
  }, [dispatch]);

  return (
    <>
      <Row className="mt-5">
        <Col md={6} className="offset-md-3">
          <Card
            className="shadow p-3 mb-5 bg-white rounded"
            style={{ minHeight: "350px" }}
          >
            {user ? (
              <>
                <Card.Title className="text-center">My Profile</Card.Title>
                {user.photo ? (
                  <Card.Img
                    height={200}
                    src={user?.photo}
                    variant="top"
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <Card.Img
                    height={200}
                    src={userProfile}
                    variant="top"
                    style={{ objectFit: "contain" }}
                  />
                )}
                <Card.Body>
                  <Card.Title>Name : {user?.name}</Card.Title>
                  <Card.Title>Email : {user?.email}</Card.Title>
                  <Card.Title>Role : {user?.role}</Card.Title>
                </Card.Body>
                <Row className="ms-1">
                  <Col lg={6} md={12}>
                    <Button
                      onClick={(e) => handleBackToHome(e)}
                      variant="outline-warning"
                    >
                      <IoMdReturnLeft /> Back to home
                    </Button>
                  </Col>
                </Row>
              </>
            ) : (
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Spinner animation="border" role="status" />
                <h2 className="text-center">Loading...</h2>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
