import React, { useEffect, useState } from "react";
import style from "./Task.module.css";

export const Task = () => {
  const [data, setData] = useState([]);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/tasks", {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:8000/chats", {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setChats(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={style.mainDiv}>
      {/* TASK */}
      <div className={style.task}>
        <div className={style.head1}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149206.png"
            alt=""
            width="30px"
            height="30px"
          />
          <div>Tasks List</div>
        </div>
        <div>
          {data.map((el) => (
            <div key={el.id} className={style.singleTasks}>
              <div>
                <input type="checkbox"></input>
              </div>
              <div className={style.taskAndDesc}>
                <div className={style.taskk}>{el.task}</div>
                <div className={style.desc}>{el.desc}</div>
              </div>
              <div>
                <img src={el.badge} alt="" className={style.img2} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className={style.cancel}>Cancel</div>
          <button className={style.save}>Save</button>
        </div>
      </div>
      {/* CHAT */}
      <div className={style.chat}>
        <div className={style.head1}>
          <img
            src="https://image.shutterstock.com/image-vector/printer-icon-vector-logo-template-260nw-1425056537.jpg"
            alt=""
            width="30px"
            height="30px"
          />
          <div>Chat Box</div>
        </div>
        <div style={{ display: "grid", rowGap: "50px" }}>
          {chats.map((el) => (
            <div style={{ display: "flex", rowGap: "30px" }}>
              <img
                src={el.display}
                alt="img"
                width="50px"
                height="50px"
                className={style.display}
              />
              <div  className={style.text1}>{el.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
