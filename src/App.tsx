import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Routing from './routes/Routing';
import { BrowserRouter } from 'react-router';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
