import axios from "axios";

export const fetchNotes = async (filter) => {
    try {
        var response = await axios.get("http://localhost:5265/notes", {
            params: {
                search: filter?.search,
                sortOrder: filter?.sortOrder,
                sortItem: filter?.sortItem,
            },
        });

        return response.data.notes;
    } catch (e) {
        console.error(e);
    }
};

export const createNote = async (note) => {
    try {
        var response = await axios.post("http://localhost:5265/notes", note);
        
        return response.status;
    } catch (e) {
        console.error(e);
    }
};