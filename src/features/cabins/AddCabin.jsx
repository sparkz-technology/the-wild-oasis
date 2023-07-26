// import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
function AddCabin() {
  //   const [isOpenModel, setIsOpenModel] = useState(false);

  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
    // <div>
    //   <Button onClick={() => setIsOpenModel((show) => !show)}>
    //     Add new cabin
    //   </Button>
    //   {isOpenModel && (
    //     <Modal onClose={() => setIsOpenModel(false)}>
    //       <CreateCabinForm onCloseModel={() => setIsOpenModel(false)} />
    //     </Modal>
    //   )}
    // </div>
  );
}

export default AddCabin;
