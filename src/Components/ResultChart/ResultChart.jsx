import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
        "id": 1,
        "name": "John Doe",
        "physics": 85,
        "chemistry": 90,
        "math": 88
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "physics": 78,
        "chemistry": 82,
        "math": 89
    },
    {
        "id": 3,
        "name": "Alice Brown",
        "physics": 92,
        "chemistry": 88,
        "math": 91
    },
    {
        "id": 4,
        "name": "Bob Johnson",
        "physics": 80,
        "chemistry": 85,
        "math": 79
    },
    {
        "id": 5,
        "name": "Charlie Davis",
        "physics": 76,
        "chemistry": 79,
        "math": 84
    },
    {
        "id": 6,
        "name": "David Miller",
        "physics": 91,
        "chemistry": 93,
        "math": 85
    },
    {
        "id": 7,
        "name": "Eva Wilson",
        "physics": 88,
        "chemistry": 30,
        "math": 87
    },
    {
        "id": 8,
        "name": "Frank Harris",
        "physics": 84,
        "chemistry": 78,
        "math": 92
    },
    {
        "id": 9,
        "name": "Grace Clark",
        "physics": 79,
        "chemistry": 82,
        "math": 78
    },
    {
        "id": 10,
        "name": "Henry Lewis",
        "physics": 87,
        "chemistry": 88,
        "math": 90
    }
]



const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="chemistry" stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;