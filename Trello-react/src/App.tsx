import {Auth} from "./Screens/Auth";
import {Dashboard} from "./Screens/Dashboard";
import {Board} from "./Screens/Board";
import {BrowserRouter,Routes,Route} from "react-router";
import "./index.css";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

export function App() {
  return <div>

    <DndProvider backend={HTML5Backend}> 
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/board/:boardId" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </DndProvider>
  </div>


}

export default App;
