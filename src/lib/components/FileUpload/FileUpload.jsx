import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import Term from '../../localization/Term';
import { DropArea, WrapperAction, ScrollView } from './style';
import { FileUploadPreview } from './FileUploadPreview';
import { FileUploadList } from './FileUploadList';

export const FileUpload = ({
  className,
  style,
  disabled,
  multiple,
  onLoadFiles,
  defaultValue,
  onRemoveDefaultValue,
  ...props
}) => {
  const [files, setFiles] = useState([]);

  const removeFile = (file) => {
    if (file) {
      const newFiles = [...files];
      newFiles.splice(newFiles.indexOf(file), 1)
      setFiles(newFiles);
    } else {
      setFiles([]);
    }
    if (defaultValue && onRemoveDefaultValue) onRemoveDefaultValue();
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
      {!multiple && (!!files.length || defaultValue) && (
        <FileUploadPreview
          files={files}
          defaultValue={!defaultValue ? null : defaultValue}
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

      {((!multiple && files.length === 0) || multiple) && !defaultValue && (
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
  onLoadFiles: PropTypes.func,
  /** Show an exist data from form */
  defaultValue: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    preview: PropTypes.string,
    size: PropTypes.string,
  }),
  /** Call function when remove button is clicked (defaultValue is required to use this) */
  onRemoveDefaultValue: PropTypes.func
};

FileUpload.defaultProps = {
  accept: null,
  multiple: false,
  disabled: false,
  onLoadFiles: null,
  defaultValue: null,
  onRemoveDefaultValue: null
}
