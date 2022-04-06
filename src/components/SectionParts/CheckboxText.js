import { CheckBoxInnerText } from "../../styles/TenthSection.styles";
import Box from '@mui/material/Box';

import CheckIcon from '@mui/icons-material/Check';

const CheckboxText = ({ children }) => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            paddingTop: '22px'
        }}>
            <Box sx={{
                display: 'inline-block',
                px: '6px',
                pt: '5px',
                borderRadius: '3px',
                backgroundColor: '#eee'
            }}

                component="span">

                <CheckIcon sx={{
                    fontSize: '18px',
                    color: 'tomato',
                    fontWeight: 'bold'
                }}></CheckIcon>
            </Box>
            <CheckBoxInnerText>{children}</CheckBoxInnerText>
        </Box>
    )
}

export default CheckboxText;