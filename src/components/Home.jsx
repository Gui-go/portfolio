import React from 'react'
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import WcIcon from '@material-ui/icons/Wc';
import PublicIcon from '@material-ui/icons/Public';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import ReactTooltip from 'react-tooltip';
// import { Button } from "@material-ui/core/";


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <ReactTooltip className="tooltip" />
                <div className="grid-container">
                    <div className="grid-container-row">
                        <div className="dot" data-tip='He was born on 19930425' >
                            <ChildFriendlyIcon className="home-icon" fontSize='large' />
                        </div>
                        <div className="dot" data-tip='He studies mostly Economics and Data Science' >
                            <SchoolIcon className="home-icon" fontSize='large' />
                        </div>
                        <div className="dot" data-tip='He works as a Data Scient' >
                            <BusinessCenterIcon className="home-icon" fontSize='large' />
                        </div>
                    </div>
                    <div>
                        <br />
                        <br />
                        <h1 className="label-name">Guilherme</h1>
                        <br />
                        <h1 className="label-name">Viegas</h1>
                    </div>
                    <div className="grid-container-row" >
                        <div className="dot" data-tip='He is single at the moment' >
                            <WcIcon className="home-icon" fontSize='large' />
                        </div>
                        <div className="dot" data-tip='He plans on living abroad again' >
                            <PublicIcon className="home-icon" fontSize='large' />
                        </div>
                        <div className="dot" data-tip='Things are going well for him lately' >
                            <SentimentSatisfiedAltIcon className="home-icon" fontSize='large' />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}