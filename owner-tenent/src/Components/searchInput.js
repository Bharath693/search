import React, { useState } from 'react'
import {Table , Input} from 'reactstrap'
function SerachInput({sendData}){
    const [search , setSearch] = useState('')
    // console.log(sendData)
    let num =search
    console.log(num)
    function handleInput(e){
        setSearch(
            
            e.target.name=e.target.value
        )
    }
    return(
        <>
        <div>
            <Input placeholder="search by Company Name"
                   type="text"
                   value={search}
                   name="search"
                   onChange={handleInput}
                   />     
        </div>
       {sendData && sendData.map((item , index) =>{
           console.log(item.price)
           return(
               <>
               {/* {console.log(typeof(parseInt(search)))} */}
               {search === item.street || search == item.price ? 
            
               <Table>
                   <tbody>
                       <tr>
                           <td>{item.id}</td>
                           <td>{item.house}</td>
                           <td>{item.street}</td>
                           <td>{item.country}
                           <td>${item.price}.00</td>
                           </td>
                       </tr>
                   </tbody>
               </Table> 
               : ""}
               </>
           )
       })}
       </>
    )
}
export default SerachInput