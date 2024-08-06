import loading from "./_components/image/loading.gif";
const Loading = () => {
  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15%",
          }}
        >
          <img src="/image/loading.gif" alt="loading" />
        </div>
      </div>
    </>
  );
};
export default Loading;
