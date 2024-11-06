import {INote} from "../../interfaces/Notes.ts";
import React, {useRef} from "react";

interface IProps {
    onSubmit: (note: INote) => void;
}

export const NoteForm = ({ onSubmit }: IProps) => {
    // Create the input and textarea references
    const titleInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

    // Handle the form submit to prevent the default behavior
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Format the new note
        const newNote: INote = {
            id: new Date().getTime().toString(),
            title: titleInputRef.current!.value,
            description: descriptionInputRef.current!.value,
        }

        // Call the clear form inputs function
        clearForm();

        // Use the onSubmit callback to add the new note
        onSubmit(newNote);
    }

    // Clear the form inputs
    const clearForm = () => {
        titleInputRef.current!.value = '';
        descriptionInputRef.current!.value = '';
    }

    return <div className="mb-10 bg-white p-6 rounded-md shadow-md">
        <form onSubmit={handleOnSubmit}>
            <fieldset className="mb-4">
                <label htmlFor="title" className="text-gray-900">Title</label><br/>
                <input ref={titleInputRef}
                       type="text"
                       name="title"
                       id="title"
                       minLength={5}
                       required
                       className="w-full border-2 rounded-md p-2"
                       placeholder="Call the doctor"
                />
            </fieldset>
            <fieldset className="mb-4">
                <label htmlFor="description" className="text-gray-900">Description</label><br/>
                <textarea
                    ref={descriptionInputRef}
                    name="description"
                    id="description"
                    minLength={5}
                    required
                    rows={5}
                    className="w-full border-2 rounded-md p-2"
                    placeholder="Schedule a new appoinment"
                />
            </fieldset>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700" type="submit">Add Note</button>
        </form>
    </div>
}
