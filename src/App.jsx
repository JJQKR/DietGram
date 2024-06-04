import { useState } from "react";

import EditProfile from "./components/EditProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EditProfile></EditProfile>
    </>
  );
}

export default App;
