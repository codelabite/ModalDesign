import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  height: 100%;
  width: 100%;
  background: #333333;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ForwardWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const WrapperImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  object-fit: contain;
`;
export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  bottom {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;

  top: 24px;
  right: 20px;
  width: 32px;
  padding: 0;
  z-index: 10;
`;
