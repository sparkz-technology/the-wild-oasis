// import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";
import CreateCabinForm from "./CreateCabinForm";
function AddCabin() {
  //   const [isOpenModel, setIsOpenModel] = useState(false);

  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
      <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
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
