import { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
import { ToastContainer, toast } from "react-toastify";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, { variables: { name, email, text, slug } });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      toast.warn("وارد کردن تمام فیلد ها اجباری است", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
      });
    }
  };

  if (data) {
    toast.success("نظر شما با موفقیت ثبت شدو منتظر تایید می باشد", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
    });
  }
  return (
    <Grid container sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4, py: 1, mt: 5 }}>
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color={"primary"}>
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField label="نام کاربری" variant="outlined" sx={{ width: "100%" }} value={name} onChange={(e) => setName(e.target.value)} />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField label="ایمیل" variant="outlined" sx={{ width: "100%" }} value={email} onChange={(e) => setEmail(e.target.value)} />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال...
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
