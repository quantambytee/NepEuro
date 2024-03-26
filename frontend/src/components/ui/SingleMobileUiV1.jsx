import React from 'react';
import { Item } from 'react-photoswipe-gallery';

const SingleMobileUiV1 = ({ mobile }) => {
    const { thumb } = mobile

    return (
        <>
            <div className="mobile-screen-item">
                <Item
                    original={`/images/mobiles/${thumb}`}
                    thumbnail={`/images/mobiles/${thumb}`}
                    width="195"
                    height="395"
                >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={`/images/mobiles/${thumb}`} />
                    )}
                </Item>
            </div>
        </>
    );
};

export default SingleMobileUiV1;