"use client"

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export function InvoiceDropZone() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload here
    console.log(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-6 text-center">
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}