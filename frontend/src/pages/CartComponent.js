import { useState } from "react";
import { Button, Col, Container, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import { getFirestore } from "../../firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const CartComponent = ({ header = false }) => {
  const {
    list,
    totalPrice,
    deleteProd,
    orderId,
    setOrderId,
    date,
    setDate,
    resetCartList,
  } = useCartContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  let datePurchase = new Date();
  setDate(datePurchase.toLocaleString());
  const placeOrder = () => {
    let newOrder = {
      Buyer: { name: name, email: email, phone: phone },
      items: [...list],
      Date: firebase.firestore.FieldValue.serverTimestamp(),
      total: totalPrice(),
    };
    console.log("newOreder", newOrder);
    const fsDB = getFirestore();
    const orederCollection = fsDB.collection("orders");
    orederCollection.add(newOrder).then((value) => {
      setOrderId(value.id);
    });
  };

  return (
    <>
      {!header && <h1 className="py-4 text-center text-muted">Cart</h1>}
      {list.length > 0 ? (
        <div>
          <Container>
            <Table striped hover className="text-muted">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Title</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  {!header && <th>&nbsp;</th>}
                </tr>
              </thead>
              <tbody>
                {list.map((varietal) => (
                  <tr key={varietal.id}>
                    <td>
                      <img
                        src={varietal.image}
                        alt="img"
                        style={{ width: "82px" }}
                      />
                    </td>
                    <td className="align-middle">{varietal.title}</td>
                    <td className="align-middle">{varietal.count}</td>
                    <td className="align-middle">${varietal.price}</td>
                    {!header && (
                      <td className="align-middle">
                        <button
                          onClick={() => deleteProd(varietal)}
                          className="badge badge-info"
                        >
                          Remove
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-weight-bold h4 mr-5 pr-5">
                  <td colSpan={!header ? 4 : 3} className="text-right">
                    Total
                  </td>
                  <td className="mr-5 pr-5">${totalPrice()}</td>
                </tr>
              </tfoot>
            </Table>
            {!header && (
              <div className="mr-5 pr-5">
                <Form as={Col} className="mx-5 px-5 text-muted">
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      className="font-italic font-weight-lighter"
                      type="text"
                      placeholder="Enter name.."
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      className="font-italic font-weight-lighter"
                      type="email"
                      placeholder="Enter email.."
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Telephone Number</Form.Label>
                    <Form.Control
                      className="font-italic font-weight-lighter"
                      type="tel"
                      placeholder="Enter telephone number.."
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Text className="font-italic text-muted">
                    We'll never share your information with anyone else.
                  </Form.Text>
                </Form>
                <Link to="/PurchaseDone" orderId={orderId} date={date}>
                  <Button
                    variant="info"
                    className="mx-auto my-4 d-block"
                    size="lg"
                    onClick={() => {
                      placeOrder();
                    }}
                  >
                    Place order
                  </Button>
                </Link>
              </div>
            )}
          </Container>
        </div>
      ) : (
        <div>
          <h3 className="d-flex justify-content-center pt-5 text-muted">
            The Cart is empty
          </h3>
          {!header && (
            <p className="d-flex justify-content-center text-muted">
              Return to home to see our products
            </p>
          )}
          {!header && (
            <Link
              to="/"
              className="d-flex justify-content-center text-decoration-none"
            >
              <button className="btn btn-info"> Home </button>
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default CartComponent;