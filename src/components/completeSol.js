import cx from 'classnames';
import { Component, useState } from 'react';

const SubMenuItem = ({menu}) => {
  return (
    (<ul data-test-id={`ul-${menu.title.toLowerCase()}`} className={`ul-${menu.title}`}>
        {
            menu.subItems.map((item, i)=>{
                return (
                <li key={i} data-test-id={`li-${menu.title.toLowerCase()}-${item.toLowerCase()}`} className={`li-${menu.title}-${item}`}>
                    {item}
                </li>
                )
            })
        }
    </ul>)
  )
}

const MenuItems = ({menu, index, toggleSubmenuItems, showSubItems}) => {
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

function HeaderButton(){
    const menuConfig = [
        {title:'Home'},
        {title:'About',subItems:['test1','test1']},
        {title:'Login',subItems:['login12','login123']}
    ]
    return (
        <Solution menuConfig={menuConfig}></Solution>
    );
}

export default class LikeButton extends Component {
    render() {
        return (
            <>
                <div>
                    <HeaderButton></HeaderButton>
                </div>
            </>
        );
    }
}
