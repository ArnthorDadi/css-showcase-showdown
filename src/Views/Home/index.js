import React from 'react';

import Button from 'react-bootstrap/Button';

class Home extends React.Component {
    render(){
        return(
            <>
            <article>
                <h1 className="text-center">Welcome to <a href="https://github.com/ArnthorDadi/css-showcase-showdown">ArnthorDadi</a>'s css template site!</h1>
                <h2 className="m-5" >Hi there! Here you can find templates for:</h2>
                <div className="d-flex d-flex justify-content-around flex-wrap container-sm">
                    <Button className="m-1" href="/Cards">Cards</Button>
                    <Button className="m-1" href="/Buttons">Buttons</Button>
                    <Button className="m-1" href="/Signatures">Signatures</Button>
                </div>
            </article>
            </>    
        );
    }
}

export default Home;
