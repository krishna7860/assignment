export function formatPrompt(prompt, options = {}) {
    // Default options
    const defaults = {
        includeImages: true,
        includeStyles: true,
        formatAsPDF: true,
        pages: 4,
        includeBulletPoints: true,
    };

    // Merge default options with user-provided options
    const settings = { ...defaults, ...options };

    // Construct the instruction based on the settings
    let instruction = `Create a raw HTML document with inline CSS that formats the content like a PDF file. of ${settings.pages} pages. each page should have a image, each page should have a heading, subheading, and paragraph.`;
    if (settings.formatAsPDF) {
        instruction += ` Each section of content should be styled as a separate page.`;
    }
    if (settings.includeBulletPoints) {
        instruction += ` Include bullet points for lists and sublists. Bullet points should be used for lists and sublists to make the content more readable.`;
    }
    if (settings.includeImages) {
        instruction += `Include Image Tags where you want to add the images. ALT text should be provided for each image. ALT text should be descriptive and concise. which can be later used to generate images from dalle. add Number Increment ID(example: 1,2,3) to each image tag for reference.`;
    }
    if (settings.includeStyles) {
        instruction += ` The HTML should have clear, readable formatting with styles directly in the tags to simulate page breaks and PDF aesthetics.`;
    }


    // Return the final formatted prompt
    return `${instruction} Specific topic: '${prompt}'.`;
}

export function extractImageMeta(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const images = doc.querySelectorAll('img');
    const imageMeta = Array.from(images).map(img => ({
        id: img.id,
        alt: img.alt
    }));
    return imageMeta;
}


export function updateImageURLs(htmlString, dalleResponses) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const images = doc.querySelectorAll('img');

    images.forEach((img, index) => {
        if (dalleResponses[index] && dalleResponses[index].data[0]) {
            img.src = `data:image/png;base64, ${dalleResponses[index].data[0].b64_json}`;
        }
    });

    const serializer = new XMLSerializer();
    const updatedHTMLString = serializer.serializeToString(doc);

    return updatedHTMLString;
}