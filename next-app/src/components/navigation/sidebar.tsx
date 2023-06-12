// next
import * as React from 'react';
import { useRouter } from 'next/router';

// Material UI
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';

// MUI Icons
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

// styles
import { SidebarStudentsHeader } from '@/styles/LayoutElements';


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Sidebar() {

    const router = useRouter()

    const [open, setOpen] = React.useState(false);

    const handleDrawerClose = () => {
        setOpen(!open);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <MenuOpenIcon />
                    </IconButton>
                </DrawerHeader>

                <List>

                    <SidebarStudentsHeader>
                        {
                            open ? <h3>ВСИЧКИ</h3> : <h3>В</h3>
                        }
                    </SidebarStudentsHeader>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                            onClick={() => router.push('/')}
                        >
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <GroupsIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Всички студенти'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <Divider />

                    <SidebarStudentsHeader>
                        {
                            open ? <h3>БАКАЛАВРИ</h3> : <h3>Б</h3>
                        }
                    </SidebarStudentsHeader>

                    <ListItem
                        onClick={() => router.push('/bachelors')}
                        disablePadding sx={{ display: 'block' }}
                    >
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={'Всички бакалаври'}
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </ListItem>

                    <ListItem 
                        onClick={() => router.push('/bachelors/create')}
                        disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <PersonAddIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Добави бакалавър'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem
                        onClick={() => router.push('/bachelors/funnel')}
                        disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <FilterAltIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Маркетинг Фуния'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>

                <List>
                    <SidebarStudentsHeader>
                        {
                            open ? <h3>МАГИСТРИ</h3> : <h3>М</h3>
                        }
                    </SidebarStudentsHeader>

                    <ListItem
                        onClick={() => router.push('/masters')}
                        disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Всички магистри'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem
                        onClick={() => router.push('/masters/create')}
                        disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <PersonAddIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Добави магистър'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem
                        onClick={() => router.push('/masters/statistic')}
                        disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <BarChartIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Статистика'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem
                        onClick={() => router.push('/masters/query')}
                        disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <PersonSearchIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Търсене/Query'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem
                        onClick={() => router.push('/masters/funnel')}
                        disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <FilterAltIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Маркетинг Фуния'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />

                </List>
            </Drawer>
        </Box>
    );
}