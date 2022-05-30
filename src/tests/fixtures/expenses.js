import moment from "moment";
const expenses = [
  {
    id: "abc1",
    description: "Food",
    amount: 1,
    note: "a",
    createdAt: moment(0).subtract(1, "day").valueOf(),
  },
  {
    id: "abc2",
    description: "Drinks",
    amount: 2,
    note: "b",
    createdAt: moment(0).valueOf(),
  },
  {
    id: "abc3",
    description: "Party",
    amount: 3,
    note: "c",
    createdAt: moment(0).add(2, "days").valueOf(),
  },
];

export default expenses;
