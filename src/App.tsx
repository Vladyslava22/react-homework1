import './App.css'
import CourseComponent  from "./components/CourseComponent";
import {coursesArray, coursesTitleArray, coursesAndDurationArray} from "./data/arrays";
import CourseTitleComponent from "./components/CourseTitleComponent";
import CourseDurationComponent from "./components/CourseDurationComponent";

function App() {
    return (
    <>
        {coursesTitleArray.map((title) => (
            <CourseTitleComponent key={title} title={title}/>))}
        {coursesAndDurationArray.map((course)=> (
            <CourseDurationComponent key={course.title} title={course.title}
            monthDuration={course.monthDuration}/>))}
        {coursesArray.map((course)=> (
            <CourseComponent key={course.title} course={course}/>))}
      <section id="spacer"></section>
    </>
  )
}

export default App
