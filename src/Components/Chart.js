import React from 'react'
import { Pie } from 'react-chartjs-2';

const Chart = ({ lang }) => {
    const pie = {
        labels: lang.map(language => language.label),
        datasets: [{
            data: lang.map(language => language.value),
            backgroundColor: lang.map(
                ({ color }) => `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`,
              )
        }]
    }
    const options = {
        legend: {
            display: true,
            position: "right"
        },
        elements: {
            arc: {
                borderWidth: 2
            }
        }
    }
    return(
        <div className="m-2">
            <h2>Most used languages</h2>
            <hr/>
            <div>
                <Pie data={pie} options={options}/>
            </div>
        </div>
    )
}

export default Chart