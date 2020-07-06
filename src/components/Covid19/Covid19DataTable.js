import React, { useState, useEffect } from 'react';
import './Covid19.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
});

const Covid19DataTable = (props) => {
    const classes = useStyles();
    const covidData = props.covidData;
    // covidData.shift();

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sr. No</TableCell>
                            <TableCell align="center">Country</TableCell>
                            <TableCell align="center">Total Cases</TableCell>
                            <TableCell align="center">Active Cases</TableCell>
                            <TableCell align="center">Total Death</TableCell>
                            <TableCell align="center">Today Case</TableCell>
                            <TableCell align="center">Today Death</TableCell>
                            <TableCell align="center">TotalTests</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {covidData && covidData.map((data) => (
                            <TableRow >
                                <TableCell align="center">
                                    {covidData.indexOf(data) + 1}
                                </TableCell>
                                <TableCell title="Country" align="right">
                                    <Badge style={{ fontSize: '15px' }} variant="light">{data.country}</Badge>
                                    <Link to={`/country/${data.country}`}>
                                        <Badge style={{ fontSize: '14px' }} variant="warning">View</Badge>
                                    </Link>
                                </TableCell>
                                <TableCell title="Total Cases" align="center">{data.cases}</TableCell>
                                <TableCell title="Total active cases" align="center">{data.active}</TableCell>
                                <TableCell title="Total deaths" align="center">{data.deaths}</TableCell>
                                <TableCell
                                    title="Today's cases"
                                    style={{ color: '#eb8703' }}
                                    align="center"
                                >
                                    {data.todayCases ? data.todayCases : <p style={{ color: 'rgb(235, 53, 120)' }}>not published yet!</p>}
                                </TableCell>
                                <TableCell
                                    title="Today's deaths"
                                    style={{ color: '#eb8703' }}
                                    align="center"
                                >
                                    {data.todayDeaths ? data.todayDeaths : <p style={{ color: 'rgb(235, 53, 120)' }}>not published yet!</p>}
                                </TableCell>
                                <TableCell align="center">{data.totalTests}</TableCell>

                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Covid19DataTable;