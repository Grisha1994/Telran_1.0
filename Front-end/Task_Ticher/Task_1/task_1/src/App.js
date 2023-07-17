import { useDispatch } from "react-redux";
import CommentsContainer from "./components/commentsContainer";
import { useEffect } from "react";
import {commentsAction} from './asyncAction/commentsAction'


function App() {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(commentsAction)
  }, [dispatch]);

  return (
    <div>
      <CommentsContainer/>
    </div>
  );
}

export default App;
