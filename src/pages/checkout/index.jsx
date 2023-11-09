import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { entities } = useSelector((state) => state.cart);

  const countTotalPrice = (data) => {
    const result = data.reduce((prevValue, currValue) => {
        return prevValue + parseInt(currValue.price, 10)
    }, 0)

    return result;
  }
  return (
    <div  className="shadow p-3 mb-5 bg-white" style={{margin:'50px', padding:'30px', borderRadius:'30px'}}>

    
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>Checkout Page</h1>
          <Table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              {entities.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>$ {item.price}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>$ {countTotalPrice(entities)}.00</td>
                </tr>
            </tfoot>
          </Table>

          <h5>Metode pembayaran</h5>
          <p>Transfer Ke BCA YANTO : 82941421921 </p>
          <Button variant="success" onClick={()=>alert('Pesanan Telah Diterima dan Akan di Proses') }>Konfirmasi Pembayaran</Button>{' '}
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default CheckoutPage;
