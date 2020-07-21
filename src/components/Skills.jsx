import React from 'react';
import Radar from 'react-d3-radar';
import { MultipleSelect } from "react-select-material-ui";
import MenuItem from '@material-ui/core/MenuItem';
// import { MenuItem } from "material-ui/MenuItem";
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

export default class RadarC extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.initState = {
            list: [
                { key: 'resilience', label: 'Resilience' },
                { key: 'frontend', label: 'Front-end' },
                { key: 'css', label: 'CSS' },
                { key: 'd3', label: 'D3' },
                { key: 'js', label: 'JS' },
                { key: 'react', label: 'React' },
                { key: 'shiny', label: 'Shiny' },
                { key: 'r', label: 'R' },
                { key: 'gis', label: 'GIS' },
                { key: 'estatistica', label: 'Estatística' },
                { key: 'ml', label: 'Machine Learning' },
                { key: 'dl', label: 'Deep Learning' },
                { key: 'python', label: 'Python' },
                { key: 'backend', label: 'Back-end' },
                { key: 'docker', label: 'Docker' },
                { key: 'linux', label: 'Linux' },
                { key: 'cloud', label: 'Cloud' },
                { key: 'infra', label: 'Infra' },
            ],
        }
        this.state = {
            list: [
                { key: 'resilience', label: 'Resilience' },
                { key: 'frontend', label: 'Front-end' },
                { key: 'css', label: 'CSS' },
                { key: 'd3', label: 'D3' },
                { key: 'js', label: 'JS' },
                { key: 'react', label: 'React' },
                { key: 'shiny', label: 'Shiny' },
                { key: 'r', label: 'R' },
                { key: 'gis', label: 'GIS' },
                { key: 'estatistica', label: 'Estatística' },
                { key: 'ml', label: 'Machine Learning' },
                { key: 'dl', label: 'Deep Learning' },
                { key: 'python', label: 'Python' },
                { key: 'backend', label: 'Back-end' },
                { key: 'docker', label: 'Docker' },
                { key: 'linux', label: 'Linux' },
                { key: 'cloud', label: 'Cloud' },
                { key: 'infra', label: 'Infra' },
            ],
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    // object.assign state
    // previous 
    // map
    handleChange = (e) => {
        this.setState(() => ({
            list: [...this.initState.list.filter((s) => e.includes(s.key))]
        }))
    }

    // handleChange = (e) => {
    //     this.setState({
    //         list: this.initState.list.filter((s) => e.includes(s.key)),
    //     });
    //     // var stf = this.initState.list.filter((s) => e.includes(s.key))
    //     // console.log(e)
    //     // console.log(stf);
    // }

    menuItems(values) {
        return this.state.map(name => (
            <MenuItem
                key={name}
                insetChildren={true}
                checked={values.includes(name)}
                value={name}
                primaryText={name}
            />
        ));
    }


    componentDidMount() {
        console.log(this.state.list) //you can log data from props here to check
    };

    render() {
        // const classes = useStyles();
        // const { values } = this.state;
        return (
            <div className="grid-container">
                <div>
                    <h1>Radar plot</h1>
                    <h3>...of my major computating and statistical skills</h3>
                </div>
                <div className="radar-plot">
                    <Radar
                        width={460}
                        height={460}
                        padding={40}
                        domainMax={10}
                        highlighted={null}
                        // onHover={(point) => {
                        //     if (point) {
                        //         console.log('hovered over a data point');
                        //     } else {
                        //         console.log('not over anything');
                        //     }
                        // }}
                        data={{
                            variables: this.state.list.map(i => ({ key: i.key, label: i.label })),
                            sets: [
                                {
                                    key: 'me',
                                    label: 'My Scores',
                                    values: {
                                        resilience: 7,
                                        frontend: 8,
                                        css: 6,
                                        d3: 5,
                                        js: 5,
                                        react: 5,
                                        shiny: 9,
                                        r: 9,
                                        gis: 8,
                                        estatistica: 9,
                                        ml: 5,
                                        dl: 2,
                                        python: 4,
                                        backend: 4,
                                        docker: 5,
                                        linux: 5,
                                        cloud: 3,
                                        infra: 4,
                                    },
                                },
                            ],
                        }}
                    />
                </div>
                <div>
                    <label>Choose some skills:</label>
                    <br></br>
                    {/* {console.log(this.state.list)} */}
                    <MultipleSelect
                        defaultValue={this.state.list.label}

                        // values={this.state.list[0]}

                        options={["resilience", "frontend", "css", "js", "d3", "react", "shiny", "r", "gis", "modelagemestatistica", "python", "backend", "docker", "infra"]}
                        // options={this.state.list}
                        // helperText="Select the skills"
                        onChange={this.handleChange}
                        SelectProps={{
                            isCreatable: true,
                            msgNoOptionsAvailable: "All skills are selected",
                            msgNoOptionsMatchFilter: "No skill name matches the filter",
                        }}
                    />
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}