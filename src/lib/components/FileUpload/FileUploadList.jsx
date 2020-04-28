import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { FileInfo, FileInfoName, FileInfoSize, FileItem, WrapperList } from './style';

export const FileUploadList = ({ files, onRemove }) => {
  const handleRemove = (e, item) => {
    e.stopPropagation();
    onRemove(item);
  };

  return (
    <WrapperList onClick={(e) => e.stopPropagation()} data-testid="fileUploadList">
      {files.map((item) => (
        <FileItem key={item.name} data-testid="fileUploadListItem">
          <FileInfo isList>
            <FileInfoName>{item.name}</FileInfoName>
            <FileInfoSize>({Math.floor(item.size / 1024)}kb)</FileInfoSize>
          </FileInfo>

          <Button
            type="button"
            secondary
            small
            icon="close"
            onClick={(e) => handleRemove(e, item)}
            data-testid="fileUploadListRemove"
            style={{ flexShrink: 0 }}
          />
        </FileItem>
      ))}
    </WrapperList>
  )
};

FileUploadList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func,
};

FileUploadList.defaultProps = {
  files: [],
  onRemove: null
}
