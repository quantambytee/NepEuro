import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import BlogDetailsContent from './BlogDetailsContent';
import FooterV2 from '../../components/footer/FooterV2';

const BlogDetails = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Blog Details" pageLink="blog-details" />
            <BlogDetailsContent />
            <FooterV2 />
        </>
    );
};

export default BlogDetails;