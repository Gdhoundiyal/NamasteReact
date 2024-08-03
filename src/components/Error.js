import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <h3>Something went wrong</h3>
      <div>
        {error.status}:{error.statusText}
      </div>
    </div>
  );
};

export default Error;
