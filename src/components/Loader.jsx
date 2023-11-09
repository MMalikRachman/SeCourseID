import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
};

export default Loader;
