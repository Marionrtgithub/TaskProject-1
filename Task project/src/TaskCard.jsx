function TaskCard({task , handleDelete}){
    return(<>
       <li  className={task.completed ? "completed " : " incompleted"}>
                <span>{task.id} - {task.name}</span>
                <button onClick={() => handleDelete(task.id)} className="delete">Delete</button>
            </li>
    </>)
}
export default TaskCard;
