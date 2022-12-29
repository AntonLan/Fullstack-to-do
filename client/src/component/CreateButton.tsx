import React from 'react';

interface CreateButtonProps {
    handleCreateOpen: () => void
}

const CreateButton = ({handleCreateOpen}: CreateButtonProps) => {
    return (
        <div>
            <button onClick={handleCreateOpen}
                    className="btn ml-6">Create task
            </button>
        </div>
    );
};

export default CreateButton;