import {
    Layout
} from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { GeneralContext, GeneralContextType } from '../../common/context/GeneralContext';
import HomeFooter from './Footer';
import Navbar from './Navbar';


export function HomeLayout() {
    const { loggedInUser } = useContext(GeneralContext) as GeneralContextType;
    console.log(loggedInUser);


    return (
        <Layout style={{ backgroundColor: '#fff' }}>
            <Navbar />
            <Content style={{ padding: '0 50px' }}>
                <Outlet />
            </Content>
            <HomeFooter />
        </Layout >
    );
}
