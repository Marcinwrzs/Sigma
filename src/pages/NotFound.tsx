import { Link } from "react-router-dom";
import "@/styles/not-found.css";

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <h1 className="not-found-title">Page Not Found</h1>
      <Link to="/" className="not-found-link">
        Go back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
