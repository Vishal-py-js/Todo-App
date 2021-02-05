import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'


function Home() {

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
    const res = await axios.get('http://127.0.0.1:8000/api/',{
        headers:{
            'Authorization': `Token ${localStorage.getItem('Token')}`
            }
        })
    const response = res.data
    setTodoList(response)
    let innhtml = document.getElementById('user-status')
    let innhtml2 = document.getElementById('login-request')
    if (localStorage.getItem('Token')) {
        innhtml.innerHTML = '<a href="/login" class="btn btn-warning">Logout</a>'
        innhtml2.innerHTML = `Welcome, ${localStorage.getItem('User')}`
    } 
  }

  const handleChange = (e) => {
    const value = e.target.value
    setActiveItems({...activeItems,title:value});
  }



  const handleSubmit = async(e) => {
    e.preventDefault()

    let url = 'http://127.0.0.1:8000/api/create/'

    if(editing==true) {
      url = `http://127.0.0.1:8000/api/update/${activeItems.id}/`
      setEditing(false)
    }
    await axios({
      method:'POST',
      url:url,
      data:activeItems,
      headers:{
           'Authorization': `Token ${localStorage.getItem('Token')}`
      }
    })
    window.location.reload()
  }

  const startEdit = (task) => {
    setActiveItems(task)
    setEditing(true)
  }

  const deleteItem = (task) => {

    axios({
      url: `http://127.0.0.1:8000/api/delete/${task.id}/`,
      method: 'DELETE',
      headers:{
        'Authorization': `Token ${localStorage.getItem('Token')}`
        }
    })
    window.location.reload()
  }

  const strikeUnstrike = (task) => {
    task.completed = !task.completed

    let url = `http://127.0.0.1:8000/api/update/${task.id}/`
    axios({
      url: url,
      method: 'POST',
      headers:{
        'Authorization': `Token ${localStorage.getItem('Token')}`
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

export default Home;

{/* <Router>
  <Switch>
      <Route path="/signup" exact component={SignUp} />
      <Route path="/login" exact component={Login} />
  </Switch>
</Router> */}