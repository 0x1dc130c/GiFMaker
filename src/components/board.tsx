import { BlobServiceClient } from '@azure/storage-blob';

// const imgURLS: string[] = [
//     "/giphy.gif",
//     "/giphy2.gif",
//     "/giphy3.gif",
//     "/giphy4.gif",
//     "/giphy5.gif",
//     "/giphy6.gif",
//     "/giphy7.gif",
//     "/giphy8.gif",
//     "/giphy9.gif",
//     "/giphy10.gif",
//     "/giphy11.gif",
//     "/giphy12.gif",
//     "/giphy13.gif",
//     "/giphy14.gif",
//     "/giphy15.gif",
//     "/giphy16.gif",
//     "/giphy17.gif",
//     "/giphy18.gif",
//     "/giphy19.gif",
//     "/giphy20.gif",
//     "/giphy21.gif",
//     "/giphy22.gif",
//     "/giphy23.gif",
//     "/giphy24.gif",
// ];
const imgURLS: string[] = [];

async function fetchBlobImages() {
    const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
    if (!connectionString) {
        throw new Error('AZURE_STORAGE_CONNECTION_STRING environment variable is not defined.');
    }

    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    const containerClient = blobServiceClient.getContainerClient('gifstorage');
    const prefix = 'foldergif/'; // กำหนด prefix เป็นชื่อของ folder

    for await (const blob of containerClient.listBlobsFlat({ prefix })) {
        console.log("Blob:", blob.name);
        const imageURL = containerClient.getBlobClient(blob.name).url;
        imgURLS.push(imageURL);
    }
    // for await (const blob of containerClient.listBlobsFlat()) {
    //     const imageURL = containerClient.getBlobClient(blob.name).url;
    //     imgURLS.push(imageURL);
    // }
}

fetchBlobImages().then(() => {
    console.log('Images fetched:', imgURLS);
}).catch((error) => {
    console.error('Error fetching images:', error);
});

interface BoradProps {
    gridClass: string;
}


const Borad: React.FC<BoradProps> = ({ gridClass }) => {
    const count = 0;
    const cols_one = [];
    const cols_two = [];
    const cols_three = [];
    const cols_four = [];
    const cols_five = [];

    for (let i = 0; i < imgURLS.length; i++) {
        if (cols_one.length <= 3){
            cols_one.push(imgURLS[i]);
        } else if (cols_two.length <= 3) {
            cols_two.push(imgURLS[i]);
        } else if (cols_three.length <= 3) {
            cols_three.push(imgURLS[i]);
        } else if (cols_four.length <= 3) {
            cols_four.push(imgURLS[i]);
        } else if (cols_five.length <= 3) {
            cols_five.push(imgURLS[i]);
        }
    }
    console.log('cols_one', cols_one);
    console.log('cols_two', cols_two);
    console.log('cols_three', cols_three);
    console.log('cols_four', cols_four);
    console.log('cols_five', cols_five);
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className={gridClass}>
                {cols_one.map((url, index) => (
                    console.log('col 0', url),
                    <div key={index} className='w-full h-full flex'>
                        <img className="h-auto max-w-full rounded-lg object-cover" src={url} alt="" />
                    </div>
                ))}
            </div>
            <div className={gridClass}>
                {cols_two.map((url, index) => (
                    console.log('col 1', url),
                    <div key={index} className='w-full h-full flex'>
                        <img className="h-auto max-w-full rounded-lg object-cover" src={url} alt="" />
                    </div>
                ))}
            </div>
            <div className={gridClass}>
                {cols_three.map((url, index) => (
                    console.log('col 2', url),
                    <div key={index} className='w-full h-full flex'>
                        <img className="h-auto max-w-full rounded-lg object-cover" src={url} alt="" />
                    </div>
                ))}
            </div>
            <div className={gridClass}>
                {cols_four.map((url, index) => (
                    console.log('col 3', url),
                    <div key={index} className='w-full h-full flex'>
                        <img className="h-auto max-w-full rounded-lg" src={url} alt="" />
                    </div>
                ))}
            </div>
            <div className={gridClass}>
                {cols_five.map((url, index) => (
                    console.log('col 4', url),
                    <div key={index} className='w-full h-full flex'>
                        <img className="h-auto max-w-full rounded-lg" src={url} alt="" />
                    </div>
                ))}
            </div>
            {/* {imgURLS.map((url, index) => (
                    <div key={index} className={gridClass}>
                        <div>
                            <img className="h-auto max-w-full rounded-lg w-full flew" src={url} alt=""/>
                        </div>
                    </div>
            
            ))}; */}
        </div>
        // </Masonry>
    );
};

export default Borad;
