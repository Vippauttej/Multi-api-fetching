import  {useEffect,useState} from 'react';
import './Covid.css'
import Axios from 'axios';


function Covid ()  {
 const [data,setdata] = useState([])

  useEffect(()=>{
    Axios.get('https://api.rootnet.in/covid19-in/stats/latest')
    .then(res =>{
      setdata(res.data.data.regional)})
    .catch(err=>console.log(err))
  }, [])

  const tData = data.map((data,index) =>{
    return(
      <tr>
        <td scope="row">{data.loc}</td>
        <td scope="row">{data.confirmedCasesIndian}</td>
        <td scope="row">{data.discharged}</td>
        <td scope="row">{data.deaths}</td>
      </tr>

    )
  })
  
  return(
    <div className="m-4">
       <center> <h3  className="display-3 my-3">Covid Dashboard</h3></center>
      <table className="table table-hover ">
        <thead className="table-light">
          <tr>
            <th scope="col">State</th>
            <th scope="col">Confirmed Cases India</th>
            <th scope="col">Discharged</th>
            <th scope="col">Deaths</th>
          </tr>
        </thead>
        <tbody className="table-secondary">
        {tData}
        </tbody>
      </table>
    </div>
  )

  

}
export default Covid;