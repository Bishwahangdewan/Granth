import Box from '@mui/material/Box';

import { TestimonialSubHeading, TestimonialHeader, Quote, TestimonialText, TestimonialSubtext } from '../styles/Testimonials';

const Testimonial = () => {
    return (
        <Box sx={{
            display: 'flex'
        }}>
            <Box sx={{
                width: '55%',
                backgroundColor: '#eee',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Box sx={{
                    background: 'rgba(255,255,255,0.8)',
                    filter: 'blur(60%)',
                    position: 'relative',
                    ml: "200px",
                    mr: "-100px",
                    py: '60px',
                    px: "40px"
                }}>
                    <TestimonialSubHeading>TESTIMONIALS</TestimonialSubHeading>
                    <TestimonialHeader>Their Own Words</TestimonialHeader>
                    <Quote>"</Quote>
                    <TestimonialText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa
                        natus laboriosam beatae
                        eligendi inventore saepe minus, delectus ut, eaque ex, excepturi numquam. Quidem inventore eligendi,
                        ex placeat blanditiis quae.</TestimonialText>

                    <TestimonialSubtext style={{ color: '#384e5c' }}>John Doe</TestimonialSubtext>
                    <TestimonialSubtext>Graphic Designer</TestimonialSubtext>
                </Box>
            </Box>

            <Box sx={{ width: '45%' }}>
                <Box sx={{
                    height: '90vh',
                    backgroundImage: 'url("https://lycka.bold-themes.com/classy/wp-content/uploads/sites/5/2022/02/image_home_02_02.jpg")',
                    backgroundSize: 'cover'
                }}></Box>
            </Box>
        </Box>
    )
}

export default Testimonial;