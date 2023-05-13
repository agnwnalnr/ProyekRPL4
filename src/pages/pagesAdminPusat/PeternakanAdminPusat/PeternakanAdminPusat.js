import React from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import DataBerandaPeternakan from "../../../components/Contents/TablePeternakan/DataBerandaPeternakan";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import { Button } from "../../../components/Button/Button";
const PeternakanAdminPusat = () => {
    return(
        <div className='container'>
            <div className='logo'>
                <div>
                    <LogoApp />
                </div>
            </div>
            <div className='header'>
                <div>
                    <HeaderAdmin />
                </div>
            </div>
            <div className='nav'>
                <SidebarAdminPusat />
            </div>
        
            <div className='content'>
                <div><h3>Beranda Peternakan</h3></div>
                <DropdownKecamatan/>
                <DataBerandaPeternakan/>
                <div className="button_download">
                        <Button className="btn-pdf">
                            <img src="assets/icon/button/icon_pdf.svg"/> Pdf
                        </Button>
                        <Button className="btn-excel">
                            <img src="assets/icon/button/icon_excel.svg"/> Excel
                        </Button>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    )
}
export default PeternakanAdminPusat;