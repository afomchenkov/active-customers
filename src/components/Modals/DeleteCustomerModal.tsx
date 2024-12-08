import { ReactNode } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  bgcolor: "background.paper",
  border: "1px solid #e5e5e5",
  boxShadow: 24,
  p: 3,
};

type DeleteCustomerModalProps = {
  actions: ReactNode;
  isModalOpen: boolean;
  title: ReactNode;
  onModalClose: () => void;
};

export const DeleteCustomerModal = ({
  actions,
  isModalOpen,
  title,
  onModalClose,
}: DeleteCustomerModalProps): React.JSX.Element => {
  return (
    <Modal
      aria-labelledby="delete-customer-modal"
      open={isModalOpen}
      onClose={onModalClose}
    >
      <Card sx={style}>
        <CardContent>
          <Typography
            id="delete-customer-modal"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Divider />
        </CardContent>
        {actions && <CardActions>{actions}</CardActions>}
      </Card>
    </Modal>
  );
};
