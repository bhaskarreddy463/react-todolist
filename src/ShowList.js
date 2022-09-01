import React from 'react'

const ShowList = (props) => {
  return (
    <div>
        <ul>
        {
            props.items.length > 0 && props.items.map((item, index)=>{
            return (<>
                <li className={item.isDone?'is-done':''} onClick={(e)=>props.strikeLine(item)} key={item.key.toString()}>
                    <span>{item.text}</span>
                    <input className='delete-button' type="button" value="Delete" onClick={(e)=>{props.onDelete(e, item)}}/>
                </li>
            </>);
            })
        }
        </ul>
  </div>
  )
}

export default ShowList