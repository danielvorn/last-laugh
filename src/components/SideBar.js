import React from "react"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import styled from "styled-components"

const Aside = styled.aside`
  color: #dfe6e9;
  grid-row: span 2;
  padding: 14px 14px 0 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #636e72;
`

const Score = styled.aside`
  color: #dfe6e9;

`

function SideBar({score}) {
    const abbreviateScore = number => {
        if (number === null || number === 0) return "N/A"

        const appendDollarAcronym = (num) => {
            const numCommaSplit = num.split(",")
            return numCommaSplit[0] + "." + numCommaSplit[1]?.substr(0, 1)
        }

        const newNumber = appendDollarAcronym(number.toLocaleString())
        const numLength = number?.toString().length

        if (numLength > 12) return `${newNumber}t`
        if (numLength > 9)  return `${newNumber}b`
        if (numLength > 6)  return `${newNumber}m`
        if (numLength > 3)  return `${newNumber}k`

        return number
    }

    return <Aside>
        <ArrowUpwardIcon/>
        <Score>{abbreviateScore(score)}</Score>
        <ArrowDownwardIcon/>
    </Aside>
}

export default SideBar