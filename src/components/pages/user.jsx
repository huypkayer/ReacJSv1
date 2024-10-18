import React from 'react';
import { Space, Table, Tag } from 'antd';
import UserTable from '../user/user.table';
import UserForm from '../user/user.form';

const UserPage = () => {
   
return(
    <>
        <div className='user'>
        <UserForm/>
            <UserTable/>
        </div>
    </>
)
}

export default UserPage;