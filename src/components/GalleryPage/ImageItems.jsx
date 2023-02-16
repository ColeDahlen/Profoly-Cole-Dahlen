import './Image.css'
import { useHistory } from 'react-router-dom';
function ImageItems({image}){
    const history = useHistory()
    const handleDetails = () =>{
        history.push(`/images_details/${image.id}`)
    }
    return(
        <div onClick={handleDetails}>
            <img className='pictures rounded' src={image.picture_url} alt={image.picture_name}/>
            <div>
                <div className='name'>{image.picture_name}</div>
            </div>
        </div>
    )
}
export default ImageItems;