import { useEffect, useState } from "react";
import { Food } from "../../components/Food";
import { Header } from "../../components/Header";
import { ModalAddFood } from "../../components/ModalAddFood";
import api from "../../services/api";
import { FoodsContainer } from "./styles";

import { ModalEditFood } from "../../components/ModalEditFood";

export const Dashboard = () => {
  const [foods, setFoods] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const getFoods = async () => {
    const response = await api.get("foods");
    console.log(response.data);
    setFoods(response.data);
  };

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  useEffect(() => {
    getFoods();
  }, []);

  const handleAddFood = () => {};

  return (
    <>
      <Header openModal={toggleModal} />

      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />

      <ModalEditFood />

      <FoodsContainer>
        {foods && foods.map((food) => <Food food={food} />)}
      </FoodsContainer>
    </>
  );
};
