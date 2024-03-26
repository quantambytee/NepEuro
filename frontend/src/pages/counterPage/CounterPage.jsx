import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import CounterV1 from '../../components/counter/CounterV1';
import BreadCums from '../../components/breadCums/BreadCums';
import CounterV3 from '../../components/counter/CounterV3';
import StatisticsV1 from '../../components/statistics/StatisticsV1';
import CounterV4 from '../../components/counter/CounterV4';
import FooterV2 from '../../components/footer/FooterV2';

const CounterPage = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Counter" pageLink="Counter" />
            <CounterV1 counterSpace="pt-120 rpt-100 pb-90 rpb-70" />
            <CounterV3 />
            <StatisticsV1 areaSpace="pt-120 rpt-100 pb-120 rpb-70" />
            <CounterV4 />
            <FooterV2 />
        </>
    );
};

export default CounterPage;