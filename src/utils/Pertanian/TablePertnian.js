import React from "react";
import { Button } from "../../components";

export function getTablePertanian() {
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
            name: "Bidang",
            selector: row => row.bidang,
            sortable: true
        },
        {
            name: "Luas Panen (Ha)",
            selector: row => row.luasPanen,
            sortable: true
        },
        {
            name: "Produksi (Ton)",
            selector: row => row.produksi,
            sortable: true
        },
        {
            name: "Produktivitas (Kw/Ha)",
            selector: row => row.produktivitas,
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
