import { useQuery } from "@tanstack/react-query";
import axios from "axios";
//get에는 useQuery가 사용됨
const ReactQueryTest = () => {
    /**첫번째 파라미터로 unique key를 포함한 배열이 들어간다. 
     * 이후 동일한 쿼리를 불러올때 유용하게 사용됨
     * 첫번째 파라미터로 들어가는 배열의 첫 요소는 unique key로 사용되고, 
     * 두번째 요소부터는 query함수 내부의 파라미터로 값들이 전달 
     * 두번째 파라미터를 실제 호출하고자 하는 비동기 함수가 들어간다.
     * 이때 함수는 Promise를 반환하는 형태 
     * 최종 반환값은 api의 성공, 실패 여부, 반환값을 포함한 객체이다.*/
    const {data,error,isLoading}=useQuery({
        queryKey:['repoData'], //첫번째 파라미터 
        queryFn:()=>
            axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((res)=>res.data)
    });
    if (isLoading) return <div>loding</div>
    if(error) return <div>Error : {error.message}</div>
  return (
    <div>
        {data.map((photo:any)=>(
            <div key={photo.id}>{photo.title}</div>
        ))}
    </div>
  )
}

export default ReactQueryTest