import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {

    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    // console.log(marksData)

    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.physics,
            chemistry: studentData.chemistry,
            math:studentData.math,

        }
        const avg = (student.physics + student.chemistry + student.math) / 3;
        student.avg = avg;


        return student;
       
    })
    console.log(marksChartData)
    
    // data processing for the chart
    return (
        <div>
            <BarChart width={200} height={200} data={marksChartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'avg'} fill='yellow'></Bar>
                <Bar dataKey={'chemistry'} fill='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;