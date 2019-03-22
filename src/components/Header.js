import React from 'react';
import { Button } from '@progress/kendo-react-buttons';

const Header = (props) => {
    return (
        <div className="header">
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <h1>Sales | Q4 2018</h1>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 buttons-right">
                    <Button primary onClick={props.share}>Share</Button>
                    <Button onClick={props.pdfExport}>Export to PDF</Button>
                </div>
            </div>
        </div>
    )
}

export default Header;
