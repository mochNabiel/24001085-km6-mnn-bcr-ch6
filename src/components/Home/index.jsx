import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/actions/car";
import CarCard from "./CarCard";

const HomeComponent = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <div className="d-flex flex-wrap gap-5 mt-5">
      {cars?.length > 0 ? (
        cars.map((car) => <CarCard key={car.id} car={car} />)
      ) : (
        <h1>Cars is empty</h1>
      )}
    </div>
  );
};

export default HomeComponent;
