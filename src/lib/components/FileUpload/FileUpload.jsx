import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import Term from '../../localization/Term'
import { DropArea, WrapperAction, ScrollView } from './style';
import { FileUploadPreview } from './FileUploadPreview';
import { FileUploadList } from './FileUploadList';

export const FileUpload = ({ className, style, disabled, multiple, onLoadFiles, ...props }) => {
  const [files, setFiles] = useState([]);

  const removeFile = (file) => {
    if (file) {
      const newFiles = [...files];
      newFiles.splice(newFiles.indexOf(file), 1)
      setFiles(newFiles);
    } else {
      setFiles([]);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    onDrop,
    disabled,
    multiple,
    ...props
  });

  useEffect(() => {
    if (onLoadFiles) onLoadFiles(files);
  }, [files]);

  return (
    <DropArea
      {...getRootProps()}
      isDragActive={isDragActive}
      isDisabled={disabled}
      style={style}
      className={className}
      isMultiple={multiple}
      data-testid="fileUpload"
    >
      {!multiple && !!files.length && (
        <FileUploadPreview
          files={files}
          isMultiple={multiple}
          onRemove={removeFile}
        />
      )}

      {multiple && !!files.length && (
        <ScrollView>
          <FileUploadList
            files={files}
            onRemove={removeFile}
          />
        </ScrollView>
      )}

      {((!multiple && files.length === 0) || multiple) && (
        <WrapperAction small={multiple && !!files.length}>
          <Term>FileUpload.placeholder</Term> <span><Term>FileUpload.placeholderLink</Term></span>
        </WrapperAction>
      )}

      <input {...getInputProps()} data-testid="fileUploadInput" />
    </DropArea>
  )
};

FileUpload.propTypes = {
  /** Pass file extensions separated in comma */
  accept: PropTypes.string,
  /** Allow upload multiple files */
  multiple: PropTypes.bool,
  /** Disable input */
  disabled: PropTypes.bool,
  /** Return a function with array files */
  onLoadFiles: PropTypes.func
};

FileUpload.defaultProps = {
  accept: null,
  multiple: false,
  disabled: false,
  onLoadFiles: null
}
