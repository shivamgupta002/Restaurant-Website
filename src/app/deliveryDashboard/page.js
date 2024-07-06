"use client";
import { useEffect } from "react";
import DeliveryHeader from "../_components/DeliveryHeader";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    const delivery = JSON.parse(localStorage.getItem("delivery"));
    if (!delivery) {
      router.push("/deliveryPartner");
    }
  }, []);
  return (
    <>
      <DeliveryHeader />
      <h1>Delivery dashboard</h1>
    </>
  );
};
export default Page;
