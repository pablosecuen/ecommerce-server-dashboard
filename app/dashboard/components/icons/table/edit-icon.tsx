interface Props {
  size?: number;
  fill?: string;
  width?: number;
  height?: number;
}

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

export const EditIcon = ({ fill, size, height, width, ...props }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSvgClick = () => {
    onOpen(); // Open the modal
    console.log("onOpen");
  };

  return (
    <>
      <Button onPress={onOpen}>
        Editar
        <svg
          onClick={handleSvgClick}
          width={size || width || 24}
          height={size || height || 24}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
            stroke={fill}
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
            stroke={fill}
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 18.3333H17.5"
            stroke={fill}
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"> Agregar Productos</ModalHeader>
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
  );
};
