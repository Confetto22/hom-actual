import "./Departments.css";
import CardDepartment from "./CardDepartment";

const departmentDetails = [
  {
    id: 1,
    image: "../../../public/icons/guard.png",
    name: "Protocol",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur doloremque eligendi voluptate repellat aperiam veniam.",
    cardNumber: "first",
  },
  {
    id: 2,
    image: "../../../public/icons/usher.png",
    name: "Custodians",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur doloremque eligendi voluptate repellat aperiam veniam.",
    cardNumber: "second",
  },
  {
    id: 3,
    image: "../../../public/icons/group.png",
    name: "Music",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur doloremque eligendi voluptate repellat aperiam veniam.",
    cardNumber: "third",
  },
  {
    id: 4,
    image: "../../../public/icons/bullhorn.png",
    name: "Media",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur doloremque eligendi voluptate repellat aperiam veniam.",
    cardNumber: "fourth",
  },
  {
    id: 5,
    image: "../../../public/icons/priest.png",
    name: "Pastors & Stewards",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur doloremque eligendi voluptate repellat aperiam veniam.",
    cardNumber: "fifth",
  },
  {
    id: 6,
    image: "../../../public/icons/priest.png",
    name: "Akwaaba",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur doloremque eligendi voluptate repellat aperiam veniam.",
    cardNumber: "sixth",
  },
];

function createdeptCard(singleCard) {
  return (
    <CardDepartment
      icon={singleCard.image}
      name={singleCard.name}
      desc={singleCard.desc}
      cardNo={singleCard.cardNumber}
    />
  );
}

const Departments = () => {
  return (
    <section className="departments">
      <div className="departments_heading">
        <div className="heading_content">
          <h2>join a department today</h2>

          <p>
            here are the list of departments in HOM Chapel. Never hesitate to
            make a request to serve in this great commission.
          </p>
        </div>
      </div>
      <div className="all_departments">
        {departmentDetails.map(createdeptCard)}
      </div>
      <button className="see_all">See All</button>
    </section>
  );
};

export default Departments;
