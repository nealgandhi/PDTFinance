import React from 'react';
import './Data.css';
import { LineChart, Line, YAxis, CartesianGrid, XAxis, Tooltip} from 'recharts';

const data = [{name: 'August', spent: "327"}, {name: 'September', spent: "762"}, {name: 'October', spent: "654"}, {name: 'November', spent: "908"}, {name: 'December', spent: "424"}];

function Data() {
    return (
        <div>
            <h3>Fall 2022 Spending</h3>
            <div className="container">
                <LineChart width ={1000} height={400} data = {data}>
                    <Line type="monotone" dataKey="spent" stroke="#8884d8"/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
}

export default Data;