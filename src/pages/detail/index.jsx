import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../store/product/action";
import { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { addItem } from "../../store/cart/slice";
import { useNavigate } from "react-router-dom";


const DetailPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log('id product', id)
    const dispatch = useDispatch();
    const {entity} = useSelector((state) => state.product);
    console.log('entity', entity)

    const fetchDetailProduct = async (productId) => {
        await dispatch(getDetail(productId))
    }

    useEffect(() => {
        fetchDetailProduct(id)
    }, [])
    const addToCart = (product) => {
        dispatch(addItem(product))
        alert('Item has been added to the cart');
        
    }
   
    return (
        <div className="wrapper">

        <div className="hero" style={{backgroundColor:'#152A46', width:'100%', height:'400px'}}>
            <div className="herocontent" style={{display:"flex", justifyContent:"center"}}>
                <div className="left" style={{color:"white", width:'60%', paddingTop:'50px'}}>
                    <h1 >{entity.name} </h1>
                    <h3>Getting Started with {entity.bahasa}</h3>
                    <></>
                    <p style={{margin:'0', marginTop:'40px'}}> Mentor </p>
                    <h5 style={{marginTop:'5px'}}> {entity.mentor}</h5>
                    <p>{entity.job}</p>
                </div>
                <div className="right" >
                <div className="segitiga1" style={{width: '20px',
        height: '20px',
        borderLeft: '200px solid transparent',
        borderRight: '110px solid transparent',
        borderBottom: '250px solid #FFCD29 ',/* Change color as needed */
        position:'relative',
        right:'200px',
        bottom:'10px',
        zIndex:'0'
        }}>
          
        </div>
        <div className="segitiga2" style={{width: '20px',
        height: '20px',
        borderLeft: '110px solid transparent',
        borderRight: '240px solid transparent',
        borderBottom: '200px solid #235597 ',/* Change color as needed */
        position:'relative',
        left:'10px',
        bottom:'107px',
        zIndex:'0'
        }}>
          
        </div>

        <div className="segitiga3" style={{width: '20px',
        height: '20px',
        borderLeft: '100px solid transparent',
        borderRight: '110px solid transparent',
        borderBottom: '110px solid #235597 ',/* Change color as needed */
        position:'relative',
        left:'40px',
        bottom:'447px',
        zIndex:'0'
        }}>
          
        </div>
                </div>
            </div>
        </div>
        <Container style={{paddingTop: '30px', display:'flex'}}>
           
            <div className="buy" style={{ width:'30%', textAlign:'center'}}>
                <div className="shadow p-3 mb-5 bg-white" style={{borderRadius:'20px', backgroundColor:'white',padding:'30px' , borderRadius:'30px'}}>
                <h5> Beli Kursus</h5>
                <p>{entity.name}</p>
                <h3 style={{color:'green'}}>$ {entity.price}</h3>
                <Button variant="warning" onClick={() => addToCart(entity)} style={{marginTop:'10px'}}>+ Keranjang </Button>{' '}
                </div>
                </div>
            <div className="detai" style={{ width:'70%', marginLeft:'20px'}}>
                <div className="shadow mb-3 bg-white" style={{backgroundColor:'white',padding:'40px', borderRadius:'20px'}}>
                    <h3> Ayo Pelajari {entity.bahasa} bersama SeCourse.ID </h3>
                    <p style={{margin:'0', marginTop:'30px'}} >Dimentori Oleh </p>
                    <h5 >{entity.mentor} </h5>
                    <br />
                    <h6> Deskripsi Course</h6>
                    <p>{entity.description}</p>

                </div>

                <div className="shadow p-[30px] mb-5 bg-white" style={{padding:'30px',borderRadius:'20px', backgroundColor:'white'}}>
                    <h3>Manfaat</h3>
                    <ul>
                        <li> Sertifikat </li>
                       <li>Portofolio </li>
                       <li>Kesempatan Magang </li>
                       <li>Job Connector </li>

                    </ul>
                </div>
            </div>

        </Container>
      </div>
    );
}

export default DetailPage;






