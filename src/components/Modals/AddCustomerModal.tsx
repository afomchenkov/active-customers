import { ReactNode } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

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

type AddCustomerModalProps = {
  actions?: ReactNode;
  body: ReactNode;
  isModalOpen: boolean;
  title: ReactNode;
  onModalClose: () => void;
};

export const AddCustomerModal = ({
  actions,
  body,
  isModalOpen,
  title,
  onModalClose,
}: AddCustomerModalProps): React.JSX.Element => {
  return (
    <Modal
      aria-labelledby="add-customer-modal"
      open={isModalOpen}
      onClose={onModalClose}
    >
      <Card sx={style}>
        <CardContent>
          <Typography
            id="add-customer-modal"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Divider />
        </CardContent>
        <CardContent>{body}</CardContent>
        {actions && <CardActions>{actions}</CardActions>}
      </Card>
    </Modal>
  );
};
