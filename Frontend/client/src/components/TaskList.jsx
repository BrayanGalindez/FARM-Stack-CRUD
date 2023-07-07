import TaskCard from "./TaskCard"
import PropTypes from 'prop-types';
function TaskList({ tasks }) {
  return (
    <div className="grid grid-cols-3 gap-4">
        {
            tasks.map(task => (
                <TaskCard task={task} key={task._id} />
            ))
        }
    </div>
  );
}
TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
export default TaskList;