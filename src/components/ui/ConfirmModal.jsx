import React from "react";
import { Box, Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ModalButton from "./ModalButton";

const ConfirmModal = ({ modalOpen, onModalClose }) => {
  return (
    <Modal open={modalOpen} onClose={onModalClose} sx={{ border: "none" }} >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
          p: 4,
          textAlign: "center",
          border: "none",
        }}
      ><IconButton
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
        }}
        onClick={onModalClose}
      >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <img src="/images/green_circle_password.svg" alt="" />
        </Box>
        <div className="flex justify-center mb-6">
          <img src="/images/password.svg" alt="" />
          <Typography variant="h6" component="h2">
            パスワードをお忘れですか？
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          ご登録済みの電話番号に<br />再設定コードをお送りします
        </Typography>
        <div className="w-fit mx-auto mt-8">
          <ModalButton text="コードを送信" width={"230px"} height={"40px"} fontsize={"16px"} subIcon={"/images/white_send.svg"} />
        </div>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
