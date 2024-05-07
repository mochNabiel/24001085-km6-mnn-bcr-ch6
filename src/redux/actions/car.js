import axios from "axios";
import { toast } from "react-toastify";
import { setCars, setCar } from "../reducers/car";

export const getCars = () => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/car`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setCars(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }

};

export const getCarById = (navigate, id) => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/car/id/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setCar(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
    navigate("/");
  }
};

export const getCarByCapacity =
  (navigate, capacity) => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/api/car/capacity/${capacity}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.request(config);
      const { data } = response.data;

      dispatch(setCar(data));
    } catch (error) {
      toast.error(error?.response?.data?.message);
      navigate("/");
    }
  };

export const createCar =
  (
    navigate,
    setIsLoading,
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
  ) =>
  async (dispatch, getState) => {
    setIsLoading(true);

    const { token } = getState().auth;

    let data = new FormData();
    data.append("model", model);
    data.append("plate", plate);
    data.append("manufacture", manufacture);
    data.append("rentPerDay", rentPerDay);
    data.append("capacity", capacity);
    data.append("description", description);
    data.append("transmission", transmission);
    data.append("availableAt", availableAt);
    data.append("available", available);
    data.append("type", type);
    data.append("year", year);

    if (image) {
      data.append("image", image);
    }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/api/car`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      await axios.request(config);
      dispatch(getCars());
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }

    setIsLoading(false);
  };

export const updateCar =
  (
    navigate,
    setIsLoading,
    id,
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
  ) =>
  async (dispatch, getState) => {
    setIsLoading(true);

    const { token } = getState().auth;

    let data = new FormData();
    data.append("model", model);
    data.append("plate", plate);
    data.append("manufacture", manufacture);
    data.append("rentPerDay", rentPerDay);
    data.append("capacity", capacity);
    data.append("description", description);
    data.append("transmission", transmission);
    data.append("availableAt", availableAt);
    data.append("available", available);
    data.append("type", type);
    data.append("year", year);

    if (image) {
      data.append("image", image);
    }

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/api/car/id/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      await axios.request(config);
      dispatch(getCars());
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }

    setIsLoading(false);
  };

export const deleteCar =
  (navigate, selectedCarId) => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/api/car/id/${selectedCarId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.request(config);
      dispatch(getCars());
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      navigate("/");
    }
  };
