import {Outlet} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>THIS WILL BE THE HOMEPAGE</h1>
            <Outlet/>
        </div>
    );
};

export default Home;