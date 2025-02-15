import React, { useState, useEffect } from 'react';
// import './Inputform.css';
import { Button } from '../../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function InputFormPerikanan({komoditi, editData}) {
    const [volume, setVolume] = useState(0);
    const [nilai_produksi, setNilaiProduksi] = useState(0);

    const history = useNavigate();
    const [validation, setValidation] = useState([]);

    useEffect(() => {
        if (editData) {
            setVolume(Number.isInteger(+editData.volume) ?parseInt(editData.volume) : editData.volume);
            setNilaiProduksi(editData.nilai_produksi);
        }
    }, [editData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(komoditi, volume, nilai_produksi);

        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('komoditi', komoditi);
        formData.append('volume', volume);
        formData.append('nilai_produksi', nilai_produksi);

        const url = editData
      ? `http://localhost:8000/api/Perikanan/${editData.id}`
      : 'http://localhost:8000/api/Perikanan';

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        try {
            if (editData) {
                await axios.post(url, formData);
                console.log('Sukses Mengupdate Data Perikanan');
                localStorage.removeItem('editData');
            } else {
                await axios.post(url, formData);
                console.log('Sukses Menambahkan Data Perikanan');
            }

            const storedDataBeranda = localStorage.getItem('tablePerikanan');
            const storedData = localStorage.getItem('dataPerikanan');
            if (storedDataBeranda) {
                localStorage.removeItem('tablePerikanan');
            }
            if (storedData) {
                localStorage.removeItem('dataPerikanan')
            }
            history('/adminperikanan');
        } catch (error) {
            setValidation(error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form-input'>
            <div className='form-input-row'>
                <label htmlFor='volume'>Volume (Ton)</label>
                <input id='volume' type='number' value={volume} onChange={(e) => setVolume(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='nilai_produksi'>Nilai Produksi</label>
                <input id='nilai_produksi' type='number' value={nilai_produksi} onChange={(e) => setNilaiProduksi(e.target.value)} />
            </div>
            <div className='button-add'>
                <Button className="tambahDataButton">
                {editData ? 'Ubah Data' : 'Tambah Data'}
                </Button>
            </div>
        </form>
    );
}

export default InputFormPerikanan;