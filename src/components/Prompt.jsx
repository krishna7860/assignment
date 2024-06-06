import React, { useCallback } from 'react'
import { ChatBubble, Image, ImageContainer, MessageContainer, PromptButton, PromptContainer, PromptInputContainer } from '../styles/prompt';
import { InputElement } from '../styles/custom';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Typography } from '@mui/material';
import sitback from '../assets/sitbackandrelax.gif';


export default function Prompt({
    prompt = "",
    setPrompt = () => { },
    generatePDFContent = () => { },
    loading = false,
    state = ""
}) {

    const handleChange = useCallback((e) => {
        setPrompt(e.target.value);
    }, [setPrompt]);

    return (
        <PromptContainer height={"100%"}>
            <MessageContainer  >

                {loading ? <ImageContainer>
                    <Image src={sitback} alt="Waiting Logo" />
                    <Typography variant='h6' >Please sit back and relax. While we are doing the magic</Typography>
                    <Typography variant='caption'>{state}</Typography>
                </ImageContainer> : <ChatBubble>
                    Please Share, What you want to generate? example: type AI ?
                </ChatBubble>}
            </MessageContainer>
            <PromptInputContainer>
                <InputElement placeholder='type something..' value={prompt} onChange={handleChange} mode={"dark"} />
                <PromptButton disabled={!prompt} loading={loading} onClick={generatePDFContent} startIcon={!loading && <AutoAwesomeIcon />} >{!loading && "Generate"}</PromptButton>
            </PromptInputContainer>
        </PromptContainer>
    )
}
