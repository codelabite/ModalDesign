import React, { useState, useEffect } from "react";
import { Background, BackgroundWrapper, Button } from "./EntryStyle";
import ModalFile from "./Modal/ModalFile";
import { axios } from "./axios";

const EntryFile = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("/").catch((err) => console.log(err));

    console.log(result);
    if (result && result.data) {
      setData(result.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const openChange = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <Background>
        <BackgroundWrapper>
          <Button
            onClick={openChange}
            style={{ fontFamily: "Titillium web", fontSize: 20 }}
          >
            {" "}
            Meet Peter{" "}
          </Button>
        </BackgroundWrapper>
        <ModalFile show={show} setShow={setShow} />
      </Background>
    </>
  );
};

export default EntryFile;
