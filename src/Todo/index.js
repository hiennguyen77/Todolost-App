import {useState, useRef} from 'react';
import './todo.css';

function Todo() {
    
    
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState([]);
    
    const ref = useRef();
    
    
    // handleSubmit
    const handleSubmit = (e) => {
        
        e.preventDefault()
        if(job) {
            setJobs((prev => {
                const newJob = [...prev, job];
               
                return newJob;
            }))   
        }
        setJob('');
        ref.current.focus(); 
    }
    //handleDelete
    const handleDelete =(index) => {
       const newJobs = [...jobs]
       newJobs.splice(index, 1);
       setJobs(newJobs);
    }

   
    return (
      <div className="App-todo">
          <h1 className='heading'>What's your plans for Today ?</h1>
          <div className ='todo-form'>
              <div className ='todo-input-add'>
                <input 
                   ref={ref} 
                   value={job} 
                   onChange={(e) => setJob(e.target.value)} 
                   className='todo-input' 
                   placeholder='enter todo...'
                />
                <button 
                    onClick={handleSubmit} 
                    className='todo-add'>Create
                </button>
              </div>
              <div className='todo-list-container'>
                  <ul className='todo-list'>
                      {jobs.map((job, index) => (
                      <div
                        key={index}
                        className='todo-item-container'>
                        <li className='todo-item'>{job}</li>
                        <button 
                            onClick={()=>handleDelete(index)} 
                            className='todo-delete'
                          >Delete
                        </button>
                      </div>)
                      )}
                  </ul>
                  <h1 className='title-app'>To Do List</h1>
                  <div className='line'></div>
                  <div className='footer'>
                      <h5 className='footer-item'>item: {jobs.length}</h5>
                      <button className='clear-btn' 
                      >Clear All</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Todo;
  