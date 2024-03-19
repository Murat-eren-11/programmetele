const Programme = ({ programme }) => {
  return (
    <div className="programme" key={programme.programme}>
      <p className="time">{programme.time}</p>
      <div className="imgprogramme">
        <img src={programme.image} alt="" />
      </div>
      <h4 className="title">{programme.title}</h4>
      <p className="programmetype">{programme.type}</p>
      <p className="duration">{programme.duration}</p>
      {programme.isUnseen ? <p>Inédit</p> : programme.isUnseen}
      {programme.direct ? <p>Direct</p> : programme.direct}
    </div>
  );
};
export default Programme;
