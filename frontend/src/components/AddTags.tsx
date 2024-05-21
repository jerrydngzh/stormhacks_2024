import { FC, useState } from 'react';
import "./bottomSection.css"

const AddTags: FC = () => {

    interface Tag {
        id: number;
        name: string;
    }

    // generate ids for the tags
    const [idCounter, setIdCounter] = useState(0);

    const [tags, setTags] = useState<Tag[]>([]);

    const addTag = (newTag: Tag) => {
        setTags([...tags, newTag]);
    }

    const onEnter = (event: any) => {
        if (event.key === "Enter") {
            addTag({ id: idCounter, name: event.target.value });
            setIdCounter(idCounter + 1);
            event.target.value = "";
        }
    };

    const deleteTag = (tagToDelete: Tag) => {
        const updatedTags = tags.filter(tag => tag.id !== tagToDelete.id);
        setTags(updatedTags);
    };

    return (
        <>
            <div className="rightSection container">
                <input
                    type='text'
                    name='tag'
                    placeholder='Type a tag...'
                    onKeyDown={onEnter}
                ></input>
                <ul>
                    {tags.map(tag => (
                        <div>
                            <li key={tag.id}>{tag.name}</li>
                            <button onClick={() => deleteTag(tag)}>x</button>
                        </div>

                    ))}

                </ul>
            </div>
        </>

    )
}

export default AddTags