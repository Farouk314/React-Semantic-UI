import React from 'react';
import { Grid, Header, Container } from 'semantic-ui-react'
import '../index.css'

const About = () => (
    <div>
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column>
                <h1 style={{fontSize: '4rem'}}>
                    About
                </h1>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);

export default About;