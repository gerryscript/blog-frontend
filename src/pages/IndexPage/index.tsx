import * as React from "react";
import {Col, Divider, Row, Space} from 'antd';
import { Avatar, List } from 'antd';
import Article from "../../models/Article.ts";
import {LikeOutlined, MessageOutlined, StarOutlined} from "@ant-design/icons";
import ArticleItem from "./ArticleItem";

interface IProps {
    children? : any
}

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const articles: Article[] = [
    {
        title: "A tale of two cities",
        abstract: "To be or not be, that is a question, To be or not be, that is a question,To be or not be, that is a question,To be or not be, that is a question,not be, that is a question, To be or not be, that is a question,To be or not be, that is a question,To be or not be, that is a question,not be, that is a question, To be or not be, that is a question,To be or not be, that is a question,To be or not be, that is a question,not be, that is a question, To be or not be, that is a question,To be or not be, that is a question,To be or not be, that is a question,not be, that is a question, To be or not be, that is a question,To be or not be, that is a question,To be or not be, that is a question, "  ,
        tags: [{
            text: "English",
            color: "orange"
        }, {
            text: "fraction",
            color: "green"
        } ],
    },
    {
        title: "A tale of two cities",
        abstract: "To be or not be, that is a question, To be or not be, that is a question,To be or not be, that is a question,To be or not be, that is a question,not be, that is a question, To be or not be, that is a question,To be or not be, that is a question,To be or not be, that is a question,not be, that is a question, To be or not be, that is a question,To be or not be, that is a question,To be or not be, that is a question,not be, that is a question, To be or not be, that is a question,To be or not be, that is a question,To be or not be, that is a question,not be, that is a question, To be or not be, that is a question,To be or not be, that is a question,To be or not be, that is a question, "  ,
        tags: [{
            text: "English",
            color: "orange"
        }, {
            text: "fraction",
            color: "green"
        } ],
    },
]

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
)

const Index : React.FC<IProps> = (props) => {

    return <>
        <Row style={{marginTop:20}}>
            <Col offset={3} span={18}>
                <h2>文章列表</h2>
                <Divider>
                </Divider>
            </Col>
            <Col offset={3} span={9}>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}
                />
            </Col>
            <Col span={9}>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
        <Row style={{marginTop:20}}>
            <Col offset={3} span={18}>
                <h2>近期文章</h2>
                <Divider>
                </Divider>
                {
                    articles.map( (article) => {
                        return <>
                            <ArticleItem {...article} />
                            <Divider>

                            </Divider>
                        </>
                    })
                }

            </Col>
        </Row>
    </>
}
export default Index
