import React from 'react'
import { Card, CardContent, CardHeader, IconButton, Typography, makeStyles, Avatar} from '@material-ui/core'
import { green,red,blue,yellow } from '@material-ui/core/colors'
import { DeleteOutline } from '@material-ui/icons'

const useStyles = makeStyles({
    workBorder: {
        border: (note) => {
            if (note.category === 'work') {
                return `1px solid ${red[600]}` 
            }
        }
    },
    AvatarColor:{
        backgroundColor: (note) => {
            if(note.category === 'work'){
                return red[600]
            }else if(note.category === 'money'){
                return green[500]
            }else if(note.category === 'todos'){
                return blue[500]
            }else{
                return yellow[700]
            }
        }
    }
})


export default function NoteCard({ note, deleteNode }) {

    const mystyle = useStyles(note)

    return (
        <Card elevation={2} className={mystyle.workBorder}>
            <CardHeader
                avatar={
                    <Avatar className={mystyle.AvatarColor}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => deleteNode(note.id)}>
                        <DeleteOutline />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    )
}