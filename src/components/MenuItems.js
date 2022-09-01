import React, { useState } from 'react'
import SubMenuItem from './SubMenuItem';

const MenuItems = ({menu, index, toggleSubmenuItems, showSubItems}) => {
    // const [showSubItems,setShowSubItems]=useState(false);
    // const toggleSubmenuItems =()=>{
    //     setShowSubItems(!!!showSubItems);
    // };
  return (
    <div data-test-id={`first-level-${menu.title.toLowerCase()}`} key={index} className={`first-level-${menu.title}`}>
        {menu.title}
        {menu.subItems && <button onClick={(e)=>toggleSubmenuItems(e, index)} data-test-id={`button-${menu.title.toLowerCase()}`} className={`button-${menu.title}`}>{showSubItems == index?'Hide':'Expand'}</button>}
        {menu.subItems && showSubItems ==index &&
        <SubMenuItem menu={menu}></SubMenuItem>
        }
    </div>
  )
}

export default MenuItems