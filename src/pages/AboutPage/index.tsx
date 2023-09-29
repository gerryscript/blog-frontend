import React from "react"
import {Col, Divider, Row} from "antd";
const Index : React.FC = (props) => {
    return <>
        <Row>
            <Col lg={{span:18,offset:3}}>
                <h1>About Me</h1>
                <Divider></Divider>
                <strong>
                    <p style={{fontSize:18}}>
                        Hi there, This is Morven, graduated from Nanjing University with Bachelor and Master degree in 2015, now working as a software engineer at Red Hat focusing on cloud technology. I generally use morvencao as my id on the Internet. I’m a strong advocate and believer of OSS(Open Source Software) and passionate about reading, thinking, programming and the possibility of time travel.
                    </p>
                    <p style={{fontSize:18}}>
                        Reach Me:
                        <ul>
                            <li><a href="">Gmail</a></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </p>
                </strong>
            </Col>
        </Row>
    </>
}

export default Index