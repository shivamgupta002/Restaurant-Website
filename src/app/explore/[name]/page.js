import CustomerHeader from "@/app/_components/CustomersHeader";

const Page = (props) => {
  const name = props.params.name;
  return (
    <>
      <CustomerHeader />
      <div className="restaurant-page-banner">
        <h1>{decodeURI(name)}</h1>
      </div>
    </>
  );
};
export default Page;
