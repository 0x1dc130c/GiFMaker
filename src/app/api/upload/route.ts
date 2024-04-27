import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest } from 'next';
import models from "../../utils/models";
import { BlobServiceClient, BlockBlobUploadOptions, StorageSharedKeyCredential } from '@azure/storage-blob';
import { where } from 'sequelize';
const storageAccountName = 'gifmakerstorage';
const storageAccountKey = 'GTVRTSAC2UtTOCgVoWuRtAQ6G6w4LWvbyT/TzWlHKA1uJWZro/CU+sQZPIfA6QtHJQZmlrClfAY7+AStc6Ax0g==';
const containerName = 'gifstorage';

async function UploadMysql(nameImg : string, time : number, url : string){  
  const timstamp = time.toString();
  const status = 'public';
  const TagName = 'GIF';
  const Userid = 104;
  console.log('nameImg : ', nameImg);
  console.log('timestamp : ', timstamp);
  console.log('url : ', url); 
  console.log('UserID : ', Userid);
  console.log('status : ', status);
  console.log('TagNames : ', TagName);
  try {
    const data = await models.info_image.create({imgName: nameImg, timestamp: timstamp, path_Img: url, UserID: Userid, status_img: status, TagNames: TagName});
    console.log('data : ', data);

  } catch (error) {

    console.log('Error in UploadMysql : ', error);

  }
  
};

export async function POST(request : NextRequest){
  if (request.method === 'POST') {
    try {
      const data = await request.formData();
      const file : File = data.get('image') as unknown as File;
      const nameFile = data.get('name') as string;
      const description = data.get('description') as string;
      console.log('nameFile : ', nameFile);
      console.log('description : ', description);


      const blob = file;
      console.log('Uploading image api blob :', blob);
      const options: BlockBlobUploadOptions = {
          blobHTTPHeaders: { blobContentType: file.type }
        };
      // const blob = new Blob([file], { type: 'image/gif' });
      const sharedKeyCredential = new StorageSharedKeyCredential(storageAccountName, storageAccountKey);
      const blobServiceClient = new BlobServiceClient(`https://${storageAccountName}.blob.core.windows.net`, sharedKeyCredential);
      const containerClient = blobServiceClient.getContainerClient(containerName);
      const blobName = `foldergif/${nameFile}-image.gif`;
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      const ImgUrl = `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blobName}`;
      
      UploadMysql(nameFile, Date.now(),  ImgUrl);

      // อัปโหลด Blob
      await blockBlobClient.uploadData(await blob.arrayBuffer(), options);

      console.log('file : ', file);
      return NextResponse.json({ message: 'File uploaded successfully',  });
    } catch (error) {
      console.error('Error uploading file : ', error);
      return NextResponse.json({ message: ' REQ == POST. Error in file upload ', status: 500 });
    }
      
      } else {
      return NextResponse.json({ message: 'Error in file upload', status: 500 });
      }
  }