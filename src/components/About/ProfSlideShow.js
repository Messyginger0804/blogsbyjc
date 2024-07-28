import React from 'react';
import SlideShow from './SlideShow';
import FreelanceCard from './FreelanceCard';

function FreelanceSlideShow({ contractedJobs }) {
    return (
        <SlideShow
            items={contractedJobs}
            renderItem={(job) => <FreelanceCard key={job.title} job={job} />}
        />
    );
}

export default FreelanceSlideShow;
