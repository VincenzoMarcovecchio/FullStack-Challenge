const BackDrop = ({ click, show }) => {
  return show && <div className="backdrop" onClick={click}></div>;
};

export default BackDrop;
