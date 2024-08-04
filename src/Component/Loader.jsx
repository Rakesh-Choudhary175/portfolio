function Loader({ hide }) {
  const style = { display: "none" };
  return (
    <div
      className={`page-loader ${hide ? "fade-out" : ""}`}
      style={hide ? style : {}}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
