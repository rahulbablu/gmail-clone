import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({title, number, Icon, selected}) => {
  return (
    <div className={`sidebarOption ${selected && 'sidebarOption--active'}`}>
        <Icon />
        <h4>{title}</h4>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOption