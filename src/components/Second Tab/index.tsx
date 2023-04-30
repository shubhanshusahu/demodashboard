import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Site name',
        selector: (row: any) => row.site_name,
        sortable: true,
    },
    {
        name: 'Email',
        selector: (row: any) => row.contact_details.email_address,
        sortable: true,
    },
 
    {
        name: 'Contact No.',
        selector: (row: any) => row.contact_details.phone_number,
        sortable: true,
    },
   
    // {
    //     name: 'Action',
    //     cell: (row: any) => {
    //         return (<><button className='btn btn-primary'>Edit</button>
    //             <button className='btn btn-danger'>Delete</button>
    //         </>)
    //     }
    // }
];


export default function SitesDatatable(props:any) {
    const demodata: any[] | (() => any[])=[]
    //     {
    //       "creation_datetime": "2022-11-26T16:53:27.331000",
    //       "creation_owner": "Admin",
    //       "site_name": "Loading..",
    //       "contact_details": {
    //         "phone_number": "",
    //         "email_address": ""
    //       },
    //       "address": {
    //         "address": "",
    //         "country": "",
    //         "postal_code": ""
    //       },
    //       "site_id": "",
    //       "kiosk_list": []
    //     }
    //   ] 

    const [search, setsearch] = useState("")
    const [filtered, setfiltered] = useState(demodata)
    const [Initialdata, setInitialdata] = useState(demodata)


    const getdata = async () => {
        try {
            const response = await axios.get(``);
            setfiltered(response.data)
            setInitialdata(response.data)
            console.log(response.data)
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getdata()


    }, [])

  

    return (
        <>
            {filtered != null ?   <DataTable
                columns={columns}
                data={filtered}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='340px'
                selectableRowsHighlight
                highlightOnHover
                subHeader
            /> : ''}
        </>
    )
}
