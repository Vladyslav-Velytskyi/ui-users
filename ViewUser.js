import React, { Component, PropTypes } from 'react' // eslint-disable-line
import { connect } from 'stripes-connect'; // eslint-disable-line
import Pane from '@folio/stripes-components/lib/Pane' // eslint-disable-line
import Button from '@folio/stripes-components/lib/Button' // eslint-disable-line
import KeyValue from '@folio/stripes-components/lib/KeyValue' // eslint-disable-line
import {Row, Col} from 'react-bootstrap' // eslint-disable-line
import TextField from '@folio/stripes-components/lib/TextField' // eslint-disable-line
import MultiColumnList from '@folio/stripes-components/lib/MultiColumnList' // eslint-disable-line
import Icon from '@folio/stripes-components/lib/Icon' // eslint-disable-line

class ViewUser extends Component {

  static propTypes = {
    data: PropTypes.shape,
  };

  static manifest = {
    user: {
      type: 'okapi',
      path: 'users/:{userid}',
    },
  };

  render() {
    const fineHistory = [{ 'Due Date': '11/12/2014', 'Amount': '34.23', 'Status': 'Unpaid' }]; // eslint-disable-line quote-props
    const { data: { user } } = this.props;
    if (!user || user.length === 0) return <div />;
    return (
      <Pane defaultWidth="fill">
        <Row>
          <Col xs={8} >
            <Row>
              <Col xs={12}>
                <h2>{user[0].personal.full_name}</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <KeyValue label="Email" value={user[0].personal.email_primary} />
              </Col>
            </Row>
          </Col>
          <Col xs={4} >
            <img className="floatEnd" src="http://placehold.it/175x175" role="presentation" />
          </Col>
        </Row>
        <br />
        <hr />
        <br />
        <Row>
          <Col xs={3}>
            <h3 className="marginTopHalf">Fines</h3>
          </Col>
          <Col xs={4} sm={3}>
            <TextField
              rounded
              endControl={<Button buttonStyle="fieldControl"><Icon icon="clearX" /></Button>}
              startControl={<Icon icon="search" />}
              placeholder="Search"
            />
          </Col>
          <Col xs={5} sm={6}>
            <Button align="end" bottomMargin0 >View Full History</Button>
          </Col>
        </Row>
        <MultiColumnList fullWidth contentData={fineHistory} />
      </Pane>
    );
  }
}

export default connect(ViewUser, 'users');
