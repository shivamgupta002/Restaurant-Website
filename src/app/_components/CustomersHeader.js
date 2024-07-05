import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CustomerHeader = (props) => {
  // To Navigate
  const router = useRouter();

  const userStorage = JSON.parse(localStorage.getItem("user"));
  const cartStorage = JSON.parse(localStorage.getItem("cart"));
  // console.log(cartStorage?.length);
  // console.log(userStorage);

  const [cartNumber, setCartNumber] = useState(cartStorage?.length);
  const [cartItem, setCartItem] = useState(cartStorage);
  const [user, setUser] = useState(userStorage ? userStorage : undefined);

  useEffect(() => {
    if (props.cartData) {
      // console.log(props);
      if (cartNumber) {
        // it protect ordering food from multiple Restaurant
        if (cartItem[0].resto_id != props.cartData.resto_id) {
          localStorage.removeItem("cart");
          setCartNumber(1);
          setCartItem([props.cartData]);
          localStorage.setItem("cart", JSON.stringify([props.cartData]));
        } else {
          let localCartItem = cartItem;
          localCartItem.push(JSON.parse(JSON.stringify(props.cartData)));
          setCartItem(localCartItem);
          setCartNumber(cartNumber + 1);
          localStorage.setItem("cart", JSON.stringify(localCartItem));
        }
      } else {
        setCartNumber(1);
        setCartItem([props.cartData]);
        localStorage.setItem("cart", JSON.stringify([props.cartData]));
      }
    }
  }, [props.cartData]);

  useEffect(() => {
    if (props.removeCartData) {
      let localCartItem = cartItem.filter((item) => {
        return item._id != props.removeCartData;
      });
      setCartItem(localCartItem);
      setCartNumber(cartNumber - 1);
      localStorage.setItem("cart", JSON.stringify(localCartItem));
      if (localCartItem.length == 0) {
        localStorage.removeItem("cart");
      }
    }
  }, [props.removeCartData]);

  useEffect(() => {
    if (props.removeCartData) {
      setCartItem([]);
      setCartNumber(0);
      localStorage.removeItem("cart");
    }
  }, [props.removeCartData]);
  //Logout
  const logout = () => {
    localStorage.removeItem("user");
    router.push("/user-auth");
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
          {user ? (
            <>
              <li>
                <Link href="/myprofile">{user?.name}</Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/user-auth">Login</Link>
              </li>
              <li>
                <Link href="/user-auth">SignUp</Link>
              </li>
            </>
          )}

          <li>
            <Link href={cartNumber ? "/cart" : "#"}>
              Cart({cartNumber ? cartNumber : 0})
            </Link>
          </li>
          <li>
            <Link href="/restaurant">Add Restaurant</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default CustomerHeader;
