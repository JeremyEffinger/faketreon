import { atom, selector } from "recoil";

const UrlNameState = atom({
  key: "UrlNameState",
  default: "blah",
});

export default UrlNameState
