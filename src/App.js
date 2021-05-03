import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <header className="app__header">

      </header>
      <main className="app__body">
        <Sidebar />
        <Chat />
      </main>
    </div>
  );
}

export default App;
