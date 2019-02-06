import React from 'react';
import { Header, Segment, Divider, Grid, HeaderSubheader } from 'semantic-ui-react'

const Home = () => (
    <div>
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column>
                    <Header size='huge'>
                        About us and why this page exists
                        <Header.Subheader>
                            Test
                        </Header.Subheader>
                    </Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>

);

export default Home;