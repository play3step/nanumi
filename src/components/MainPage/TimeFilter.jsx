import styled from "styled-components";

const TimeFilterContainer = (p) => {
  const down = p.isDown;

  return (
    <TimeFilterBox down={down}>
      <TimeFilterFlex>
        <TimeFilter
          selected={p.selected === 1}
          onClick={() => {
            p.handleClick(1);
            p.setTime("30분");
          }}
        >
          30분
        </TimeFilter>
        <TimeFilter
          selected={p.selected === 2}
          onClick={() => {
            p.handleClick(2);
            p.setTime("1시간");
          }}
        >
          1시간
        </TimeFilter>
        <TimeFilter
          selected={p.selected === 3}
          onClick={() => {
            p.handleClick(3);
            p.setTime("2시간");
          }}
        >
          2시간
        </TimeFilter>
        <TimeFilter
          selected={p.selected === 4}
          onClick={() => {
            p.handleClick(4);
            p.setTime("3시간");
          }}
        >
          3시간
        </TimeFilter>
        <TimeFilter
          selected={p.selected === 5}
          onClick={() => {
            p.handleClick(5);
            p.setTime("4시간");
          }}
        >
          4시간
        </TimeFilter>
      </TimeFilterFlex>
    </TimeFilterBox>
  );
};

export default TimeFilterContainer;

const TimeFilter = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${({ selected }) => (selected ? "#ffffff" : "#909090")};
  box-sizing: border-box;
  border: solid 1px ${({ selected }) => (selected ? "#3182f7" : "#909090")};
  border-radius: 20px;
  padding: 6px 14px;
  background-color: ${({ selected }) => (selected ? "#3182f7" : "#EDECEC")};
`;

const TimeFilterBox = styled.div`
  width: 358px;
  box-sizing: border-box;
  padding: 12px 16px;
  overflow: scroll;
  position: absolute;
  margin-left: 16px;
  z-index: 1;
  transition: all 0.3s;
  top: ${(p) => p.down};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TimeFilterFlex = styled.div`
  width: max-content;
  display: flex;
  gap: 8px;
`;
