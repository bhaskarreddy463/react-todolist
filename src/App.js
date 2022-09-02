import React, { useState } from 'react';
import './App.css'
import FormInputs from './components/forms/FormInputs';
import ShowList from './ShowList';
import Solution from './Solution';

const App = () => {

  const menuConfig = [
    {title:'Home'},
    {title:'About',subItems:['test1','test1']},
    {title:'Login',subItems:['login12','login123']}
  ]
  const [inputVal, setInputVal] = useState('');
  const [items, setItems] = useState([]);
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const onSubmit = (e)=>{
    console.log(e);
    e.preventDefault();
    const newItems = [...items, {key:Date.now(),text:inputVal, isDone:false}]
    setItems(newItems);
    setInputVal('');
  }
  const onDeleteFn = (e, deleteItems)=>{
    console.log(deleteItems);
    const filteredItems = items.filter((item)=>{
      return item.key!=deleteItems.key
    });
    setItems(filteredItems);
  }

  const strikeLine = (strikeItem)=>{
    console.log(strikeItem);
    const mItems = items.map(item=>{
        if(item.key==strikeItem.key){
          item.isDone = !item.isDone
        }
        return item
      });
    
    setItems(mItems);
  }

  const StatusMsg = ()=>{
    let doneItems = 0;
    items.map((item)=>{
      if(item.isDone){
        doneItems +=1;
      }
    });
    const showmsg = `${doneItems} remaining task out of ${items.length} tasks`;
    return (<div>
      {showmsg}
    </div>);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    // with useState

    console.log("handleSubmit",values);

    // without useState
    // const data = new FormData(e.target);
    // console.log(data);
    // console.log(Object.fromEntries(data.entries()));
  };
  
  const onChange = (e)=>{
    const {name, value} = e.target;
    setValues({...values, [name]:value});
  };

  console.log(values);
  return (
    <div className='app'>
     <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      {
        inputs.map((input)=>{
          return(
            <FormInputs key={input.id} {...input} value={values[input.name]} onChange={onChange}></FormInputs>
          );
        })
      }
      <button>Submit</button>
     </form>
    </div>
  )
}

export default App;
