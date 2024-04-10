import React, { useEffect } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import UpdateForm from '../../components/UpdateForm';


function Update() {
    const { id } = useParams()
    const product = useOutletContext();

    

    return (

        <div className='container py-5 px-2'>

            <UpdateForm {...product[parseInt(id)]}></UpdateForm>

        </div>

    )
}

export default Update