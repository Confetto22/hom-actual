const CardDepartment = (props) => {
  return (
    <div className="department_card" id={props.cardNo}>
      <img src={props.icon} alt="" className="dept_img" />
      <h5 className="department_name">{props.name}</h5>
      <p className="department_desc">{props.desc}</p>
      <button className="right_arrow">
        {" "}
        <i className="fa-solid fa-arrow-right-long"></i>{" "}
      </button>
    </div>
  );
};

export default CardDepartment;
