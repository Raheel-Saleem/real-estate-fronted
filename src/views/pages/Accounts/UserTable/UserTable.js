import faker from 'faker';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 850
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        fontSize: 15
    },
    avatar: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.getContrastText(theme.palette.secondary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
}));

let USERS = [],
    STATUSES = ['Admin', 'Employee', 'Partner'];
for (let i = 0; i < 14; i++) {
    USERS[i] = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        jobTitle: faker.name.jobTitle(),
        company: faker.company.companyName(),
        joinDate: faker.date.past().toLocaleDateString('en-US'),
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    };
}

function UserTable() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, USERS.length - page * rowsPerPage);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell}>User Info</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Info</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Joining Date</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Role</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow key={row.name}>
                                <TableCell>
                                    <Grid container>
                                        <Grid item lg={2} style={{ paddingRight: 5 }}>
                                            <Avatar alt={row.name} src="." className={classes.avatar} />
                                        </Grid>
                                        <Grid item lg={10}>
                                            <Typography className={classes.name}>{row.name}</Typography>
                                            <Typography color="textSecondary" variant="body2">
                                                {row.email}
                                            </Typography>
                                            <Typography color="textSecondary" variant="body2">
                                                {row.phone}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell>
                                    <Typography color="primary" variant="subtitle2">
                                        {row.jobTitle}
                                    </Typography>
                                    <Typography color="textSecondary" variant="body2">
                                        {row.company}
                                    </Typography>
                                </TableCell>
                                <TableCell>{row.joinDate}</TableCell>
                                <TableCell>
                                    <Typography
                                        className={classes.status}
                                        style={{
                                            backgroundColor:
                                                (row.status === 'Admin' && 'green') ||
                                                (row.status === 'Partner' && 'blue') ||
                                                (row.status === 'Employee' && 'orange')
                                        }}
                                    >
                                        {row.status}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 15]}
                            component="div"
                            count={USERS.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );
}

export default UserTable;