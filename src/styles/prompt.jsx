import styled from '@emotion/styled';
import LoadingButton from '@mui/lab/LoadingButton';



export const PromptContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    `;


export const PromptInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-left: 20px;
    padding-top: 20px;
    
    `;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:82vh;
    `;

export const Image = styled.img`
    width: 150px;
    height: 150px;
    `;

export const ChatBubble = styled.div`
position: relative;
    background-color: #f0f0f0;
    border-radius: 16px;
    padding: 10px 20px;
    max-width: 300px;
    color: #333;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;

    &:after{
        content: '';
    position: absolute;
    bottom: 0;
    left: 100%;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-top-color: #f0f0f0;
    border-bottom: 0;
    margin-left: -29px;
    margin-bottom: -8px;
    transform: rotate(-5deg);
    }
    `;

export const PromptButton = styled(LoadingButton)`
background-color: rgba(0, 0, 0, 0.7); /* Dark grey with transparency */
  color: white; /* Text color */
  border: none; /* No border */
  padding: 8px 14px; /* Padding around the text */
  font-size: 13px; /* Text size */
  cursor: pointer; /* Cursor indicates it's clickable */
  border-radius: 5px; /* Rounded corners */
  backdrop-filter: blur(4px); /* Frosted glass effect */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /* Shadow for 3D effect */
  transition: all 0.3s ease-in-out; /* Smooth transition for hover effect */
  text-transform: none; /* No uppercase */
  width: 100px; /* Fixed width */
&:hover {
    background-color: rgba(0, 0, 0, 0.8); /* Darker grey on hover */
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5); /* Bigger shadow on hover */
  }
  &:disabled {
    background-color: rgba(0, 0, 0, 0.5); /* Dark grey when disabled */
    color: rgba(0, 0, 0, 0.5); /* Light grey text when disabled */
    cursor: not-allowed; /* Not allowed to click */
  }
`;

