import { CustomerProvider } from "./state/customerProvider";
import { CustomerSelection } from "./components/CustomerSelection";

export const App = () => {
  return (
    <CustomerProvider>
      <header>
        <h3>Customer Selection</h3>
      </header>
      <main>
        <CustomerSelection />
      </main>
    </CustomerProvider>
  );
}

export default App;
