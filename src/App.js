import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import AddPost from './components/AddPost';
import PostView from './components/PostView';

function App() {
  return (
      <Router>
        <div className="page">
          <Routes>
            <Route path="/posts/new" element={<AddPost />} />
            <Route path="/posts/:id" element={<PostView />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;