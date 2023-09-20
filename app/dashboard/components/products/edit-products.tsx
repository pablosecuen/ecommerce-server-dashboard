import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";

export const EditProducts = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary">
          Agregar Productos
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1"> Editar Producto</ModalHeader>
                <ModalBody>
                  <Input label="Tipo" variant="bordered" />
                  <Input label="Nombre" variant="bordered" />
                  <Input label="Precio" variant="bordered" />
                  <Input type="file" name="fileToUpload" id="fileToUpload" />
                  <Input label="color" variant="bordered" />
                  <Select placeholder="" label="genero" variant="bordered">
                    <SelectItem key="1" value="hombre">
                      hombre
                    </SelectItem>
                    <SelectItem key="2" value="mujer">
                      mujer
                    </SelectItem>
                    <SelectItem key="3" value="unisex">
                      unisex
                    </SelectItem>
                  </Select>
                  <Input label="stock" variant="bordered" type="number" />
                  <Checkbox>En Promocion</Checkbox>
                  <Textarea label="description" variant="bordered" />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Agregar Productos
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
