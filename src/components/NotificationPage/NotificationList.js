import React from "react";
import styled from "styled-components";

const BoxNoti = styled.div`
  width: 390px;
  height: auto;
  background-color: #f4f4f4;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  flex-direction: column;
  border-bottom: solid 1px #cbcbcb;
  margin-left: auto;
  margin-right: auto;
`;
const BoxInfo = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-direction: row;
  gap: 4px;
`;
const BlueText = styled.div`
  color: #3182f7;
`;
const Info = styled.div``;
const Date = styled.div`
  font-size: 8px;
  color: #a7a7a7;
`;

const Notifications = [
  {
    BlueText: "[ 주차권 ]",
    Info: "현재 소지 중이신 야간 주차권이 곧 만료됩니다.",
    Date: "2024.02.12",
  },
  {
    BlueText: "[ 공지 ]",
    Info: "정왕1동에 성담주차장 개장",
    Date: "2024.01.17",
  },
  {
    BlueText: "[ 공지 ]",
    Info: "지도 업데이트로 인한 이용안내",
    Date: "2024.01.05",
  },
];

function NotificationList(props) {
  return (
    <div>
      {Notifications.map(function (props) {
        return (
          <BoxNoti>
            <BoxInfo>
              <BlueText>{props.BlueText}</BlueText>
              <Info>{props.Info}</Info>
            </BoxInfo>
            <Date>{props.Date}</Date>
          </BoxNoti>
        );
      })}
    </div>
  );
}
export default NotificationList;
