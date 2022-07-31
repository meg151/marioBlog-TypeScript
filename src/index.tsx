import { createRoot } from 'react-dom/client';
import 'index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from 'components/App/App';


const queryClient = new QueryClient();
const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

const Root = () => {
  return(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  )
}

root.render(<Root />);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
