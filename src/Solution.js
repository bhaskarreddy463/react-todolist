import React, { useState} from 'react';
import MenuItems from './components/MenuItems';

const Solution=({ menuConfig }) =>{
    const [showSubItems, setShowSubItems] = useState(-1);

    const toggleSubmenuItems = (e, index)=>{
        if(showSubItems == index){
            setShowSubItems(-1);
        } else {
            setShowSubItems(index);
        }
    }

  return <div className="menu-wrapper">
    {menuConfig.map((menu, index)=>{
      return (
            <MenuItems menu={menu} key={index} index={index} showSubItems={showSubItems} toggleSubmenuItems={toggleSubmenuItems}></MenuItems>
        );
    })}
  </div>;
};

export default Solution;
