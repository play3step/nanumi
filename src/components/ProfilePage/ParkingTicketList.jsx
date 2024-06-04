import React from "react";
import styled from "styled-components";

const ParkingTicket = styled.div`
    width: ${props => props.width}px;
    height:auto;
    background-color: #ffffff;
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    gap:4px;
    border-bottom: solid 1px #EAEAEA;
    color:#333333;
`;
const TopInfo = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
`;
const TicketName = styled.div`
    font-size: 14px;
    font-weight: bold;
`;
const Price = styled.div`
    font-size: 14px;
    font-weight: bold;
`;
const ValidDate = styled.div`
    font-size: 14px;
`;

const ParkingTickets = [
    {
        TicketName : "시흥시 공영주차장",
        Price: "5000원",
        ValidDate : "18:30 ~ 23:30 (야간권)",
    },
    {
        TicketName : "정왕동 나눔주차장",
        Price: "1000원",
        ValidDate : "10:30 ~ 14:30 (주간권)",
    },
    {
        TicketName : "행복동 공영주차장",
        Price: "3000원",
        ValidDate : "18:30 ~ 23:30 (야간권)",
    }
  
];


function ParkingTicketList(props) {

    const {width} = props;
    
    return (
        <div>
            {ParkingTickets.map(function (props) {
                return (
                <ParkingTicket width={width}>
                    <TopInfo> 
                        <TicketName>{props.TicketName}</TicketName> 
                        <Price>{props.Price}</Price>
                    </TopInfo>
                    <ValidDate>{props.ValidDate}</ValidDate>
                </ParkingTicket>
                );
            })}
        </div>
    );
}
export default ParkingTicketList;