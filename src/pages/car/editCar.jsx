import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateCar, getCarById } from "../../redux/actions/car";

import { Row, Col, Card, Form, Button } from "react-bootstrap";

const EditCar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { car } = useSelector((state) => state.car);

  const [plate, setPlate] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");
  const [rentPerDay, setRentPerDay] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [transmission, setTransmission] = useState("");
  const [availableAt, setAvailableAt] = useState("");
  const [available, setAvailable] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      updateCar(
        navigate,
        setIsLoading,
        id,
        model,
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        availableAt,
        available,
        type,
        year
      )
    );
  };

  useEffect(() => {
    dispatch(getCarById(navigate, id));
  }, [dispatch, id, navigate]);

  useEffect(() => {
    if (car) {
      setPlate(car.plate);
      setManufacture(car.manufacture);
      setModel(car.model);
      setImage(car.image);
      setRentPerDay(car.rentPerDay);
      setCapacity(car.capacity);
      setDescription(car.description);
      setTransmission(car.transmission);
      setAvailableAt(car.availableAt ? car.availableAt.substring(0, 10) : "");
      setAvailable(car.available);
      setType(car.type);
      setYear(car.year);
    }
  }, [car]);

  return (
    <Row className="mb-4">
      <Col md={6} className="offset-md-3">
        <Card>
          <Card.Header>UPDATE CAR FORM</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              {!car ? (
                <>
                  <h2>Loading...</h2>
                </>
              ) : (
                <>
                  {image && typeof image === "string" && (
                    <img
                      src={image}
                      className="img-fluid col-12 mt-2 mb-4 rounded"
                      alt="Car Preview"
                    />
                  )}
                  <Form.Group className="mb-3" controlId="plate">
                    <Form.Label>Plate</Form.Label>
                    <Form.Control
                      type="text"
                      value={plate}
                      onChange={(e) => setPlate(e.target.value)}
                      placeholder="Enter plate number (ex: B 1234 AB)"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="manufacture">
                    <Form.Label>Manufacture</Form.Label>
                    <Form.Control
                      type="text"
                      value={manufacture}
                      onChange={(e) => setManufacture(e.target.value)}
                      placeholder="Enter manufacture (ex: Toyota)"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="model">
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                      type="text"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      placeholder="Enter model (ex: Supra)"
                    />
                  </Form.Group>

                  <Form.Group controlId="image" className="mb-3">
                    <Form.Label>Car Image</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="rentPerDay">
                    <Form.Label>Rent Per Day</Form.Label>
                    <Form.Control
                      type="number"
                      value={rentPerDay}
                      onChange={(e) => setRentPerDay(e.target.value)}
                      placeholder="Enter rent per day (ex: 250000)"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="capacity">
                    <Form.Label>Capacity</Form.Label>
                    <Form.Select
                      onChange={(e) => setCapacity(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option value="" disabled>
                        -- Select Capacity --
                      </option>
                      <option value="2">2 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="6">6 Persons</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="transmission">
                    <Form.Label>Transmission</Form.Label>
                    <Form.Select
                      onChange={(e) => setTransmission(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option value="" disabled>
                        -- Select Transmission --
                      </option>
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                      <option value="Automanual">Automanual</option>
                      <option value="CVT">CVT</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Select
                      onChange={(e) => setYear(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option value="" disabled>
                        -- Select Year --
                      </option>
                      <option value="2010">2010</option>
                      <option value="2011">2011</option>
                      <option value="2012">2012</option>
                      <option value="2013">2013</option>
                      <option value="2014">2014</option>
                      <option value="2015">2015</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="type">
                    <Form.Label>Type</Form.Label>
                    <Form.Select
                      onChange={(e) => setType(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option value="" disabled>
                        -- Select Type --
                      </option>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="Hatchback">Hatchback</option>
                      <option value="MPV">MPV</option>
                      <option value="Coupe">Coupe</option>
                      <option value="Convertible">Convertible</option>
                      <option value="Van">Van</option>
                      <option value="Sports Car">Sports Car</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="availableAt">
                    <Form.Label>Available At</Form.Label>
                    <Form.Control
                      type="date"
                      value={availableAt}
                      onChange={(e) => setAvailableAt(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="available">
                    <Form.Label>Available</Form.Label>
                    <Form.Check
                      label="True"
                      name="available"
                      value={true}
                      type="radio"
                      onChange={(e) => setAvailable(e.target.value)}
                      defaultChecked={car.available === true}
                    />
                    <Form.Check
                      label="False"
                      name="available"
                      value={false}
                      type="radio"
                      onChange={(e) => setAvailable(e.target.value)}
                      defaultChecked={car.available === false}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter description"
                      rows={3}
                    />
                  </Form.Group>

                  <Button
                    className="me-2"
                    variant="outline-warning"
                    type="button"
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </Button>

                  <Button variant="primary" type="submit" disabled={isLoading}>
                    {isLoading ? "Processing..." : "Save"}
                  </Button>
                </>
              )}
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EditCar;
