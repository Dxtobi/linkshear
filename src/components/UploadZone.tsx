import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: any[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target && typeof e.target.result === 'string') {
        setUploadedImage(e.target.result);
      }
    };

    reader.readAsDataURL(file);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="flex flex-col rounded-lg  mx-auto w-full ">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-10 text-center w-full ${
          isDragActive ? ' bg-blue-100' : 'border-gray-300 bg-gray-100'
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500">Drop the image here...</p>
        ) : (
          <p className="text-gray-600">Drag & drop an image here, or click to select one</p>
        )}
      </div>
      {uploadedImage && (
        <div className="mt-4">
          <Image src={uploadedImage} alt="Uploaded" className=" h-[200px] w-[200px] rounded-lg" width={200} height={200} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
