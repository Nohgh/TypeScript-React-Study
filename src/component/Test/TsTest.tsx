const TsTest = () => {
    interface userI{
        id:number;
        name:string
    }
    //TODO:todo 형광펜
    const users:userI[] = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Alice' }
      ];
    const user:userI|undefined=users.find((u)=>{return u.name==='Jane'});     
    return (
        <div>{user?user.id:"none"}</div>
    )
}
//
export default TsTest