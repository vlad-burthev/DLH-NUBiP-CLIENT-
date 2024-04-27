import { useEffect } from "react";
import { useLazyCheckAuthUserQuery } from "./services/usersApi";
import Router from "./routes/Router";

const App = () => {
  const [checkAuthUser] = useLazyCheckAuthUserQuery();

  useEffect(() => {
    checkAuthUser("");
  }, []);

  return (
    <>
      <Router />
    </>
  );
};

export default App;
