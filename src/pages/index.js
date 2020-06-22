import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="June 21, 2020"
          title="Being a Dad"
          excerpt="Sometimes we need to consider that our accomplishments will not outlive us but our children will"
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
