import React from 'react'
import { Drawer, Typography, makeStyles, List, ListItem, ListItemText, ListItemIcon, AppBar, Toolbar } from '@material-ui/core'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router-dom'
import { format } from 'date-fns'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return{
        drawerWidth: {
            width: drawerWidth
        },
        flexy: {
            display: 'flex'
        },
        backgroundColor: {
            backgroundColor: "#f7f7f7",
            width: '100%',
            padding: theme.spacing(3)
        },
        active:{
            backgroundColor: "#f7f7f7"
        },
        title:{
            padding: theme.spacing(2)
        },
        appBar:{
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar:theme.mixins.toolbar, //just inherited all the properties of toolbar in our class toolbar
        toolbarjustify:{
            justifyContent: 'space-between'
        }
    }

})


export default function Layout({ children }) {

    const mystyle = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlined color="secondary" />,
            path: '/create'
        }
    ]

    return (
        <div className={mystyle.flexy}>
            
            {/* appBar */}

            <AppBar className={mystyle.appBar} elevation={0}>
                <Toolbar variant="regular" className={mystyle.toolbarjustify}>
                    <Typography variant="h5">
                       Welcome to Notify app
                    </Typography>
                    <Typography variant="body1" >
                        Today is {format(new Date(),'do MMMM Y')}
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* drawer sidebar */}
            <Drawer
                className={mystyle.drawerWidth}
                anchor="left"
                variant="permanent"
                classes={{ paper: mystyle.drawerWidth }}
            >

                <Typography
                    variant="h5"
                    align="center"
                    className={mystyle.title}
                >
                    Notify
                </Typography>
                {/* List menu */}
                <List>
                    {menuItems.map(item => (
                        <ListItem 
                            key={item.text} 
                            button 
                            onClick={() => history.push(item.path)}
                            className = {location.pathname === item.path ? mystyle.active : null}   
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>
                        </ListItem>
                    ))}
                </List>

            </Drawer>
            
            {/* main content */}
            <div className={mystyle.backgroundColor}>
                <div className={mystyle.toolbar}></div>
                {children}
            </div>

        </div>
    )
}
