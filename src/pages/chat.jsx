import React from 'react';
import Appbar from '../components/Appbar';
import { Box, Divider, Grid } from '@mui/material';
import { Item } from '../styles/common';
import Prompt from '../components/Prompt';
import { extractImageMeta, formatPrompt, updateImageURLs } from '../utils/helper';


export default function Chat({
    openai = null
}) {

    const [prompt, setPrompt] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [generatedContent, setGeneratedContent] = React.useState(null);
    const [generatedImages, setGeneratedImages] = React.useState([]);
    const [finalHTML, setFinalHTML] = React.useState();
    const [state, setState] = React.useState('');
    const [renderPDF, setRenderPDF] = React.useState(false);
    const [pages, setPages] = React.useState([]);


    async function generatePDFContent() {


        setState('Preparing PDF Content...');
        setLoading(true);
        if (openai !== null) {
            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: formatPrompt(prompt) }],
                model: "gpt-4",
            });

            console.log(completion, "completion")
            setGeneratedContent(completion.choices[0].message.content);
            generateImagesUsingDalle(completion.choices[0].message.content);

        }
    }

    async function generateImagesUsingDalle(content) {
        setState('Generating Images...');
        const images = extractImageMeta(content);

        const imagePromises = [];

        images.forEach(image => {
            // Call DALL-E API to generate images
            console.log(`Generating image for ${image.alt}`);
            const response = openai.images.generate({
                model: "dall-e-2",
                prompt: image.alt,
                n: 1,
                size: "512x512",
                response_format: "b64_json"
            });

            imagePromises.push(response);
        });

        const generatedImages = await Promise.all(imagePromises);
        console.log(generatedImages, "generatedImages")
        setState('Updating Image URLs...');
        setGeneratedImages(generatedImages);
        const updatedHTMLString = updateImageURLs(content, generatedImages);
        setFinalHTML(updatedHTMLString);


        setState('Finalizing PDF Content...');
        console.log(updatedHTMLString, "updatedHTMLString")
        setRenderPDF(true);
        setLoading(false);
    }


    return (
        <div>
            <Appbar />
            <Grid marginTop={"52px"} container spacing={2}>
                <Grid height={"92vh"} xs={4}>
                    <Item>
                        <Prompt state={state} loading={loading} generatePDFContent={generatePDFContent} prompt={prompt} setPrompt={setPrompt} />
                    </Item>
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Grid height={"92vh"} xs={7}>
                    <Item id="paper">
                        {renderPDF ?
                            <Box id="wrapper" sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }} >
                                <div style={{
                                    transform: "scale(0.7)",
                                    overflow: "scroll",
                                    height: "123vh",
                                    marginTop: "-9rem"
                                }} id="pdf_area" dangerouslySetInnerHTML={{ __html: finalHTML }}>

                                </div>
                            </Box> : null}
                    </Item>
                </Grid>
            </Grid>
        </div >
    )
}
