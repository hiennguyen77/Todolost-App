import {useState, useRef} from 'react';
import './todo.css';

function Todo() {
    
    
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(() => {
        const localStorageJson = JSON.parse(localStorage.getItem('job'));
        return localStorageJson;
    });
    
    const ref = useRef();
    
    
    // handleSubmit
    const handleSubmit = (e) => {
        
        e.preventDefault()
        if(job) {
            setJobs((prev => {
                const newJob = [...prev, job];
                //save localStorage
                const jsonJob = JSON.stringify(newJob);
                localStorage.setItem('job', jsonJob);
               
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

       //update localstorage
       const jsonJob = JSON.stringify(newJobs);
       localStorage.setItem('job', jsonJob);
  
    }

    const handleClearAll= ()=> {
        const newJobs = setJobs([]);
        //update localStorage
        const jsonJob = JSON.stringify(newJobs);
        localStorage.setItem('job', jsonJob);
  
    }


    // update
    const handleEdit =()=> {
        
      alert('chưa cập nhật');
          
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
                        className='todo-item-container '
                        onClick={handleEdit}
                      >
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
                      onClick={handleClearAll}
                      >Clear All</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Todo;
  