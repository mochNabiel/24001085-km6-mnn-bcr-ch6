import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { FaPlus } from "react-icons/fa";

const AddCarButton = () => {
  return (
    <>
      <Button as={Link} to={`/addNewCar`} variant="primary" className="mt-3">
        <FaPlus /> Add New Car
      </Button>
    </>
  );
};

export default AddCarButton;
