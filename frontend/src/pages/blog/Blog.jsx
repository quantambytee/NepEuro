import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import BlogPageContent from './BlogPageContent';
import FooterV2 from '../../components/footer/FooterV2';

const Blog = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Blog Page" pageLink="blog" />
            <BlogPageContent />
            <FooterV2 />
        </>
    );
};

export default Blog;