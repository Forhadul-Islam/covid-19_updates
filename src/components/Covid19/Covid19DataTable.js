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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Covid19DataTable = (props) => {
    const classes = useStyles();
    const covidData = props.covidData;
    covidData.shift();

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
                            <TableRow onClick={() => console.log(data)} key={data.country}>
                                <TableCell align="center">
                                    {covidData.indexOf(data) + 1}
                                </TableCell>
                                <TableCell title="Country" align="center">{data.country}</TableCell>
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