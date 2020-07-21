import React, { useState } from 'react';
// import Radar from 'react-d3-radar';
import { MultipleSelect } from "react-select-material-ui";
// import Radar from 'react-d3-radar';

const Tree = () => {
    const [skills, setSkills] = useState([
        { key: 'resilience', label: 'Resilience' },
        { key: 'frontend', label: 'Front-end' },
        { key: 'backend', label: 'Back-end' },
        { key: 'infra', label: 'Infra' },
        { key: 'R', label: 'R' },
        { key: 'Python', label: 'Python' },
        { key: 'JS', label: 'JS' },
        { key: 'D3', label: 'D3' },
    ])

    const updateSkill = e => {
        setSkills(e.target)
        console.log(skills)
    }

    return (
        <>
        <div className="radar-plot">
            <h1>{updateSkill}</h1>
        </div>
        <div>
            <label>Choose some skills:</label>
            <br></br>
            <MultipleSelect
                options={["resilience", "frontend", "backend", "infra", "R", "Python", "JS", "D3"]}
                helperText="Select the skills"
                // onChange={this.updateSkill}
            />
        </div>
        </>
    );
}

export default Tree