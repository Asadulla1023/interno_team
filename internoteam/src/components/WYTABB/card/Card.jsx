import React from 'react'

import Avatar from "../images/avatarForUser.png"

export const Card = ({
  name, desc, loc
}) => {

  
  return (
    <div className={"cards"}>
      <div className="centerthink">
        <div className="imgWithName">
          <img src={Avatar} alt="userAvatar" />
          <div className="names">
            <h3>{name}</h3>
            <p>{loc}</p>
          </div>
        </div>
        <p className='about'>{desc}</p>
      </div>
    </div>
  )
}



// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// export const TaskCard = ({
//   title,
//   desc,
//   id,
//   count,
//   deleteTodoHandler,
//   isDeleted,
// }) => {
//   const [isCompleted, setIsCompleted] = useState(false);
//   const markTodoHandler = () => {
//     setIsCompleted(!isCompleted);
//   };

//   return (
//     <Card>
//       <Card.Header className={isCompleted ? "text-bg-success" : ""}>
//         Task #{count}
//       </Card.Header>
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>{desc}</Card.Text>
//         <Button variant="success" className="btn" onClick={markTodoHandler}>
//           {isCompleted ? "Mark as incomplete" : "Mark as complete"}
//         </Button>
//         <Button
//           variant="danger"
//           onClick={() => {
//             setTimeout(() => {
//               isDeleted && deleteTodoHandler(id);
//             }, 3000);
//           }}
//         >
//           Delete the task
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

