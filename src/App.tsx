import React from 'react';
import DemoCarousel from './components/DemoCarousel/DemoCarousel';
import Footer from './components/Footer/Footer';
import InformationBlock from './components/InformationBlock/InformationBlock';
import LatestNews from './components/LatestNews/LatestNews';
import RequestInformation from './components/RequestInformation/RequestInformation';
import Navbar from './components/UI/Navbar/Navbar';

import styles from './css/App.module.css';

function App() {
    const textForDescription =
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid explicabo illum iure distinctio quasi nam facilis consequatur. Animi quisquam dolorem quo reprehenderit sed ducimus nostrum non harum praesentium aliquam?';
    const news = [
        {
            caption: 'Omnis iste natus error sit voluptatem accusantium',
            data: '14 APR 2014',
            description:
                'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dfghjkl;lkjhgfdghjhgfdfghjhgf',
            image: './../UI/img/redPanda.png',
        },
        {
            caption: 'Omnis iste natus error sit voluptatem accusantium',
            data: '14 APR 2016',
            description:
                'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dfghjkl;lkjhgfdghjhgfdfghjhgf',
            image: './../UI/img/redPanda.png',
        },
    ];
    return (
        <div className={styles.mainPage}>
            <Navbar></Navbar>
            <DemoCarousel></DemoCarousel>
            <div className={styles.backdown}>
                <div className={styles.informationBlocks}>
                    <InformationBlock
                        src={require('./components/UI/img/firstIcon.png')}
                        captionText='THE BEST LEARNING METHODS'
                        descriptionText={textForDescription}
                        isLeft={true}
                    />
                    <InformationBlock
                        src={require('./components/UI/img/secondIcon.png')}
                        captionText='AWESOME RESULTS OF OUR STUDENTS'
                        descriptionText={textForDescription}
                        isLeft={false}
                    />
                </div>
                <LatestNews news={news}></LatestNews>
                <RequestInformation />
                <Footer />
            </div>
        </div>
    );
}

export default App;
