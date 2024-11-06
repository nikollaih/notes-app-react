import {NoteCard} from "./NoteCard.tsx";
import {INote} from "../../interfaces/Notes.ts";

interface IProps {
    notes: INote[]
}

export const NoteList = ({notes}: IProps) => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {
            notes.length > 0 && notes.map((note: INote) => <NoteCard key={note.id} note={note} />)
        }
    </div>
}
