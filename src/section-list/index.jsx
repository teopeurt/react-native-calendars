import React from 'react';
import { SectionList } from 'react-native';

class TenxWrappedSectionList extends React.Component {
  constructor(props) {
    super(...props);
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

