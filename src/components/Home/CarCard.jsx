import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { Button, Card, Col, Row, Image, Modal } from "react-bootstrap";
import { FaTrash, FaEdit } from "react-icons/fa";

import { deleteCar, getCars } from "../../redux/actions/car";

const CarCard = ({ car }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(deleteCar(navigate, selectedCarId));
    handleClose();
  };

  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={car?.image}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column gap-3">
          <div>
            <Card.Title>
              {car?.manufacture} {car?.model}
            </Card.Title>
            <div>
              <p>
                {new Date(car?.createdAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h6>Transmission : {car?.transmission}</h6>
              <h6>Type : {car?.type}</h6>
              <h6>Capacity : {car?.capacity} persons</h6>
              <h6>Rent : Rp {car?.rentPerDay.toLocaleString("id-ID")} / day</h6>
            </div>
          </div>
          <Row>
            <Col md={6}>
              <Button
                variant="outline-danger"
                className="w-100"
                onClick={() => {
                  setSelectedCarId(car?.id);
                  handleShow();
                }}
              >
                <FaTrash /> Delete
              </Button>
            </Col>
            <Col md={6}>
              <Button
                as={Link}
                to={`/car/${car?.id}`}
                variant="outline-success"
                className="w-100"
              >
                <FaEdit /> Edit
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body>
          <Row className="justify-content-center">
            <h4 style={{ textAlign: "center" }}>Menghapus Data Mobil</h4>
          </Row>
          <Row className="justify-content-center">
            <Col md={10}>
              <p style={{ textAlign: "center" }}>
                Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin
                ingin menghapus?
              </p>
            </Col>
          </Row>
          <Row className="g-2 justify-content-center">
            <Col md={3} className="d-flex">
              <Button
                variant="outline-primary"
                onClick={handleClose}
                className="flex-fill"
              >
                Tidak
              </Button>
            </Col>
            <Col md={3} className="d-flex">
              <Button
                variant="danger"
                onClick={handleSubmit}
                className="flex-fill"
              >
                Ya
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

CarCard.propTypes = {
  car: PropTypes.object,
};

export default CarCard;
