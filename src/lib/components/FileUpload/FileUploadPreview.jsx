import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Icon } from '../Icon';
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
          <img src={preview} alt={name} />
        ) : (
          <Icon icon="insert_drive_file" />
        )}
      </PreviewFigure>

      <FileInfo>
        <FileInfoName>{name}</FileInfoName>
        <FileInfoSize>({Math.floor(size / 1024)}kb)</FileInfoSize>
      </FileInfo>

      <Button type="button" secondary small onClick={handleRemove}>Remover</Button>
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
