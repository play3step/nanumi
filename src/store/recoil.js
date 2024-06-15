import { atom } from "recoil";

export const TicketState = atom({
  key: "TicketState",
  default: {
    isVisible: false,
    parkingLotId: null,
    type: "",
  },
});
