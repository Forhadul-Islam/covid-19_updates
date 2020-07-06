import React from 'react';
import './BangladeshCovidDetail.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Badge from 'react-bootstrap/Badge';

const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
});

const BangladeshCovidCases = (props) => {
    const classes = useStyles();
    const bangladeshDetail = props.bangladeshDetail;
    if (bangladeshDetail) {
        console.log(bangladeshDetail)
    }
    return (
        <div className="bangladeshDataTable">
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sr. No</TableCell>
                            <TableCell align="center">District</TableCell>
                            <TableCell align="center">New Total Count</TableCell>
                            <TableCell align="center">Previous Count</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bangladeshDetail && bangladeshDetail.data.map((data) => (
                            <TableRow >
                                <TableCell align="center">
                                    {bangladeshDetail.data.indexOf(data) + 1}
                                </TableCell>
                                <TableCell title="district" align="center">
                                    <Badge style={{ fontSize: '15px' }} variant="light">{data.name}</Badge>
                                </TableCell>
                                <TableCell title="Total Cases" align="center">{data.count}</TableCell>
                                <TableCell title="Total Cases" align="center">{data.prev_count}</TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default BangladeshCovidCases;