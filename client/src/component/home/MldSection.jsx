import React from "react"
import { imageURL } from "../../constant/data"
import { Grid, styled } from "@mui/material"

const Wrapper = styled(Grid)({
    marginTop: '10px',
    justifyContent: 'space-between'
})

const MidSection = () => {
    return (
        <Wrapper lg={12} md={12} sm={12} xs={12} container>
            {
                imageURL.map(image => (
                    <Grid item lg={4} md={4} sm={12} xs={12}>

                        <img src={image} alt =""style={{ width: '100%',height : '300px' }} ></img>

                    </Grid>
                ))
            }
        </Wrapper>
    )

}
export default MidSection; 