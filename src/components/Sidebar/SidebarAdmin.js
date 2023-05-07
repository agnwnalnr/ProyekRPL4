import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const SidebarAdmin = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="sidebar">
      <nav className="navbar">
        <ul>
          <li>
            <b>MENU</b>
          </li>
          <li>
            <Link to="/berandaAdmin">
              <img src="assets/icon/icon_sidebar/icon_beranda.svg" /> Beranda
            </Link>
          </li>
          {/* dropdown menu for "Pendataan" */}
          <li
            className={showDropdown ? "dropdown active" : "dropdown"}
            onClick={toggleDropdown}
          >
            <a href="#">
              <img src="assets/icon/icon_sidebar/icon_pendataan.svg" /> Pendataan
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/adminpertanian">
                  <img src="assets/icon/logo_komoditi/pertanian_logo.svg" /> Pertanian
                </Link>
              </li>
              <li>
                <Link to="/adminpeternakan">
                  <img src="assets/icon/logo_komoditi/peternakan_logo.svg" /> Peternakan
                </Link>
              </li>
              <li>
                <Link to="/adminperikanan">
                  <img src="assets/icon/logo_komoditi/perikanan_logo.svg" /> Perikanan
                </Link>
              </li>
              <li>
                <Link to="/adminperindustrian">
                  <img src="assets/icon/logo_komoditi/perindustrian_logo.svg" /> Perindustrian
                </Link>
              </li>
              <li>
                <Link to="/adminpariwisata">
                  <img src="assets/icon/logo_komoditi/pariwisata_logo.svg" /> Pariwisata
                </Link>
              </li>
            </ul>
          </li>
          {/* end of dropdown menu for "Pendataan" */}
          <li>
            <Link to="/laporan">
              <img src="assets/icon/icon_sidebar/icon_laporan.svg" /> Laporan
            </Link>
          </li>
          <li>
            <img src="assets/icon/icon_sidebar/line1.png" />
          </li>
          <li>
            <a href="#">
              <img src="assets/icon/icon_sidebar/icon_saran.svg" /> Saran
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/icon/icon_sidebar/icon_keluar.svg" /> Keluar
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SidebarAdmin;
