import React from "react";
import TopicCard from "./topicCard/TopicCard.jsx";
import SectionTitle from "../../../components/title/sectionTitle/SectionTitle.jsx";
import classes from "./InterestingTopics.module.scss";

const InterestingTopics = ({
                               title = "",
                               topics = []
}) => {
    return <section className={classes['container']}>
        <SectionTitle title={title}/>
        <div className={classes['topics-list']}>
            {Array.isArray(topics) && topics.length > 0 ?
                topics.map((item, index) => <TopicCard key={`topic-${index}`}
                                                               title={item?.title}
                                                                description={item?.description}
                                                                image={item?.image}
                                                                imageAltText={item?.alt}/>)
                :
                <div>There are no topics.</div>
            }
        </div>
    </section>
}

export default InterestingTopics;