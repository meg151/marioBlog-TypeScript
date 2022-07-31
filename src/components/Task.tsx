

const Task = ({Task: {id, title, state}, onArchiveTsk, onPinTask}:any) => 
{
    return (
        <div className="list-item">
            <input type="text" value={title} readOnly={true} />
        </div>
    )
}

export default Task;