import React from "react";
import { createContext, useState, useEffect } from "react";
import instance from "./API";

export const AppContext = createContext();

export default function ContextWrapper(props) {
  const [training, setTrainingData] = useState({
    data: [],
    isLoading: false,
    isError: false,
  });

  async function getDataTraining() {
    handleSetStateTraining("isLoading", true);
    try {
      const response = await instance.get("trainings");
      handleSetStateTraining("data", response.data);
    } catch (err) {
      handleSetStateTraining("isError", true);
    }
    handleSetStateTraining("isLoading", false);
  }

  const [data, setData] = useState([]);
  const [totalPage, setTotalPages] = useState(1);
  const [pages, setPages] = useState(1);

  async function getDataTrainingTable() {
    const tes = await instance.get("trainings");
    try {
      const response = await instance.get(`trainings?page=${pages}&limit=10`);
      setData([...response.data]);
      setTotalPages(tes.data.length);
    } catch (err) {
      handleSetStateTraining("isError", true);
    }
  }

  const setPagination = (page) => {
    setPages(page);
  };

  useEffect(() => {
    getDataTraining();
    getDataTrainingTable();
  }, [pages]);

  const [tableViews, setTableView] = useState(false);
  const handleClick = () => {
    setTableView(!tableViews);
  };

  const handleSetStateTraining = (field, value) => {
    setTrainingData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  return (
    <AppContext.Provider
      value={{
        training,
        tableViews,
        handleClick,
        data,
        totalPage,
        pages,
        setPagination,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
