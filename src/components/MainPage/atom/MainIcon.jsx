import styled from "styled-components";

const IconList = [
  { type: "person", src: `${process.env.PUBLIC_URL}/icon/pserson.png` },
  { type: "alert", src: `${process.env.PUBLIC_URL}/icon/alert.png` },
];

const MainIcon = ({ type }) => {
  const Icon = IconList.find((v) => v.type === type);
  return <IconSize src={Icon.src} alt={Icon.type} />;
};

export default MainIcon;

const IconSize = styled.img`
  width: 20px;
  height: 20px;
`;
