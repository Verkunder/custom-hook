import React from 'react';
import useFetch from '@/hooks/useFetch';

const ImageFetch = () => {
    const res = useFetch({
        url: 'https://dog.ceo/api/breeds/image/random',
        method: 'get',
    });

    console.log(res);

    if (res.error) {
        return <div>Ошибка!</div>;
    }

    if (!res.response) {
        return <div>Loading...</div>;
    }
    const imageUrl = res.response.message;
    return (
        <div>
            <img src={imageUrl} alt="avatar" width={400} height="auto" />
        </div>
    );
};

export default ImageFetch;
