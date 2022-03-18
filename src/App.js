import Jumbotron from "./components/jumbotron";
import jumboData from "./fixtures/jumbo.json";

function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => {
        return <Jumbotron key={item.id} direction={item.direction} />;
      })}
    </Jumbotron.Container>
  );
}

export default App;
