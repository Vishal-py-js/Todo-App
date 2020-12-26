import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  const[todoList, setTodoList] = useState([])
  const[activeItems, setActiveItems] = useState({
    id: null,
    title:'',
    completed:false
  })
  const[editing, setEditing] = useState(false)

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async() => {
    const res = await axios.get('https://todo-appfullstack.herokuapp.com/api/')
    const response = res.data
    setTodoList(response)
  }

  const handleChange = (e) => {
    const value = e.target.value
    setActiveItems({...activeItems,title:value});
  }

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    let csrftoken = getCookie('csrftoken')

    let url = 'https://todo-appfullstack.herokuapp.com/api/create/'

    if(editing==true) {
      url = `https://todo-appfullstack.herokuapp.com/api/update/${activeItems.id}/`
      setEditing(false)
    }
    await axios({
      method:'POST',
      url:url,
      data:activeItems,
      headers:{
        'Content-type':'application/json',
        'X-CSRFToken':csrftoken
      }
    })
    window.location.reload()
  }

  const startEdit = (task) => {
    setActiveItems(task)
    setEditing(true)
  }

  const deleteItem = (task) => {
    let csrftoken = getCookie('csrftoken')

    axios({
      url: `https://todo-appfullstack.herokuapp.com/api/delete/${task.id}/`,
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken':csrftoken
      }
    })
    window.location.reload()
  }

  const strikeUnstrike = (task) => {
    task.completed = !task.completed
    let csrftoken = getCookie('csrftoken')

    let url = `https://todo-appfullstack.herokuapp.com/api/update/${task.id}/`
    axios({
      url: url,
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
        'X-CSRFToken':csrftoken,
      },
      data:task
    })
    window.location.reload()
  }

  return (
    <div className="container">
      <div id="task-container">
        <div id="form-wrapper">
          <form onSubmit={handleSubmit} id="form">
            <div className="flex-wrapper">
              <div style={{flex:6}}>
                <input onChange={handleChange} className="form-control" id="title" type="text" name="title" value={activeItems.title} placeholder="Add task" />
              </div>

              <div style={{flex:1}}>
                <input id="submit" className="btn btn-warning" type="submit" name="Add" />
              </div>
            </div>
          </form>
        </div>

        <div id="list-wrapper">
          {
            todoList.map(todo => (
              <div key={todo.id} className="task-wrapper flex-wrapper" >

                <div onClick={()=>strikeUnstrike(todo)} style={{flex:7}}>
                  {
                    todo.completed ? <strike>{todo.title}</strike> : <span>{todo.title}</span>
                  }   
                </div>

                <div style={{flex:1}}>
                    <button onClick={()=>startEdit(todo)} className="btn btn-sm btn-outline-info">Edit</button>
                </div>

                <div style={{flex:1}}>
                    <button onClick={()=>deleteItem(todo)} className="btn btn-sm btn-outline-dark delete">Delete</button>
                </div>

              </div>
            ))
          }
        </div>

      </div>
      
    </div>
  );
}

export default App;
