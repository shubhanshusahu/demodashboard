import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import './table.css'
const columns = [
    {
        name: 'ASSET',
        selector: (row: any) =><div><img src ={row.img}/> {row.asset} </div>,
        sortable: true,
    },
    {
        name: 'AMOUNT',
        selector: (row: any) => row.amount,
        sortable: true,
    },
 
    {
        name: 'USER ACCOUNT',
        selector: (row: any) => row.user,
        sortable: true,
    },
    {
        name: 'REFERRAL EARNING',
        selector: (row: any) => row.referral_earnings,
        sortable: true,
    },
   
];


export default function FirstTab(props:any) {
    const demodata: any[] | (() => any[])=[]

    const [search, setsearch] = useState("")
    const [filtered, setfiltered] = useState(demodata)
    const [Initialdata, setInitialdata] = useState(demodata)


    const getdata = async () => {
        try {
            const response = await axios.get(`https://raw.githubusercontent.com/akshita151199/APIs/main/data`);
            setfiltered(response.data.data)
            setInitialdata(response.data.data)
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
            className={'datatable'}
                columns={columns}
                data={filtered}
                fixedHeader
                fixedHeaderScrollHeight='340px'
                selectableRowsHighlight
                highlightOnHover
            /> : ''}
        </>
    )
}
