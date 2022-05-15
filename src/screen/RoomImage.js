import React ,{useState , useEffect} from 'react'
import "./Imagebox.css";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import ImageUploading from 'react-images-uploading';
import Swal from 'sweetalert2';
import { Col, Container, Row } from 'react-bootstrap';
import { detailsRoom } from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


function RoomImage() {
    const params = useParams();
    const {propId,roomId} = params;
    console.log(propId,roomId)
    const [selectedImages, setSelectedImages] = useState([]);
    const [successUpload, setSuccessUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');
    const dispatch = useDispatch()
    const { id: propertyId} = params;  
    const [images, setImages] =useState([]);
    console.log(propertyId)
    const roomDetails = useSelector((state) => state.roomDetails);
    const { loading, error, room } = roomDetails;
   
    const maxNumber = 15;
    
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      
      setImages(imageList);
    };
    const uploadimages = () =>
    {
          for(var a = 0; a<images.length; a++)
          {
            const fd = new FormData();
            //console.log(images[a])
            fd.append('room-image', images[a]['file']);
          
            //Post Request to Nodejs API Route
            axios.post(`https://tawi-backend.herokuapp.com/api/users/room-upload/?propId=${propId}&roomId=${roomId}`, fd,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                  },
            }
            ).then(res=>
            {
              //Success Message in Sweetalert modal
              Swal.fire({
                title: 'Images hava been uploaded successfully.',
                text: "Thanks",
                type: 'success',            
              });      
              setSuccessUpload(true)

            }).catch(err=>{
                console.log(err)
            });
          }       
    }

    useEffect(()=>{
        dispatch(detailsRoom(propId,roomId));
        if(!error && !loading){
            console.log(room.images[0].location)
        }
        
        
    },[dispatch,successUpload])

  return (
    <div className="App">   
    <h1>Room Images</h1> 
    {loading ? <LoadingBox></LoadingBox>:
    error ? <MessageBox>{error}</MessageBox>:(

<>
    
    <Container>
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI

        <Row className="upload__image-wrapper">
          <div className="mainbtndiv">
            <button className="btn btn-primary"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            
            <button className="btn btn-danger" onClick={onImageRemoveAll}>Remove all images</button>
          </div>
          {imageList.map((image, index) => (
            <Col md={3} key={index} className="image-item mt-5 mb-5 mr-5">
              <img src={image['data_url']} />
              <div className="image-item__btn-wrapper">
                <button className="btn btn-primary" onClick={() => onImageUpdate(index)}>Update</button>
                <button className="btn btn-danger" onClick={() => onImageRemove(index)}>Remove</button>
              </div>
            </Col>
          ))}

        {room.images.length !== 0 && room.images.map((image, index) => (
            <Col md={3} key={index} className="image-item mt-5 mb-5 mr-5">
              <img src={image.location} />
              <div className="image-item__btn-wrapper">
                {/* <button className="btn btn-primary" onClick={() => onImageUpdate(index)}>Update</button> */}
                <button className="btn btn-danger" onClick={() => onImageRemove(index)}>Delete</button>
              </div>
            </Col>
          ))}
        
        </Row>
      )}
    </ImageUploading>
    </Container>
  <center>  <button className="btn btn-primary" onClick={() => uploadimages()}>Submit Images</button></center>
  </>
   )}
  </div>
  )
}

export default RoomImage