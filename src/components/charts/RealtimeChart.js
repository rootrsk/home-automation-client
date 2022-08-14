import React from "react";
import RealtimeLineChart from "./RealtimeLineChart";

const TIME_RANGE_IN_MILLISECONDS = 15 * 1000;
const ADDING_DATA_INTERVAL_IN_MILLISECONDS = 1000;

// eslint-disable-next-line 
export default (props) => {
  const nameList = ["a"];
  const defaultDataList = nameList.map(name => ({
    name: name,
    data: []
  }));
  const [dataList, setDataList] = React.useState(defaultDataList);

  React.useEffect(() => {
    const addDataRandomly = data => {
      return [
        ...data,
        {
          x: new Date(),
          y: props.data
        }
      ];
    };
    const interval = setInterval(() => {
      setDataList(
        dataList.map(val => {
          return {
            name: val.name,
            data: addDataRandomly(val.data)
          };
        })
      );
    }, ADDING_DATA_INTERVAL_IN_MILLISECONDS);

    return () => clearInterval(interval);
  });

  return (
    <div className='chart_container'>
      <RealtimeLineChart
        dataList={dataList}
        range={TIME_RANGE_IN_MILLISECONDS}
        min={props.min}
        max={props.max}
        title={props.title}
      />
    </div>
  );
};
