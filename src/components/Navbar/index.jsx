import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/analytics">Analytics</Link>
    </div>
  );
};

export default index;
