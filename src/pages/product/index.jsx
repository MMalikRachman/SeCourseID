import { useEffect } from "react";
import { httpService } from "../../utils/service";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../store/product/action";
import { Card, Container } from "react-bootstrap";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const { entities, loading } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    dispatch(getAll());
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const goToDetail = (prodId) => {
    navigate(`/detail/${prodId}`)
  }
  return (
    <div >
    <div className="hero" style={{backgroundColor:'#152A46', width:'100%', height:'500px'}}>
      <div className="herocontent" style={{display:"flex", height: '450px', justifyContent:'center'}}>
        <div className="left" style={{color:'white', width:'30%', paddingTop:'40px'}}>
          <h1> Tambah Ilmu Bareng SeCourse.ID</h1>
          <p style={{marginTop:'30px'}}> Tingkatkan Ilmu kamu bersama mentor yang berpengalaman di bidangnya di SeCourse</p>
        </div>
        <div className="right">
        <img src="src\assets\image 7.png" alt="" className="right" style={{zIndex:'100',position:"relative", width:'800px', bottom:'57px'} } />
        <div className="segitiga1" style={{width: '20px',
        height: '20px',
        borderLeft: '200px solid transparent',
        borderRight: '110px solid transparent',
        borderBottom: '250px solid #FFCD29 ',/* Change color as needed */
        position:'relative',
        left:'440px',
        bottom:'500px',
        zIndex:'0'
        }}>
          
        </div>
        <div className="segitiga2" style={{width: '20px',
        height: '20px',
        borderLeft: '110px solid transparent',
        borderRight: '240px solid transparent',
        borderBottom: '200px solid #235597 ',/* Change color as needed */
        position:'relative',
        left:'140px',
        bottom:'507px',
        zIndex:'0'
        }}>
          
        </div>
        </div>
        
      
      </div>
    </div>
    <Container style={{marginTop:'30px'}} >
     <h2> Our Course</h2> 
     <Container style={{display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px', justifyContent:'center'}}>
     {loading ? <Loader/> : entities.map((item) => {
        return (
          <Card onClick={() => goToDetail(item.id)} key={item.id} style={{ width: "18rem", cursor: 'pointer' }}>
            <Card.Img variant="top" src="src\assets\Bootcamp.png" />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                Mentor: {item.mentor} <br />
                Bahasa: {item.bahasa}
              </Card.Text>
              <p style={{fontWeight:'bold', color:'green'}}>$ {item.price}</p>
              
            </Card.Body>
          </Card>
        );
      })}
     </Container>
     
    </Container>
    </div>
  );
};

export default ProductPage;
