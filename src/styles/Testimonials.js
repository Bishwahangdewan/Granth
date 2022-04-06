import { styled } from '@mui/material/styles';

export const TestimonialSubHeading = styled('span')({
    display: 'block',
    textTransform: 'uppercase',
    fontFamily: 'Inter',
    fontSize: '16px',
    paddingBottom: '3%',
    position: 'relative',
    paddingLeft: '9%',


    '&::before': {
        content: '""',
        position: 'absolute',
        top: '12px',
        left: '-1px',
        width: '50px',
        height: '1px',
        backgroundColor: 'black'
    }
})

export const TestimonialHeader = styled('h2')({
    fontFamily: 'Playfair Display',
    fontSize: '60px',
    color: '#B3864D',
    fontWeight: '100',
})

export const Quote = styled('span')({
    fontSize: '80px',
    fontFamily: 'BIZ UDPMincho',
    display: 'inline-block',
    paddingTop: '20px',
    color: '#384e5c'
})

export const TestimonialText = styled('p')({
    marginTop: '-30px',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontWeight: '100',
    lineHeight: '1.6',
    color: '#384e5c'
})

export const TestimonialSubtext = styled('span')({
    display: 'block',
    paddingTop: '20px',
    fontFamily: 'Inter',
    fontSize: '14px'
})