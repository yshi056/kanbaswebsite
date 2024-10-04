import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function AMControlButtons() {
  return (
    <div className="float-end">
      <BsPlus className="fs-4 me-2" /> 
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}