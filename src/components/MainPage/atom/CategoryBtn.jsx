import styled from "styled-components";

const CategoryBtn = ({ text, selected, onClick }) => {
  return (
    <Category selected={selected} onClick={onClick}>
      {text}
    </Category>
  );
};

export default CategoryBtn;

const Category = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 6px 14px;
  border: 1px solid;
  border-radius: 20px;
  font-size: 14px;
  color: ${({ selected }) => (selected ? "#ffffff" : "#959595")};
  background-color: ${({ selected }) => (selected ? "#3182f7" : "#EDECEC")};
  border: none;
`;
