import axios from "axios"
import { useEffect, useState } from "react"

/**axios로 들어온 data 내부의 객체 타입 정의 */
interface Photo{
    albumId:number;
    id:number;
    thumbnailUrl:string
    title:string;
    url:string
}

const AxiosTest = () => {
    //위에서 객체 타입을 정의해야 내부의 요소들을 사용할 수 있다.
    const [album,setAlbum]=useState<Photo[]>([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((res)=>{
            setAlbum(res.data);
        }
        ).catch((e)=>console.log(e))
    },[])

  return (
    <div>
        {album &&  
        <div>
            {album.map((item)=>
                <div key={item.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
                <h3>{item.title}</h3> {/* 제목 출력 */}
                <img src={item.thumbnailUrl} alt={item.title} /> {/* 썸네일 이미지 출력 */}
                <p><a href={item.url} target="_blank" rel="noopener noreferrer">View Full Image</a></p> {/* 원본 이미지 링크 */}
            </div>
            )}
        </div>
        }
    </div>
  )
}

export default AxiosTest