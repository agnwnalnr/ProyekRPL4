import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTablePerikanan } from "../../../utils/Perikanan/TablePerikanan";
import dataPerikanan from "../../../config/Perikanan/dataPerikanan.json";
import axios from "axios";
// import "./DataPertanian.css";
const DataPerikanan = () => {

    const [tablePerikanan, setDataPerikanan] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        async function fetchDataPerikanan() {
            let data;
            const storedData = localStorage.getItem("dataPerikanan");
            if (storedData) {
                data = JSON.parse(storedData);
            } else {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get('http://localhost:8000/api/PerikananByKecamatan');
                data = response.data;
                localStorage.setItem('dataPerikanan', JSON.stringify(data));
            }
            setDataPerikanan(data);
        }
        fetchDataPerikanan();
    }, []);
    return(
        <div className="container-table">
            <DataTable
                columns={getTablePerikanan()}
                data={tablePerikanan}
            />
        </div>
    )
}
export default DataPerikanan;