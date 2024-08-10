interface User{
    name:string;
    age:number;
}
const PropsTest = ({name,age}:User) => {
  return (
    <>
      <div>{name}</div>
      <div>{age}</div>
    </>
  
  )
}

export default PropsTest