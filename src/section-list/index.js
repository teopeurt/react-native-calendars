import React, { Component } from 'react';
import { SectionList } from 'react-native';

class TenxWrappedSectionList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <SectionList
			{...this.props}
        />
    );
  }
}

export default TenxWrappedSectionList;

