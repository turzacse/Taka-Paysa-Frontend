import React from 'react';
import Card from './Card';

const Dashboard = () => {
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white gap-4'>
                <Card title={'USERS'} value={'10'} color={'#24478F'} link={'users'} />
                <Card title={'SSC NOTES'} value={'12'} color={'#831F1F'} link={'ssc-notes'} />
                <Card title={'HSC NOTES'} value={'13'} color={'#A07207'} link={'hsc-notes'} />
                <Card title={'BLOG'} value={'10'} color={'#9D275E'} link={'blog'} />
            </div>
            
        </div>
    );
};

export default Dashboard;