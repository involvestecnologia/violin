import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import Term from '../../localization/Term'
import { PreviewFigure, FileInfo, FileInfoName, FileInfoSize } from './style';

export const FileUploadPreview = ({ files, onRemove }) => {
  const { name, size, type, preview } = files[0];

  const handleRemove = (e) => {
    e.stopPropagation();
    onRemove();
  }

  return (
    <>
      <PreviewFigure>
        {type.split('/')[0] === 'image' ? (
          <img src={preview} alt={name} data-testid="fileUploadPreviewImage" />
        ) : (
          <Icon icon="insert_drive_file" data-testid="fileUploadPreviewIcon" />
        )}
      </PreviewFigure>

      <FileInfo data-testid="fileUploadPreviewInfo">
        <FileInfoName>{name}</FileInfoName>
        <FileInfoSize>({Math.floor(size / 1024)}kb)</FileInfoSize>
      </FileInfo>

      <Button type="button" secondary small onClick={handleRemove} data-testid="fileUploadPreviewRemove">
        <Term>FileUpload.removeButton</Term>
      </Button>
    </>
  )
};

FileUploadPreview.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func,
};

FileUploadPreview.defaultProps = {
  files: [],
  onRemove: null
}
