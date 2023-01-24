import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({users,data}) => {
    
    return users.map((users,key)=>(
        
        <tr key={users.userid} >
            <div className='details'>
           <div className='input-values'>
           <td className='n'>{users.name}</td>
            <td>{users.gender}</td>
        <td>{users.email}</td>
           <td className='w'> {users.website}</td>
           <div className='skills'>
            
        <td className='s'>{users.skills.map((e,key)=>(
            <td className='map'>{e }&nbsp;</td>
        ))} </td>
         
        
        </div>
            </div>
            <div className='input-image'>
            <img src={users.image} id="img" alt="1"/>
            </div>
            <td className='delete-btn' onClick={()=>data(users.userid)}>
                <Icon icon={trash}/>
            </td> 
            </div>          
        </tr>            
    
))
}