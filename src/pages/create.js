import React, { useState } from 'react'
import { Typography, Container, makeStyles, RadioGroup, Radio, FormControl, FormLabel } from '@material-ui/core';
import { Button, TextField, FormControlLabel } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

function Create() {
    const history = useHistory()
    const customClasses = useStyle()
    const [title, settitle] = useState('')
    const [details, setdetails] = useState('')
    const [category, setcategory] = useState('todos')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title && details && category){
            fetch('http://localhost:3000/notes',{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({title,details,category})
            }).then(() => history.push('/')).catch(err => console.log(err))
        }
        settitle('')
        setdetails('')
    }

    return (
        <Container>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => settitle(e.target.value)}
                    className={customClasses.field}
                    label="Note Title"
                    color="secondary"
                    variant="outlined"
                    fullWidth
                    required
                    value={title}
                />
                <TextField
                    onChange={(e) => setdetails(e.target.value)}
                    className={customClasses.field}
                    label="Details"
                    color="secondary"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    value={details}
                />
                <FormControl className={customClasses.field}>
                    <FormLabel>Category</FormLabel>
                    <RadioGroup value={category} row onChange={(e) => setcategory(e.target.value)}>
                        <FormControlLabel value="money" control={<Radio />} label="Money" />
                        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                        <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                    </RadioGroup>
                </FormControl>

                <Button
                    type="Submit"
                    color="secondary"
                    variant="contained"
                    disabled={!title ? true : false}
                >
                    Submit
                </Button>
            </form>


            {/* <Button color="primary" >Submit</Button>
        <Button color="secondary" variant="contained">Submit</Button>

        <ButtonGroup color="secondary" variant="outlined">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup> */}
        </Container>
    )
}

export default Create;