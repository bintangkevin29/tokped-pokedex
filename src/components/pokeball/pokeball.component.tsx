import React, { useEffect, Fragment, useState } from "react";

import "./pokeball.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCatch } from "../../redux/catch/catch.selector";
import {
  beginCatchMode,
  beginCatching,
  stopCatching,
  stopCatchMode,
} from "../../redux/catch/catch.actions";
import { Modal, Form, FormControl, Button } from "react-bootstrap";

const Pokeball: React.FC = () => {
  const dispatch = useDispatch();

  const catchState = useSelector(selectCatch);

  const [modalShow, setModalShow] = useState<boolean>(true);
  const [catchSuccess, setCatchSuccess] = useState<boolean>(true);

  const dispatchStartCatch = () => {
    dispatch(beginCatchMode());
    dispatch(beginCatching());
  };

  const dispatchStopCatch = () => {
    dispatch(stopCatchMode());
    dispatch(stopCatching());
  };

  const initiateCatch = () => {
    if (!catchState.catchReady) {
      dispatchStartCatch();
    }
  };

  useEffect(() => {
    if (catchState.isCatching) {
      setTimeout(() => {
        const catchRating = Math.floor(Math.random() * 101);
        if (catchRating < 50) {
          dispatchStopCatch();
          setModalShow(true);
        } else {
          dispatch(stopCatching());
          setCatchSuccess(true);
          setModalShow(true);
        }
      }, 3000);
    }
  }, [catchState.isCatching]);

  return (
    <Fragment>
      <div
        onClick={initiateCatch}
        className={`pokeball ${catchState.catchReady && "pokeball--hidden"}`}
      >
        <div className="pokeball__imageContainer">
          <img
            className="pokeball__image"
            alt=""
            src={require("../../assets/images/pokeball.svg")}
          />
          <div className={`pokeball__catch ${catchState.catchReady && "pokeball__catch--hidden"}`}>
            <div className="pokeball__catchText">Catch!</div>
          </div>
        </div>
      </div>
      <Modal centered show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {catchSuccess === false ? "The Pokèmon got away!" : "You got the Pokèmon!!"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {catchSuccess === false ? (
            "The Pokèmon got away!"
          ) : (
            <Fragment>
              <Form>
                <Form.Group>
                  <Form.Label>Give a nickname to your new friend!</Form.Label>
                  <FormControl />
                </Form.Group>
                <Form.Group>
                  <Button block type="submit">Submit</Button>
                </Form.Group>
              </Form>
            </Fragment>
          )}
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default Pokeball;
