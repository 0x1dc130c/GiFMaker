import { BlobServiceClient, BlockBlobUploadOptions, StorageSharedKeyCredential } from '@azure/storage-blob';
import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm } from 'formidable';
import { NextResponse } from 'next/server';
import multer from 'multer';
import bodyParser from 'body-parser';
const storageAccountName = 'gifmakerstorage';
const storageAccountKey = 'GTVRTSAC2UtTOCgVoWuRtAQ6G6w4LWvbyT/TzWlHKA1uJWZro/CU+sQZPIfA6QtHJQZmlrClfAY7+AStc6Ax0g==';
const containerName = 'gifstorage';


export async function POST(req: NextApiRequest) {

  if (req.method === 'POST') {
    try {
        const formdata = req.body;
        console.log('formdata :', formdata);
      // const stream = req.body.image;
      // console.log('Uploading image api :', stream);
      // const blob = new Blob([stream], { type: 'image/gif' });
      // console.log('Uploading image api blob :', blob);
      // const options: BlockBlobUploadOptions = { blobHTTPHeaders: { blobContentType: 'image/gif' } };
      // const sharedKeyCredential = new StorageSharedKeyCredential(storageAccountName, storageAccountKey);
      // const blobServiceClient = new BlobServiceClient(`https://${storageAccountName}.blob.core.windows.net`, sharedKeyCredential);
      // const containerClient = blobServiceClient.getContainerClient(containerName);
      // const blobName = `${Date.now()}-image.gif`;
      // const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      // await blockBlobClient.upload(blob, blob.size, options);
      return NextResponse.json({ message: formdata });
      // ----------------- 1st way to upload image -----------------
      // const img = req.body || '';
      // console.log('Uploading image api :', img);
      //   const sharedKeyCredential = new StorageSharedKeyCredential(storageAccountName, storageAccountKey);
      //   const blobServiceClient = new BlobServiceClient(`https://${storageAccountName}.blob.core.windows.net`, sharedKeyCredential);
      //   const containerClient = blobServiceClient.getContainerClient(containerName);
      //   const blobName = `${Date.now()}-image.gif`;
      //   const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      //   await blockBlobClient.upload(img, img.length);
      //   return NextResponse.json({ message: 'File uploaded successfully' });

      // ----------------- 2nd way to upload image -----------------
      // // Generate unique blob name
      // const blobName = `${Date.now()}-${file.name}`;

      // // Upload file to Azure Storage
      // const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      // await blockBlobClient.uploadFile(file.path);

      // // Return the URL of the uploaded file
      // const imageUrl = blockBlobClient.url;
      // return NextResponse.json({ message: 'File uploaded successfully' });
    } catch (error) {
      console.error('Error handling file upload:', error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      // res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
    // res.status(405).json({ message: 'Method Not Allowed' });
  }
}