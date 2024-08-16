import { useRef } from "react";
import { Modal } from "../Modal";
import { Form } from "./style";

import { Input } from "../Input";

export const ModalAddFood = (props) => {
  const handleSubmit = () => {};

  const formRef = useRef(null);

  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      <Form ref={formRef}>
        <h1>Novo Prato</h1>
        <Input />
        <Input />
        <Input />
        <Input />

        <button>salvar</button>
      </Form>
    </Modal>
  );
};
