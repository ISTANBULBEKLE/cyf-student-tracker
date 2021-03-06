import React from 'react';
import StudentCard from '../StudentCard/StudentCard';
import './allstudentscards.scss';

function createInitials(name){
    let nameArray = name.split(' ');
    let formatedName = nameArray.map(name => name[0]);
    return formatedName;
}

export default function AllStudentsCards({students}) {



    return (
        <div>
            {
                students.map((student,index) => {
                    let initials = createInitials(student.studentInfo.Name)
                    return <StudentCard key={index} name={student.studentInfo.Name} profile={student.profile} initials={initials} index={index+1} overviewData={student.overview} />
                })
            }
            
        </div>
    )
}
