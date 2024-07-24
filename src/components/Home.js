import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
     
        <Section
            title = "Treasures"
            description = "Order Online now to get 60% off"
            backgroundImg="imga.webp"
            leftBtnText="Custom Design"
            rightBtnText="Existing styles"

        />
        <Section
            title = "Earrings"
            description = "Order Online now to get 60% off"
            backgroundImg="img2.jpg"
            leftBtnText="Custom Design"
            rightBtnText="Existing styles"
        />
        <Section
            title = "Rings"
            description = "Order Online now to get 60% off"
            backgroundImg="img3.jpg"
            leftBtnText="Custom Design"
            rightBtnText="Existing styles" 
        />
        <Section 
            title = "Chains"
            description = "Order Online now to get 60% off"
            backgroundImg="img4.jpg"
            leftBtnText="Custom Design"
            rightBtnText="Existing styles"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
   
`