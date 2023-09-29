import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Button, Menu} from 'antd';
import {useNavigate} from "react-router-dom";

const items: MenuProps['items'] = [
    {
        label: '首页',
        key: 'index',
        //icon: <MailOutlined />,
    },
    {
        label: '关于',
        key: 'about',
        //icon: <AppstoreOutlined />,
    },
];

const Index: React.FC = () => {
    const [current, setCurrent] = useState('mail');
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        navigate(e.key, );
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Index;