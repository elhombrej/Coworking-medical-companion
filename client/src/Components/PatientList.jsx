import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Divider, Grid, Typography } from "@mui/material";
import { getPatients } from '../Redux/Actions/Actions';
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid'
import HomeIcon from '@mui/icons-material/Home';
import RefreshIcon from '@mui/icons-material/Refresh';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import moment from 'moment';

const PatientList = (props) => {

    const dispatch = useDispatch();

    const columnWidth = 200;

    useEffect(() => {
        dispatch(getPatients())
    }, [dispatch])

    const allPatients = useSelector((state) => state.patients)

    function handleClick(element) {
        element.preventDefault();
        dispatch(getPatients());
    }

    function columns() {
        return (
            [
                {
                    field: 'avatar',
                    headerName: "Avatar",
                    width: 80, renderCell: params =>
                        <Avatar {...stringAvatar(': D')} />, sorteable: false, filterable: false
                },
                {
                    field: 'name',
                    headerName: "Name",
                    width: columnWidth
                },
                {
                    field: 'id',
                    headerName: "ID",
                    width: columnWidth
                },
                {
                    field: 'dni',
                    headerName: "DNI",
                    width: columnWidth,
                    // renderCell: params =>
                    //     <span style={{ textDecoration: 'none' }}>
                    //         {params.row.dni}
                    //         <span>{setRowDni(params.row.dni)}</span>
                    //     </span>
                },
                // {
                //     field: 'role',
                //     headerName: 'Role',
                //     width: 100,
                //     type: 'singleSelect',
                //     valueptions: ['basic', 'editor', 'admin'],
                //     editable: true,
                // },
                // { field: 'active', headerName: 'Active', width: 100, type: 'boolean', editable: true },
                // {
                //     field: 'registrationDate',
                //     headerName: 'Reistration date',
                //     width: 200,
                //     renderCell: (params) =>
                //         moment(params.row.createdAt).format('DD-MM-YYYY HH:MM a'),
                // },
                // {
                //     field: 'clinicHistory',
                //     headerName: "Clinic history",
                //     width: columnWidth,
                //     renderCell: params =>
                //         <a
                //             href={'/clinichistoryinformation/' + params.row.dni}
                //             style={{
                //                 textDecoration: 'none'
                //             }}
                //         >
                //             <Button
                //                 variant='contained'>
                //                 Historia clinica
                //             </Button>
                //         </a>

                // },

                // {
                //     field: 'actions',
                //     headerName: 'Actions',
                //     type: 'actions',
                //     renderCell: params =>
                //         <UserActions {...{ params, rowId, setRowId }} />
                // }
            ]
            // ,[rowId]
        )
    };

    function rows() {
        return (allPatients.map((element) => ({
            id: element.dni,
            name: element.name,
            dni: element.dni
        })))
    }

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
            </GridToolbarContainer>
        );
    }

    ///////////////
    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    //////////////

    const [selectedRow, setSelectedRow] = React.useState();

    const [contextMenu, setContextMenu] = React.useState(null);

    const handleContextMenu = (event) => {
        event.preventDefault();
        setSelectedRow((event.currentTarget.getAttribute('data-id')));
        console.log(selectedRow)
        setContextMenu(
            contextMenu === null
                ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 }
                : null,
        );
    };

    const handleClose = () => {
        setContextMenu(null);
    };

    /////////////////////////////////////////////////////////////
    return (
        <Grid
            container
            justifyContent='center'
            direction='column'
            spacing={3}
        >
            <Grid
                item
            >
                <Typography variant='h4'>Patient List</Typography>
            </Grid>
            <Grid
                item>

                <Button
                    variant="outlined"
                    startIcon={<HomeIcon />}
                    href='/home'>
                    Home
                </Button>

            </Grid>

            <Grid
                item
            >
                <Button
                    variant="outlined"
                    startIcon={<RefreshIcon />}
                    href='/home'
                    onClick={element => { handleClick(element) }}
                >
                    Reload list
                </Button>
            </Grid>

            <Grid
                item>
                <Button
                    variant="outlined"
                    startIcon={<PersonAddIcon />}
                    href='/patientcreate'>
                    Register new patient
                </Button>
            </Grid>

            <Grid
                item
                style={{ height: 500, width: '100%' }}
            >
                <DataGrid
                    rows={rows()}
                    columns={columns()}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    components={{
                        Toolbar: CustomToolbar,
                    }}
                    componentsProps={{
                        row: {
                            onContextMenu: handleContextMenu,
                            style: { cursor: 'context-menu' },
                        },
                    }}
                    getRowId={row => row.id}
                />
                <Menu
                    open={contextMenu !== null}
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={
                        contextMenu !== null
                            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                            : undefined
                    }
                    componentsProps={{
                        root: {
                            onContextMenu: (e) => {
                                e.preventDefault();
                                handleClose();
                            },
                        },
                    }}
                >
                    <MenuItem>
                        <a href={'/patientinformation/' + selectedRow}
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <Typography variant='h6'>Informacion completa</Typography>
                        </a>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <a href={'/clinichistoryinformation/' + selectedRow}
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <Typography variant='h6'>Historia clinica</Typography>
                        </a>
                    </MenuItem>
                </Menu>
            </Grid>
        </Grid>
    )
}

export default PatientList;

