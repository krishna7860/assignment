import React from 'react'
import { AppBarStyled, Logo, LogoContainer } from '../styles/appbar'
import { Typography } from '@mui/material'

export default function Appbar() {
    return (
        <AppBarStyled >
            <LogoContainer>
                <Logo src="https://assets-global.website-files.com/65a0dbe5f0b1e9091b635b21/65a0dbe5f0b1e9091b635b95_chima%20logo.png" alt="OpenAI Logo" />
                <Typography color={"black"} variant="h6" component="div">
                    Chima's AI Agent
                </Typography>
            </LogoContainer>
            <Typography color={"black"} variant="subtitle2" component="div">
                Powered by OpenAI
            </Typography>
        </AppBarStyled>
    )
}
