import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DnDPreview from 'react-dnd-preview';
import { DragLayer } from 'react-dnd';

@DragLayer((monitor) => { return {isDragging: monitor.isDragging()}; })
export default class Preview extends PureComponent {
  static propTypes = {generator: PropTypes.func.isRequired};
  static contextTypes = {dragDropManager: PropTypes.object};

  render() {
    if (!this.context.dragDropManager.getBackend().previewEnabled()) {
      return null;
    }
    return <DnDPreview {...this.props} />;
  }
}
