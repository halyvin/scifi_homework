import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { add_item, remove_item, check_item, flip_item, show_alarm, close_alarm } from 'actions/app';

import Expounder from '../Expounder';
import Controls from '../Controls';
import Status from '../Status';
import Alarm from '../Alarm';
import List from '../List';


@connect(state => {
  return {
    alarm: state.app.alarm,
    list: state.app.list,
    status: state.app.status,
    event: state.app.event
  } 
})

export default class Home extends Component {
  static propTypes = {
    alarm: PropTypes.object,
    list: PropTypes.array,
    status: PropTypes.object,
    event: PropTypes.string,
    dispatch: PropTypes.func
  }

  prepareList(list) {
    const { dispatch=()=>{} } = this.props;

    return list.map(({ checked, flipped, pro, id }) => {
      const handlers = {
        check_item() {
          return dispatch(check_item({id, checked, flipped}))
        },
        flip_item() {
          return pro ? dispatch(flip_item({id, flipped})) : ()=>{}
        },
        remove_item() {
          return pro ? dispatch(show_alarm(id)) : dispatch(remove_item(id))
        }
      }

      return {
        id,
        pro,
        checked,
        flipped,
        handlers
      };
    });
  }

  hideAlarm(shouldRemove=false) {
    const { dispatch=()=>{} } = this.props;

    dispatch(close_alarm(shouldRemove));
  }

  addItem(pro=false) {
    const { dispatch=()=>{} } = this.props;

    dispatch(add_item(pro));
  }

  render() {      
    const { list, status, alarm, event } = this.props || {};

    return (
      <div className="home">
        {
          !alarm ? '' :
            <Alarm
              cancel={this.hideAlarm.bind(this, false)}
              accept={this.hideAlarm.bind(this, true)}
            />
        }
        <div className="home__tools">
          <Controls
            addSimple={this.addItem.bind(this, false)}
            addPro={this.addItem.bind(this, true)}
          />
          <Status
            all={status.all}
            checked={status.checked}
          />
        </div>
        <List items={this.prepareList.call(this, list)} />
        <Expounder className="expounder" event={event} />
      </div>
    );
  }
}
