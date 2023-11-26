import { FaShoppingBag, FaChartPie } from "react-icons/fa";
import {
  BsPersonFill,
  BsFillPersonLinesFill,
  BsFillPersonPlusFill,
  BsPersonCircle,
} from "react-icons/bs";
import { IoMdList, IoMdSettings } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { GoOrganization } from "react-icons/go";

import Link from "next/link";

function getItem(label, key, parent, icon, children, type) {
  return {
    key,
    icon,
    children,
    label: children ? (
      label
    ) : (
      <Link
        href={
          label === "Dashboard"
            ? `/${label.toLowerCase().split(" ").join("-")}`
            : `/${parent.toLowerCase()}/${label
                .toLowerCase()
                .split(" ")
                .join("-")}`
        }
      >
        {label}
      </Link>
    ),
    type,
  };
}

export const items = [
  getItem("Dashboard", "sub1", "", <FaChartPie />),
  getItem("Product", "sub2", "", <FaShoppingBag />, [
    getItem("Products", "sub3", "Product", <IoMdList />),
    getItem("Add product", "sub4", "Product", <MdAddShoppingCart />),
  ]),
  getItem("Buyer", "sub5", "", <BsPersonFill />, [
    getItem("Buyers", "sub6", "Buyer", <BsFillPersonLinesFill />),
    getItem("Add buyer", "sub7", "Buyer", <BsFillPersonPlusFill />),
  ]),
];

export const settings = [
  getItem("Settings", "sub8", "", <IoMdSettings />, [
    getItem("Profile", "sub9", "Settings", <BsPersonCircle />),
    getItem("Organisation", "sub10", "Settings", <GoOrganization />),
  ]),
];
