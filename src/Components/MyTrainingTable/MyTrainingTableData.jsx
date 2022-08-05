import { Rate } from "antd";
import React from "react";
import { formatDate } from "../../Utils/FormatDate";

const columns = [
  {
    title: "Event Name",
    dataIndex: "eventName",
    key: "trainingName",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.eventName.localeCompare(b.eventName),
  },
  {
    title: "Event Type",
    dataIndex: "isOnline",
    key: "eventType",
    render: (text) => {
      return <span>{text ? "Online Class" : "Offline Class"}</span>;
    },
  },
  {
    title: "Event Period",
    dataIndex: "startDate",
    key: "eventPeriod",
    sorter: (a, b) => new Date(a.startDate) - new Date(b.startDate),
    render: formatDate,
  },
  {
    title: "Trainier Name",
    dataIndex: "author",
    key: "trainierName",
    sorter: (a, b) => a.author.localeCompare(b.author),
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
    render: (text) => {
      const data = text / 20;
      return <Rate disabled allowHalf defaultValue={data}></Rate>;
    },
  },
  {
    title: "Adtional Info",
    dataIndex: "information",
    key: "adtionalInfo",
    sorter: (a, b) => a.information.localeCompare(b.information),
  },
];

export { columns };
