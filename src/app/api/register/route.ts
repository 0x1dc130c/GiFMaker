import { NextRequest, NextResponse } from "next/server";
import models from "../../utils/models";
import { where } from 'sequelize';
import { BlobServiceClient, BlockBlobUploadOptions, StorageSharedKeyCredential } from '@azure/storage-blob';

const storageAccountName = 'gifmakerstorage';
const storageAccountKey = 'GTVRTSAC2UtTOCgVoWuRtAQ6G6w4LWvbyT/TzWlHKA1uJWZro/CU+sQZPIfA6QtHJQZmlrClfAY7+AStc6Ax0g==';
const containerName = 'profilestores';

export async function POST(request: Request) {
    try {
        const body = await request.formData();
        console.log("body", body);
        // const { username,password, cpassword, email, name, profileimg } = body;
        const username = body.get('username');
        const password = body.get('password');
        const cpassword = body.get('cpassword');
        const email = body.get('email');
        const name = body.get('name');
        const profileimg = body.get('file');
        // const img = profileimg !== null ? profileimg.split(";") : null;
        const blob = profileimg as File;
        const status = 1;
        const role = "user";


        if (blob !== null) {
            const options: BlockBlobUploadOptions = {
                blobHTTPHeaders: { blobContentType: blob.type }
            };

            const sharedKeyCredential = new StorageSharedKeyCredential(storageAccountName, storageAccountKey);
            const blobServiceClient = new BlobServiceClient(`https://${storageAccountName}.blob.core.windows.net`, sharedKeyCredential);
            const containerClient = blobServiceClient.getContainerClient(containerName);
            const blobName = `${name}-image.png`;
            const blockBlobClient = containerClient.getBlockBlobClient(blobName);
            await blockBlobClient.uploadData(await blob.arrayBuffer(), options);
            const imgURL = `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blobName}`;

            models.User.create({ Username: username, Password: password, email: email, status: status, role: role, name: name, path_profile: imgURL });

        } else {
            models.User.create({ Username: username, Password: password, email: email, status: status, role: role, name: name, path_profile: null });
        }

        console.log("username", username, "email", email, "password", password, "name", name, "status", status, "role", role, "profile", profileimg)
        // models.User.create({Username : username, Password : password, email : email, status : status, role : role , name : name, path_profile : profileimg});
        return NextResponse.json({ message: { username, email, password }, status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error in registration", status: 500 });
    }
}
