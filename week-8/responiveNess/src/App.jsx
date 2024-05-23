import RevenusCard from "./components/RevenusCard";

function App() {
  return (
    <>
      <div>
        <RevenusCard
          title={"Next Pay"}
          amount={"22,00,0.938"}
          orderCount={23}
        />
      </div>
    </>
  );
}

export default App;
