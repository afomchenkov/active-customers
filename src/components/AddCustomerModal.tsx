import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

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

export const AddCustomerModal = ({
  title,
  body,
  actions,
  onModalClose,
  isModalOpen,
}: any) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={onModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
