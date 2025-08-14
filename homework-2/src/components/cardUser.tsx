type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  createdAt: Date;
};
const CardUser = (props: User) => {
  const { id, name, email, password, age, createdAt } = props;
  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,.3",
        padding: "1.5rem",
        borderRadius: "18px",
        textAlign: "left",
      }}
    >
      <p>ID : {id}</p>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p>password : {password}</p>
      <p>Age : {age}</p>
      <p>createdAt : {createdAt.toLocaleString()}</p>
    </div>
  );
};
export default CardUser;
