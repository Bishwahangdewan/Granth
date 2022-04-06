import { styled } from '@mui/material/styles';

export const ShowcaseContainer = styled('div')({
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '5vh',
})


export const ShowcaseInner = styled('div')({
    width: '95%',
    display: "flex"
})


export const SubHeading = styled('span')({
    display: 'block',
    textTransform: 'uppercase',
    fontFamily: 'Inter',
    fontSize: '20px',
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

export const Heading = styled('span')({
    fontFamily: 'Playfair Display',
    fontSize: '13vh',
    color: '#B3864D',
    lineHeight: 1
})

export const PrimaryButton = styled('button')({
    backgroundColor: '#384e5c',
    color: 'white',
    padding: '15px 30px',
    borderRadius: '30px',
    border: '1px solid #384e5c',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center'
})

export const SecondaryButton = styled('button')({
    border: '1px solid #384e5c',
    backgroundColor: '#fff',
    color: '#384e5c',
    padding: '15px 30px',
    borderRadius: '30px',
    fontSize: '16px',
    marginLeft: '3%',
    display: 'flex',
    alignItems: 'center'
})
