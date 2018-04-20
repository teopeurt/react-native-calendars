import React, { Component } from 'react';
import { SectionList } from 'react-native';
import PropTypes from 'prop-types';

class TenxWrappedSectionList extends Component {
  static propTypes = {
    style: PropTypes.any,
    onRefresh: PropTypes.any,
    sections: PropTypes.any,
    renderItem: PropTypes.any,
    refreshing: PropTypes.any,
    renderSectionHeader: PropTypes.any,
    keyExtractor: PropTypes.any,
    scrollEnabled: PropTypes.any,
    onViewableItemsChanged: PropTypes.any
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <SectionList
            style={this.props.style}
            onRefresh={this.props.onRefresh}
            sections={this.props.sections}
            renderItem={this.props.renderItem}
            refreshing={this.props.isRefreshing}
            renderSectionHeader={this.props.renderSectionHeader}
            keyExtractor={this.props.keyExtractor}
            scrollEnabled={this.props.scrollEnabled}
            onViewableItemsChanged={this.props.onViewableItemsChanged}
        />
    );
  }
}

export default TenxWrappedSectionList;

