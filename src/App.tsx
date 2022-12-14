import { Header } from './components/Header';
import { RouteList } from './routes/RouteList';
import { ContextProvider } from './contexts/Context';

function App() {
  return (
    <ContextProvider>
      <Header />
      <RouteList />
    </ContextProvider>
  );
}

export default App;
