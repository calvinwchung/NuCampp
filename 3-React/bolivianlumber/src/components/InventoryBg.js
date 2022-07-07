import video1 from '../app/assets/video1.MP4'
import video2 from '../app/assets/video2.MP4'
import video3 from '../app/assets/video3.MP4'
import Tajibo from '../app/assets/tajibo.png'
// import Bolivia1 from '../app/assets/bolivia1.JPG';
// import Bolivia2 from '../app/assets/bolivia2.JPG';

// const bgVideo = "https://youtu.be/QuFISgtXLBU"

const InventoryBg = () => {
    return (
        <div className='inventoryBg'>
            <video className='video' src={video1} autoPlay loop muted />
            <video className='video' src={video2} autoPlay loop muted />
            <video className='video' src={video3} autoPlay loop muted />
            {/* <img className='inventoryPic' src={Bolivia1} />
            <img className='inventoryPic' src={Bolivia2} /> */}
        </div>
        
    )
}

export default InventoryBg;