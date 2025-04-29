import React from "react"
import ProfileProduct from "../ProfileProduct"
import { ContainerGrid } from "./styles"

const ProfileProductList = () => {
  return (
    <ContainerGrid className="container">
      <ul>
        <ProfileProduct />
        <ProfileProduct />
        <ProfileProduct />
        <ProfileProduct />
        <ProfileProduct />
        <ProfileProduct />
      </ul>
    </ContainerGrid>
  )
}

export default ProfileProductList
