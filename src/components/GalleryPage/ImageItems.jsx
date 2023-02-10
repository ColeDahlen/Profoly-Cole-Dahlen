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
{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
export default ImageItems;