import { FC, useState } from 'react';
import "./bottomSection.css"

const AddTags: FC = () => {

    // interface Tag {
    //     id: number;
    //     name: string;
    // }

    const [tag, setTag] = useState('');
    const handleTag = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTag(event.target.value);
    };

    const [tagList, setTagList] = useState<string[]>([]);
    const onEnter = (event: any) => {
        if (event.key === "Enter") {
            setTagList([...tagList, tag]);
            setTag("");
        }
    };

    // const deleteTag = (tagToDelete: Item) => {
    //     const updatedItems = items.filter(item => item.id !== itemToDelete.id);
    //     setItems(updatedItems);
    // };

    return (
        <>
            <div className="rightSection container">
                <input
                    type='text'
                    name='tag'
                    value={tag}
                    placeholder='Type a tag...'
                    onChange={handleTag}
                    onKeyDown={onEnter}
                ></input>
                <ul>
                    {tagList.map((tag) => (
                        <li>
                            {tag}
                            {/* <button
                                onClick={deleteTag()}>x</button> */}
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default AddTags