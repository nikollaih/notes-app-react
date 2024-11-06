import {NoteForm} from "../components/UI/NoteForm.tsx";
import {NoteList} from "../components/UI/NoteList.tsx";
import {useState} from "react";
import {INote} from "../interfaces/Notes.ts";

export const HomePage = () => {
    // Define the notes state
    const [notes, setNotes] = useState<INote[]>([]);

    // Add a new note to the notes list
    const handleOnAddNote = (note: INote) => {
        // Copy the notes list to add a new one
        const notesCopy = [...notes]
        // Add the new note
        notesCopy.push(note);
        // Set the new array list to notes state
        setNotes(notesCopy);
    }

    return <div className="mx-auto my-10 max-w-3xl px-6 md:px-0">
        <h1 className="font-bold text-2xl mb-10 text-white">Notes App</h1>
        <NoteForm onSubmit={handleOnAddNote} />
        <NoteList notes={notes} />
    </div>
}
