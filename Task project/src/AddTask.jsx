import './AddTask.css';

function AddTask  ()  {
    return <section className='addTask'>
        <form>
            <label htmlFor="task">Task Name</label>
            <input type="text" name='task' id='task' placeholder='task name' autoComplete='off ' />
            <button type='submit'>Add Task</button>
        </form>
    </section>;
}


export default AddTask;
