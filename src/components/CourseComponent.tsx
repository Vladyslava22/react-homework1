import type { Course} from "../models/Course";

type CourseProps = {
    course: Course;
}
const CourseComponent = ({ course } : CourseProps) => {
    return (
        <div>
            <h2>{course.title}</h2>
            <p>Duration: {course.monthDuration} month</p>
            <p>Hours: {course.hourDuration}</p>
            <h3>Modules</h3>
            {course.modules.map((module) => (
               <p key={module}>{module}</p>
            ))}
        </div>
    )
}
export default CourseComponent;
