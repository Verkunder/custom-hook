import React from 'react';
import ImageFetch from '@/components/core/ImageFetch';
import WindowSizeExampleHook from '@/components/core/WindowSizeExampleHook';
import Modal from '@/components/core/Modal';

function IndexPage() {
    const [isModal, setModal] = React.useState(false);
    return (
        <>
            <ImageFetch />
            <WindowSizeExampleHook />
            <button onClick={() => setModal(true)}>Click Here</button>
            <Modal
                isVisible={isModal}
                title="Modal Title"
                content={<p>Add your content here</p>}
                footer={<button>Cancel</button>}
                onClose={() => setModal(false)}
            />
        </>
    );
}

export default IndexPage;
