import React, { createContext } from 'react';
import ImageFetch from '@/components/core/ImageFetch';
import WindowSizeExampleHook from '@/components/core/WindowSizeExampleHook';
import Modal from '@/components/core/Modal';

export const TestContext = createContext('');

function IndexPage() {
    const [isModal, setModal] = React.useState(false);
    return (
        <>
            <TestContext.Provider value={'Тестовый контекст'}>
                <ImageFetch />
            </TestContext.Provider>
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
