
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
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"


];

interface BoradProps {
    gridClass: string;
}

const Borad: React.FC<BoradProps> = ({ gridClass }) => {
    return (
        // <Masonry
        //     breakpointCols={{
        //         default: 4,
        //         1100: 3,
        //         700: 2,
        //         500: 1
        //     }}
        //     className="my-masonry-grid"
        //     columnClassName="my-masonry-grid_column"
        // >
        <div  className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-auto">
            {imgURLS.map((url, index) => (
                <div key={index} className={gridClass}>
                    <img className="h-auto max-w-full rounded-lg w-full flew" src={url} alt=""/>
                </div>
            ))}
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

