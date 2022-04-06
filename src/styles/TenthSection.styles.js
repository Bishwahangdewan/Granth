import { styled } from '@mui/material/styles';

export const ClassSubHeading = styled('span')({
    fontFamily: 'Inter',
    fontSize: '20px',
    marginLeft: '15%',

    '&::before': {
        content: '""',
        position: 'absolute',
        left: '13%',
        height: '1px',
        width: '100px',
        backgroundColor: '#555',
        marginTop: '10px'
    }
})

export const ClassText = styled('p')({
    fontFamily: 'Castoro',
    fontStyle: 'italic',
    paddingTop: '22px',
    fontSize: '18px'
})

export const CheckBoxInnerText = styled('p')({
    fontFamily: 'Jacques Francois',
    fontSize: '16px',
    paddingLeft: '10px'
})

export const ClassButton = styled('button')({
    border: '1px solid #555',
    backgroundColor: '#fff',
    color: '#FFC812',
    padding: '15px 30px',
    borderRadius: '30px',
    fontSize: '16px',
    marginLeft: '0',
    marginTop: '40px',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    cursor: 'pointer'
})