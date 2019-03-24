import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Charthome from '../chart/Charthome';

export default class Tabinvestasi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      details: this.props.details
    };
  }


  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="tab-investasi">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Ringkasan
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Rincian
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Prediksi
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col md="12">
                  <div>
                  { this.props.details.map(detail => 
                    <div className='isikonten'>
                    <p>{detail.description}</p>
                    <p>Periode kontrak: {detail.period} tahun</p>
                    <p>Return yang didapat: {detail.return_value}% per tahun</p>
                    <p>Periode bagi hasil: {detail.share_periode} tahun</p>
                    </div>
                  )}
                  </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col md="12">
                  <div>
                  { this.props.details.map(detail => 
                    <p className='isikonten'>{detail.background}</p>
                  )}
                  </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col md="12">
                <div className='charthome'><Charthome/></div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
  