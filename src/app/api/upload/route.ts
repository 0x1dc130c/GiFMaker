import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest } from 'next';
import { BlobServiceClient, BlockBlobUploadOptions, StorageSharedKeyCredential } from '@azure/storage-blob';
const storageAccountName = 'gifmakerstorage';
const storageAccountKey = 'GTVRTSAC2UtTOCgVoWuRtAQ6G6w4LWvbyT/TzWlHKA1uJWZro/CU+sQZPIfA6QtHJQZmlrClfAY7+AStc6Ax0g==';
const containerName = 'gifstorage';

export async function POST(request : NextRequest){
    const data = await request.formData();
    const file : File = data.get('image') as unknown as File;
    const namefile = file.name;
    const blob = file;
    console.log('Uploading image api blob :', blob);
    const options: BlockBlobUploadOptions = {
        blobHTTPHeaders: { blobContentType: file.type }
      };
    // const blob = new Blob([file], { type: 'image/gif' });
    const sharedKeyCredential = new StorageSharedKeyCredential(storageAccountName, storageAccountKey);
    const blobServiceClient = new BlobServiceClient(`https://${storageAccountName}.blob.core.windows.net`, sharedKeyCredential);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobName = `foldergif/${namefile}-image.gif`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    
    // อัปโหลด Blob
    await blockBlobClient.uploadData(await blob.arrayBuffer(), options);

    console.log('file : ', file);
    return NextResponse.json({ message: 'File uploaded successfully' });
}