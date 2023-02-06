import './Image.css';
import { useHistory } from 'react-router-dom';
function ImageItems({image}){
    const history = useHistory()
    const handleDetails = () =>{
        history.push(`/images_details/${image.id}`)
    }
    return(
        <div onClick={handleDetails}>
            <img className='pictures' src={image.picture_url} alt={image.picture_name}/>
            <div>{image.picture_name}</div>
            <div>{image.picture_description}</div>
        </div>
    )
}
export default ImageItems;