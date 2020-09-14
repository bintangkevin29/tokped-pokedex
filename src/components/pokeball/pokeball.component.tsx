import React, { useEffect, Fragment, useState } from "react";
import { Modal, Form, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { selectCatch } from "../../redux/catch/catch.selector";
import { selectPokemonByName } from "../../redux/pokemons/pokemons.selector";
import {
  beginCatchMode,
  beginCatching,
  stopCatching,
  stopCatchMode,
} from "../../redux/catch/catch.actions";
import { appendMyPokemonList } from "../../redux/my-pokemons/my-pokemons.action";

import FixedContainer from "../fixed-container";

import "./pokeball.style.scss";

const Pokeball: React.FC = () => {
  const dispatch = useDispatch();

  const catchState = useSelector(selectCatch);

  const history = useHistory();

  const { name } = useParams();

  const currentPokemon = useSelector(selectPokemonByName(name));

  const [modalShow, setModalShow] = useState<boolean>(false);
  const [catchSuccess, setCatchSuccess] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");

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

  const addMyPokemon = (e: React.FormEvent) => {
    if (currentPokemon) {
      e.preventDefault();
      dispatch(
        appendMyPokemonList({
          nickname: nickname,
          name: currentPokemon?.name,
          url: currentPokemon?.url,
        })
      );
      history.push("/my-pokemons");
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
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catchState.isCatching]);

  return (
    <FixedContainer>
      <div
        onClick={initiateCatch}
        className={`pokeball ${catchState.catchReady && "pokeball--hidden"}`}
        data-test="pokeball"
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
      <Modal
        centered
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          dispatchStopCatch();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {catchSuccess === false ? "The Pokèmon got away!" : "You got the Pokèmon!!"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {catchSuccess === false ? (
            "Don't give up, Trainer. You can try again!"
          ) : (
            <Fragment>
              <Form onSubmit={addMyPokemon}>
                <Form.Group>
                  <Form.Label>Give a nickname to your new friend!</Form.Label>
                  <FormControl onChange={(e) => setNickname(e.target.value)} />
                </Form.Group>
                <Form.Group>
                  <Button block type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Fragment>
          )}
        </Modal.Body>
      </Modal>
    </FixedContainer>
  );
};

export default Pokeball;
