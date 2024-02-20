
import Masonry from 'react-masonry-css';
// interface BoradProps {
//     gridClass: string;
//   }

const imgURLS: string[] = [
    "/giphy.gif",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
];

interface BoradProps {
    gridClass: string;
}


const Borad: React.FC<BoradProps> = ({ gridClass }) => {
    const count = 0;
    const cols_one = [];
    const cols_two = [];
    const cols_three = [];
    const cols_four = [];

    for (let i = 0; i < imgURLS.length; i++) {
        if (cols_one.length <= 3){
            cols_one.push(imgURLS[i]);
        } else if (cols_two.length <= 3) {
            cols_two.push(imgURLS[i]);
        } else if (cols_three.length <= 3) {
            cols_three.push(imgURLS[i]);
        } else if (cols_four.length <= 3) {
            cols_four.push(imgURLS[i]);
        }
    }

    // if (imgURLS.length > 0) {
    //     for (let i = 0; i < imgURLS.length; i++) {
    //         if (i % 4 === 0) {
    //             cols_one.push(imgURLS[i]);
    //             console.log(cols_one);
    //         } else if (i % 4 === 1) {
    //             cols_two.push(imgURLS[i]);
    //             console.log(cols_two);
    //         } else if (i % 4 === 2) {
    //             cols_three.push(imgURLS[i]);
    //             console.log(cols_three);
    //         } else if (i % 4 === 3) {
    //             cols_four.push(imgURLS[i]);
    //             console.log(cols_four);
    //         }
    //     }
    // }

    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className={gridClass}>
                {cols_one.map((url, index) => (
                    <div key={index} className='w-full h-full flex'>
                        <img className="h-auto max-w-full rounded-lg object-cover" src={url} alt="" />
                    </div>
                ))}
            </div>

            <div className={gridClass}>
                {cols_two.map((url, index) => (
                    <div key={index} className='w-full h-full flex'>
                        <img className="h-auto max-w-full rounded-lg object-cover" src={url} alt="" />
                    </div>
                ))}
            </div>
            <div className={gridClass}>
                {cols_three.map((url, index) => (
                    <div key={index} className='w-full h-full flex'>
                        <img className="h-auto max-w-full rounded-lg object-cover" src={url} alt="" />
                    </div>
                ))}
            </div>
            <div className={gridClass}>
                {cols_four.map((url, index) => (
                    <div key={index}>
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

// const Borad: React.FC<BoradProps> = ({ gridClass }) => {
//     return (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div className={gridClass}>
//                 <div className="relative">
//                     <img className="h-auto max-w-full rounded-lg w-full" src="/giphy.gif" alt=""/>
//                     <div className="absolute bottom-7 left-14 transform -translate-x-1/2 -translate-y-1 text-white text-lg bg-black bg-opacity-50 p-1 pt-0 pb-0 rounded text-[12px]">
//                         <h1>#computer</h1>
//                     </div>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
//                 </div>
//             </div>
//             {/* <div className={gridClass}>
//                 <div>
//                     <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
//                 </div>
//             </div>
//             <div className={gridClass}>
//                 <div>
//                     <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
//                 </div>
//             </div>
//             <div className={gridClass}>
//                 <div>
//                     <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
//                 </div> */}
//             {/* </div> */}
//         </div>
//     );
// }

