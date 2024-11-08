import {INote} from "../../interfaces/Notes.ts";
import React, {useRef} from "react";

interface IProps {
    onSubmit: (note: INote) => void;
}

export const NoteForm = ({ onSubmit }: IProps) => {
    // Create the input and textarea references
    const titleInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

    /*
    * function: handleOnSubmit
    * description: Prevents the default form behavior, then call the onSubmit callback with the new
    * note information to add this to the notes state
     */
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

    /*
    * function: clearForm
    * description: Clear the inputs in the form to reset it
     */
    const clearForm = () => {
        titleInputRef.current!.value = '';
        descriptionInputRef.current!.value = '';
    }

    return <div className="mb-10 bg-white p-6 rounded-md shadow-md">
        <form onSubmit={handleOnSubmit}>
            <fieldset className="mb-4">
                <label htmlFor="title" className="text-gray-900">Title</label><br/>
                <input
                    ref={titleInputRef}
                    type="text"
                    name="title"
                    id="title"
                    minLength={5}
                    required
                    className="w-full border-2 rounded-md p-2"
                    placeholder="Call the doctor"
                    aria-label="Note Title"
                    aria-required="true"
                    role="textbox"
                    aria-describedby="title-helper"
                />
                <small id="title-helper" className="text-gray-500">Enter a title for your note (min 5
                    characters).</small>
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
                    placeholder="Schedule a new appointment"
                    aria-label="Note Description"
                    aria-required="true"
                    role="textbox"
                    aria-describedby="description-helper"
                />
                <small id="description-helper" className="text-gray-500">Provide a brief description (min 5
                    characters).</small>
            </fieldset>
            <button
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
                type="submit"
                aria-label="Add new note"
            >
                Add Note
            </button>
        </form>
    </div>
}
