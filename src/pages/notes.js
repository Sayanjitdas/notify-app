import React, { useEffect, useState } from 'react'
import { Grid, Container } from '@material-ui/core'
import NoteCard from '../components/note-card'
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
    default: 3,
    1280: 2,
    960: 1,
  };

function Notes() {

    const [notes, setnotes] = useState([])



    useEffect(() => {
        fetch('http://localhost:3000/notes')
            .then(res => res.json())
            .then(data => setnotes(data))
    }, [])

    const deleteNode = async (id) => {
        let response = await fetch(`http://localhost:3000/notes/${id}`, {
            method: "DELETE"
        })
        response = await response.json()
        console.log(response)

        const newNotes = notes.filter(note => note.id !== id)
        setnotes(newNotes)
    }

    return (
        <Container>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {notes.map(note => {
                    return (
                        <div key={note.id}>
                            <NoteCard note={note} deleteNode={deleteNode}></NoteCard>
                        </div>
                    )
                })}
            </Masonry>
        </Container>
    )
}

export default Notes;