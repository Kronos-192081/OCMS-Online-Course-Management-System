import { renderMarkup } from "react-render-markup";

const Subject_proceed = ({course, class_id, pro_id}) => {
    let class1, subject;
    course.sub_course.forEach(cls => {
        if (cls._id == class_id) 
        {
             class1 = cls;
        }
    })

    class1.subjects.forEach(subj => {
        if (subj._id == pro_id) 
        {
            subject = subj;
        }
    })



    return ( 
        <div className = "Individual">
            <div className = "head center bold">Subject Proceedings of {subject.Name}</div>
            <br />
            <h6><b>Description: </b> {renderMarkup(subject.descr)}</h6>
            <h6><b>Important links: </b> {renderMarkup(subject.links)}</h6><br />
            <div className = "center"><h5>Coverage</h5></div>
            <div className = "tablestyle">
            <table className = "center5">
            <tr>
            <th>Topic</th>
            <th>Details</th>
            <th>Video link</th>
            <th>Reading material link</th>
            </tr>
            {subject.table.map(tab => (
                <tr>
                <td>{tab.Topic}</td>
                <td>{tab.details}</td>
                {tab.video_link && <td><a href = {tab.video_link} target ="_blank">Link</a></td>}
                {!tab.video_link && <td>No Link</td>}
                {tab.reading_link && <td><a href = {tab.reading_link}target = "_blank">Link</a></td>}
                {!tab.reading_link && <td>No Link</td>}
                </tr>
            ))}
             </table>
             </div>
        </div>

     );
}
 
export default Subject_proceed;