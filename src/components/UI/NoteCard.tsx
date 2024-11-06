import {INote} from "../../interfaces/Notes.ts";
import PinImage from '../../assets/pin.png';

// Declare the props types
interface IProps {
    note: INote
}

export const NoteCard = ({ note } : IProps) => {
    return <div className="bg-indigo-100 shadow-sm p-4 rounded-md hover:shadow-md hover:cursor-pointer note-card relative">
        <h3 className="font-bold text-lg text-indigo-600">{note.title}</h3>
        <p className="text-indigo-500">{note.description}</p>
        <img src={PinImage} alt="Pin note" className="absolute w-6 -top-2 right-2"/>
    </div>
}
