import "./App.css";
import BroswerActions from "./components/BroswerActions";
import MusicMeta from "./components/MusicMeta";

// width = 500, height = 850
function App({}) {
  return (
    <div className="root-styles min-h-screen min-w-full flex flex-col justify-between p-5">
      <BroswerActions />
      <MusicMeta />
    </div>
  );
}

export default App;
