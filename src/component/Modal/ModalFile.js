import React, { useState, useEffect } from "react";
import pix from "../../img/p17.jpg";
import pix1 from "../../img/pi.png";
import {
  Background,
  ForwardWrapper,
  WrapperImage,
  WrapperContent,
  CloseModalButton,
} from "./ModalStyle";
import "./style.css";
import { MdClose } from "react-icons/md";
import { axios } from "../axios";

function ModalFile({ show, setShow }) {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    const result = await axios.get("/").catch((err) => console.log(err));

    if (result && result.data) {
      setData(result.data);
    }
  };

  const postEvent = async () => {
    const result = await axios
      .post("/", formData)
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {show ? (
        <div className="container">
          <div className="container__warpper">
            <img className="container__warpperImage" src={pix} alt="image" />

            <div className="container__warpperContent">
              <h2>I am Peter</h2>
              <p> I am an Enterpreneur</p>
              <div>
                {data.map((event, i) => (
                  <div key={event.i}>
                    <p>{event.desc}</p>
                  </div>
                ))}
              </div>

              <div className="container__warpperContentFormContainer">
                <form
                  onSubmit={postEvent}
                  className="container__warpperContentForm"
                >
                  <div className="container__warpperContentInput">
                    <input
                      className="container__warpperContentFormInput"
                      name="desc"
                      type="text"
                      onChange={handleChange}
                      placeholder="Enter key value about you!"
                    />
                  </div>
                  <button
                    type="summit"
                    className="container__warpperContentButton"
                  >
                    Summit
                  </button>
                </form>
              </div>
            </div>
            <MdClose
              className="container__warpperClose"
              onClick={() => setShow((prev) => !prev)}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ModalFile;
