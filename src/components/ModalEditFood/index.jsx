import { Modal } from "../Modal";
import { Form } from "./style";

import { Input } from "../Input";

export const ModalEditFood = (props) => {
  const handleSubmit = () => {};

  return (
    <Modal isOpen={props.isOpen}>
      <Form>
        <h1>Edit Prato</h1>

        <Input />

        <button>salvar</button>
      </Form>
    </Modal>
  );
};
