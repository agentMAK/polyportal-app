import React from "react";
import { createPopper } from "@popperjs/core";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"

const UserDropdown = (props:any) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef:any = React.createRef();
  const popoverDropdownRef:any = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={e => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className=" w-8 h-8 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <Image
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={props.image}
              width={32}
              height={32}
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"
        }
        style={{ minWidth: "12rem" }}
      >
        <a
          href="#pablo"
          className={
            "text-sm font-sans-medium py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={() => signOut()}
        >
          Sign Out
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
