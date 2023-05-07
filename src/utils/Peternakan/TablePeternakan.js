import React from "react";
import { Button } from "../../components";

export function getTablePeternakan() {
    return [
        {
            name: "No",
            selector: row => row.nomor,
            sortable: true
        },
        {
            name: "Komoditi",
            selector: row => row.komoditi,
            sortable: true
        },
        {
            name: "Total",
            selector: row => row.total,
            sortable: true
        },
        {
            name: "Kelahiran",
            selector: row => row.kelahiran,
            sortable: true
        },
        {
            name: "Kematian",
            selector: row => row.kematian,
            sortable: true
        },
        {
            name: "Pemotongan",
            selector: row => row.pemotongan,
            sortable: true
        },
        {
            name: "Ternak Masuk",
            selector: row => row.ternak_masuk,
            sortable: true
        },
        {
            name: "Ternak Keluar",
            selector: row => row.ternak_keluar,
            sortable: true
        },
        {
            name: "Populasi",
            selector: row => row.populasi,
            sortable: true
        },
        {
            name: "",
            selector: row => (
                <div>
                    <Button className="btn-edit"><img src="assets/icon/button/button-edit.svg"/></Button>
                    <Button className="btn-delete"><img src="assets/icon/button/button-delete.svg"/></Button>
                </div>
            ),
            sortable: true
        }
    ];
}