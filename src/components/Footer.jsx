import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="bg-[light] text-center text-lg-start" style={{backgroundColor:'#FFFFFF', marginTop:'30px'}}>
    <Container className="p-4">
      <Row>
        <Col lg={6} className="mb-4 mb-lg-0">
          <h5 className="text-uppercase">SeCourse.ID</h5>
          <p>
          SeCourse.ID adalah platform bootcamp programming yang menyediakan program pelatihan intensif dalam berbagai bidang pemrograman. Kami menawarkan kesempatan bagi pelajar dan profesional yang ingin meningkatkan keterampilan dalam pengembangan perangkat lunak. Melalui instruktur yang berpengalaman dan kurikulum yang terstruktur, kami menghadirkan pengalaman belajar interaktif dan praktis yang dirancang untuk membekali peserta dengan keterampilan teknis yang relevan dan up-to-date. Dengan fokus pada pembelajaran berbasis proyek, kami memastikan para peserta dapat mengembangkan portofolio yang kuat dan siap untuk memasuki industri teknologi..
          </p>
        </Col>
        <Col lg={3} className="mb-4 mb-lg-0">
          <h5 className="text-uppercase">AYO Gabung</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-dark">Tentang Kami</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Karir</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Pesan</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Review Murid Kita</a>
            </li>
          </ul>
        </Col>
        <Col lg={3} className="mb-4 mb-lg-0">
          <h5 className="text-uppercase">Contact</h5>
          <ul className="list-unstyled">
            <li>
              <p className="text-dark">Address: 123 Street, Tangerang, Indonesia</p>
            </li>
            <li>
              <p className="text-dark">Phone: +162 456 7890</p>
            </li>
            <li>
              <p className="text-dark">Email: admin@secourseid.com</p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    <div className="text-center p-3" style={{ backgroundColor: '#152A46', color:'white' }}>
      © {new Date().getFullYear()} SeCourse.ID: All rights reserved
    </div>
  </footer>
  )
}

export default Footer