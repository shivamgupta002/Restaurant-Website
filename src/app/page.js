import CustomerHeader from "./_components/CustomersHeader";
import Footer from "./_components/Footer";
export default function Home() {
  return (
    <main>
      <CustomerHeader />
      <div className="main-page-banner">
        <h1>Food Delivery app</h1>
        <div className="input-wrapper">
          <input
            type="text"
            className="select-input"
            placeholder="Select Place"
          />
          <input
            type="text"
            className="search-input"
            placeholder="Enter food or restaurant name"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
