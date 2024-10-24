import React from 'react';
import SidebarButton from './sidebarButton';
import './sidebar.css';
import { FaHome, FaMusic, FaList, FaCog } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img
        src=".\public\pexels-photo-1704488.webp"
        className="pp"
        alt="profile picture"
      ></img>
      <div>
        <SidebarButton title="Home" to="" icon={<FaHome />} />
        <SidebarButton title="Covers" to="" icon={<FaMusic />} />
        <SidebarButton title="Playlist" to="" icon={<FaList />} />
        <SidebarButton title="Settings" to="" icon={<FaCog />} />
      </div>
      <SidebarButton />
    </div>
  );
}
