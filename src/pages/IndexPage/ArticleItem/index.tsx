import React from "react"
import Article from "../../../models/Article.ts";
import {Col, Row, Space, Tag, Tooltip} from "antd";
import {LikeOutlined, MessageOutlined, StarOutlined} from "@ant-design/icons";

const IconText = ({icon, text}: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
const Index: React.FC<Article> = (props) => {
    const item = props

    return <Row>
        <Col span={7}>
            <img
                style={{width: "100%"}}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
        </Col>
        <Col offset={1} span={12}>
            <h2 style={{marginTop: 0}}>{item.title}</h2>
            {
                item.tags?.map(function (tag) {
                    return <Tag color={tag.color}>{tag.text}</Tag>
                })
            }
            <br/><br/>
            <Tooltip title={item.abstract}>
                <span style={{color: "gray"}}>{item.abstract?.substring(0, 154) + "..."}</span>
            </Tooltip>
            <br/><br/><br/>
            <Space size={30} style={{
                position: "absolute",
                bottom: 0
            }}>
                {
                    [
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
                    ]
                }
            </Space>
        </Col>
    </Row>

}

export default Index