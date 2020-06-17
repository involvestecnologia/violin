import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import Term from '../../localization/Term'
import { PreviewFigure, FileInfo, FileInfoName, FileInfoSize } from './style';

export const FileUploadPreview = ({ files, defaultValue, onRemove }) => {
  const { name = null, size = null, type = null, preview = null } = files[0] || defaultValue;

  const handleRemove = (e) => {
    e.stopPropagation();
    onRemove();
  }

  return (
    <>
      <PreviewFigure data-testid="fileUploadPreviewFigure">
        {/^image/.test(type) ? (
          <img src={preview} alt={name} data-testid="fileUploadPreviewImage" />
        ) : (
          <Icon icon="insert_drive_file" data-testid="fileUploadPreviewIcon" />
        )}
      </PreviewFigure>

      {(name || size) && (
        <FileInfo data-testid="fileUploadPreviewInfo">
          <FileInfoName>{name}</FileInfoName>
          <FileInfoSize>({Math.floor(size / 1024)}kb)</FileInfoSize>
        </FileInfo>
      )}

      <Button type="button" secondary small onClick={handleRemove} data-testid="fileUploadPreviewRemove">
        <Term>FileUpload.removeButton</Term>
      </Button>
    </>
  )
};

FileUploadPreview.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func,
  defaultValue: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    preview: PropTypes.string,
    size: PropTypes.string,
  })
};

FileUploadPreview.defaultProps = {
  files: [],
  onRemove: null,
  defaultValue: null
}
