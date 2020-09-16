import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
const CreateNote = () => {
    return (
        <>
            <div className="note">
                <form>
                    <input type="text" placeholder="Title"/>
                    <textarea cols="" rows=""></textarea>
                    <Button>
                        <AddIcon />
                    </Button>
                </form>
            </div>
        </>
    )
}

export default CreateNote;