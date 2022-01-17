import React from 'react';
import Article from './Article';
import { Layout, Menu, Row, Col } from 'antd/lib';
class ListArticle extends React.Component {
    artitles = [
        ['lorem', 'loremjasdgj ashdnsd sad sa fsd f ds f sadf asd f sdf sd f sd fs adfsa'],
        ['lorem', 'loremjasdgj ashdnsd sad sa fsd f ds f sadf asd f sdf sd f sd fs adfsa'],
        ['lorem', 'loremjasdgj ashdnsd sad sa fsd f ds f sadf asd f sdf sd f sd fs adfsa'],
        ['lorem', 'loremjasdgj ashdnsd sad sa fsd f ds f sadf asd f sdf sd f sd fs adfsa'],
        ['lorem', 'loremjasdgj ashdnsd sad sa fsd f ds f sadf asd f sdf sd f sd fs adfsa'],
        ['lorem', 'loremjasdgjRow ashdnsd sad sa fsd f ds f sadf asd f sdf sd f sd fs adfsa']
    ]
    render() {
        return <Row gutter={16}>
                    { this.artitles.map((article) => <Col className="gutter-row" span={6}><Article artitle={article} /></Col>) }
                </Row>
    }
}


export default ListArticle;