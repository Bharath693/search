import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {connect} from "react-redux"
import {Table , Input} from 'reactstrap'
import SearchInput from './searchInput'
function UserDataDisplay({data}){
    // console.log(data)
    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Search to find the perfect house</th>
                        <th><SearchInput sendData = {data}/></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>S.no</th>
                        <th>No of rooms</th>
                        <th>Street Name</th>
                        <th>Country</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                   {data && data.map((item)=>{
                       console.log(item)
                       return(
                           <>
                           <tr>
                               <td>{item.id}</td>
                               <td>{item.house}</td>
                               <td>{item.street}</td>
                               <td>{item.country}</td>
                               <td>${item.price}.00</td>
                           </tr>
                           </>
                       )
                   })}
                </tbody>
            </Table>
        </div>
    )
}

const MapStateToProps =(state)=>{
    return{data:state.UserR}
    }
export default connect(MapStateToProps)(UserDataDisplay)

