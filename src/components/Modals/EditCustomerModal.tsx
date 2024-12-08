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

type EditCustomerModalProps = {
  actions?: ReactNode;
  body: ReactNode;
  isModalOpen: boolean;
  title: ReactNode;
  onModalClose: () => void;
};

export const EditCustomerModal = ({
  actions,
  body,
  isModalOpen,
  title,
  onModalClose,
}: EditCustomerModalProps): React.JSX.Element => {
  return (
    <Modal
      open={isModalOpen}
      onClose={onModalClose}
      aria-labelledby="edit-customer-modal"
    >
      <Card sx={style}>
        <CardContent>
          <Typography
            id="edit-customer-modal"
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
