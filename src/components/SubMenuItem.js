import React from 'react'

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

export default SubMenuItem