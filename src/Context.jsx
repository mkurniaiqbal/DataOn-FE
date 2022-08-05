import React from "react";
import { createContext, useState, useEffect } from "react";
import instance from "./API";
import dayjs from "dayjs";
import moment from "moment";
import { message, Form } from "antd";

export const AppContext = createContext();

export default function ContextWrapper(props) {
  const [training, setTrainingData] = useState({
    data: [],
    isLoading: false,
    isError: false,
  });
  const [search, setSearch] = useState("");
  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const [status, setStatus] = useState("");
  const handleChangeStatus = (e) => {
    setStatus(e === "isOnline" ? true : false);
  };

  const [completed, setCompleted] = useState("");
  const handleChangeCompleted = (e) => {
    setCompleted(e === "isCompleted" ? true : false);
  };

  const [dataTable, setDataTable] = useState([]);
  const [totalPage, setTotalPages] = useState(1);
  const [pages, setPages] = useState(1);

  const setPagination = (page) => {
    setPages(page);
  };

  const [myTraining, setMyTrainingData] = useState({
    data: [],
    isLoading: false,
    isError: false,
  });

  async function getDataTraining(
    search = "",
    status = status,
    completed = completed
  ) {
    handleSetStateTraining("isLoading", true);
    try {
      const response = await instance.get(
        `trainings?eventName=${search}&isOnline=${status}&isCompleted=${completed}`
      );
      handleSetStateTraining("data", response.data);
    } catch (err) {
      handleSetStateTraining("isError", true);
    }
    handleSetStateTraining("isLoading", false);
  }

  async function getDataTrainingTable() {
    const tes = await instance.get("trainings");
    try {
      const response = await instance.get(`trainings?page=${pages}&limit=10`);
      setDataTable([...response.data]);
      setTotalPages(tes.data.length);
    } catch (err) {
      handleSetStateTraining("isError", true);
    }
  }

  async function getDataMyTraining() {
    handleSetStateMyTraining("isLoading", true);
    try {
      const response = await instance.get("my-training");
      handleSetStateMyTraining("data", response.data);
    } catch (err) {
      handleSetStateMyTraining("isError", true);
    }
    handleSetStateMyTraining("isLoading", false);
  }

  const [data, setData] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
    image: "",
    speaker: "",
    location: "",
    ratings: "",
    isOnline: "",
    isOffline: "",
    information: "",
    participant: "",
    eventType: "",
    isLoading: false,
    isError: false,
    isSucces: false,
    isModal: false,
    date: "",
  });

  const handleChanges = (v, e) => {
    setData({
      ...data,
      eventType: e.value,
    });
  };

  const handleChangeDate = (range) => {
    const valueOfInput1 = range[0].format();
    const valueOfInput2 = range[1].format();
    setData({
      ...data,
      startDate: valueOfInput1,
      endDate: valueOfInput2,
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.id]: value,
    });
  };

  const handleSubmit = async (e) => {
    {
      e.id ? onEdit(e.id) : onCreate();
    }
  };

  async function getData(params) {
    try {
      const response = await instance.get(`trainings/${params}`);
      setData({
        eventName: response.data.eventName,
        startDate: dayjs(response.data.startDate).format("YYYY-MM-DD HH:mm"),
        endDate: dayjs(response.data.endDate).format("YYYY-MM-DD HH:mm"),
        image: response.data.image,
        eventType: response.isOffline === true ? "isOffline" : "isOnline",
        location: response.data.location,
        speaker: response.data.speaker,
        ratings: response.data.ratings,
        information: response.data.information,
        participant: response.data.participant,
      });
    } catch (err) {
      if (err) {
        message.error("This is an error messagee");
      }
    }
  }

  const [form] = Form.useForm();

  form.setFieldsValue({
    eventName: data.eventName,
    date: [moment(data.startDate), moment(data.endDate)],
    image: data.image,
    eventType: data.eventType,
    location: data.location,
    speaker: data.speaker,
    ratings: data.ratings,
    information: data.information,
    participant: data.participant,
  });

  const onEdit = async (id) => {
    const updateData = {
      eventName: data.eventName,
      location: data.location,
      information: data.information,
      participant: data.participant,
      ratings: data.ratings,
      isOnline: data.eventType === "isOnline" ? true : false,
      isOffline: data.eventType === "isOffline" ? true : false,
      speaker: data.speaker,
      starDate: data.startDate,
      endDate: data.endDate,
    };
    try {
      const response = await instance.put(`trainings/${id}`, updateData);
      if (response.status === 200) {
        message.success("Training Updated Successfully");
      }
      handleSetStateSucces("isSucces", true);
    } catch (err) {
      message.error("This is an error messageeee");
    }
  };

  const onCreate = async () => {
    const post = {
      image: "http://loremflickr.com/640/480",
      endDate: data.endDate,
      ratings: data.ratings,
      speaker: data.speaker,
      location: data.location,
      eventName: data.eventName,
      startDate: data.startDate,
      information: data.information,
      participant: data.participant,
      isOnline: data.eventType === "isOnline" ? true : false,
      isOffline: data.eventType === "isOffline" ? true : false,
    };
    try {
      await instance.post("trainings", post);
      handleSetStateModal("isModal", true);
    } catch {
      message.error("This is an error messageeee");
    }
  };

  const [modalViews, setModalView] = useState(false);

  const handleOk = () => {
    setModalView(false);
  };

  useEffect(() => {
    getDataTraining(search, status, completed);
    getDataTrainingTable();
    getDataMyTraining();
  }, [pages, search, status, completed]);

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

  const handleSetStateMyTraining = (field, value) => {
    setMyTrainingData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSetStateSucces = (field, value) => {
    setData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  const handleSetStateModal = (field, value) => {
    setData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        myTraining,
        training,
        tableViews,
        handleClick,
        dataTable,
        totalPage,
        pages,
        setPagination,
        handleChange,
        handleChanges,
        handleChangeDate,
        handleSubmit,
        getData,
        form,
        modalViews,
        handleOk,
        data,
        onSearch,
        handleChangeStatus,
        handleChangeCompleted,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
