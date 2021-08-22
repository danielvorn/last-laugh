import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 270px;
`

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > * + *": {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function Spinner() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
                <CircularProgress/>
        </Container>
    );
}
