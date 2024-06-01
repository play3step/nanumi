import styled from "styled-components";

const ResetLocation = ({ handlerLocation }) => {
  return (
    <ResetBtn onClick={handlerLocation}>
      <img
        src={`${process.env.PUBLIC_URL}/icon/reset.png`}
        alt="Reset Location"
        style={{
          width: "22px",
          height: "22px",
        }}
      />
    </ResetBtn>
  );
};

export default ResetLocation;

const ResetBtn = styled.button`
  width: 48px;
  height: 48px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: absolute;
  right: 16px;
  bottom: 100px;
`;
