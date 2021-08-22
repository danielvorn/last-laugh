import React from "react"
import Footer from "./Footer"
import SideBar from "./SideBar"
import Body from "./Body"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 25px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 53px) minmax(auto, 543px);
  grid-template-rows: minmax(auto, 80px) minmax(auto, 54px);
  border-radius: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.16);
  overflow: hidden;
`

function PostContainer(data) {
    const isEven = num => num % 2 === 0
    return <Container>
        <Grid
            style={isEven(data.post.score) ? {backgroundColor: "#e17055"} : {backgroundColor: "#2980b9"}}>
            <SideBar score={ data.post.score}/>
            <Body author={data.post.author} permalink={data.post.permalink} title={data.post.title}/>
            <Footer comments={data.post.num_comments} upvotes={data.post.ups}/>
        </Grid>
    </Container>
}

export default PostContainer