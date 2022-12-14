import './App.css';
import AuthContextProvider from './context/AuthContextProvider';
import "./input.css";
import "./output.css";
import AppRouter from './router/AppRouter';

function App() {




  return (
    <div className="App dark:bg-[#23242a]">
   <AuthContextProvider>
        <AppRouter />
       
      </AuthContextProvider>
    </div>
  );
}

export default App;
