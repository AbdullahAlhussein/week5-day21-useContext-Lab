import { useContext } from "react";
import { UserContext } from "../App";

function Body() {
  const userContext = useContext(UserContext)
  return <div>
    <img src={userContext.userValue} alt="image city"></img>
  </div>;
}

export default Body;