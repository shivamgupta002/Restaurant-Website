"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RestaurantHeader = () => {
  const [details, setDetails] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data && pathName == "/restaurant/dashboard") {
      router.push("/restaurant");
    } else if (data && pathName == "/restaurant") {
      router.push("/restaurant/dashboard");
    } else {
      setDetails(JSON.parse(data));
    }
  }, []);
  const logout = () => {
    router.push("/restaurant");
    localStorage.removeItem("restaurantUser");
  };
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
          {details && details.name ? (
            <>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
              <li>
                <Link href="/">Profile</Link>
              </li>
            </>
          ) : (
            <li>
              <Link href="/restaurant">Login/SignUp</Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default RestaurantHeader;
