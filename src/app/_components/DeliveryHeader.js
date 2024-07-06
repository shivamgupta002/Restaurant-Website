"use client";
import Link from "next/link";

const DeliveryHeader = (props) => {
  return (
    <>
      <div className="header-wrapper">
        <div className="logo">
          <img
            src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg"
            alt="logo"
            style={{ width: 100 }}
          />
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default DeliveryHeader;
