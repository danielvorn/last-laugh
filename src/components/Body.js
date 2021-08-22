import React from "react"
import styled from "styled-components"

const Header = styled.header`
  grid-column: span 1;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 24px 24px 0 24px;
  position: relative;
`

const Title = styled.li`
  font-family: Work Sans, serif;
  margin-top: 8px;
  list-style-type: none;
  font-weight: 500;
  text-align: left;
  font-size: 18px;
`

const Link = styled.a`
  color: #2d3436;
  text-decoration: none;
`

const Author = styled.li`
  font-family: Work Sans, serif;
  font-weight: 300;
  text-align: left;
  color: #daddde;
  list-style-type: none;
  line-height: 16px;
  font-size: 15px;
`

function Body({author, permalink, title}) {
    return <Header>
        <div>
            <Author>Posted by u/{author}</Author>
            <Title><Link
                href={"https://www.reddit.com" + permalink}>{title}</Link>
            </Title>
        </div>
    </Header>
}

export default Body