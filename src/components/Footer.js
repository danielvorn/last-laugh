import React from "react"
import CommentIcon from "@material-ui/icons/Comment"
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import styled from "styled-components"

const Section = styled.footer`
  display: flex;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  font-size: 14px;
  grid-column: span 2;
  padding: 14px;
  background-color: #2d3436;
`

const ListItem = styled.li`
  color: #dfe6e9;
  display: flex;
  align-items: center;
`

function Footer({comments, upvotes}) {
    return <Section>
        <ListItem><CommentIcon style={{marginRight: "5px"}}/>{comments} Comments</ListItem>
        <ListItem><ThumbUpAltIcon style={{marginRight: "5px"}}/>{upvotes} Upvotes</ListItem>
    </Section>
}

export default Footer