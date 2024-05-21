import React, { useState, ChangeEvent, FormEvent } from 'react';

const Upload = () => {

    const [formData, setFormData] = useState([]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // dataSubmission(formData);
    };

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return
        }
        const name = e.target.name
        setFormData({ ...formData, [name]: e.target.files[0] });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="file"
                name="photo"
                onChange={handleFileUpload}
                accept=".jpg"
                required
            />
            <button type="submit">Submit</button>
        </form>
    )
};
export default Upload;