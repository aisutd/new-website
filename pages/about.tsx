import Head from 'next/head';
import { Container, Typography, Box } from '@mui/material';
import { maxWidth } from '@mui/system';

/**
 * A page showing off the history of the organization and how far we've come.
 */
const spacing = 10;

const storyText = [
  ["Jeff Bezos, the founder and executive chairman of Amazon, stated in May of 2016 that society is on the cusp of entering the golden age of artificial intelligence (AI). That, over the next two decades, human society and AI will become intertwined in a way that would seem like science fiction today. That modern AI tools, such as Alexa, IBM Watson, and Google TensorFlow, only scratch the surface of what's possible.", false],
  ["A month after Mr. Bezos' statement, the Artificial Intelligence Society (AIS) was born. In fact, our organization began under the general fascination of the impact that AI has already made on the world. Whether that be through Netflix's movie recommendations or Facebook's facial recognition software, it is incredible how ubiquitous AI has become in our daily lives. But as of today, many of the fascinating aspects of AI are largely unknown to the general public.", false],
  ["We want to change that.", true],
  ["Since 2019, AIS has hosted at least 9 workshops, 6 talks, and 3 iterations of HackAI, a full day of learning about the field of AI with over 400 participants. Regardless of age, major, or occupation, we believe that AI is for everyone, as it has become more common in much of our everyday activities, whether it's YouTube recommendations or facial recognition. At AIS, we hope to delve into the nuts and bolts of artificial intelligence, as well as showcasing its massive potential.", false],
];

export default function AboutPage() {

  return (
    <div>
      <Head>
        <title>About &ndash; AIS</title>
        <meta
          name="description"
          content="A brief history of the Artficial Intelligence Society at UTD and how we've grown over the years."
        />
      </Head>
      <main>
        <Box marginTop={spacing} sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Box textAlign="center" sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: 'url("top.png")',
            backgroundSize: "cover",
            width: "1440px",
            height: "350px"
          }}>
            <Box>
              <Typography marginBottom="1rem" color="white" textTransform="uppercase" 
                          fontFamily="Avenir" fontSize="2rem" fontWeight="800" >
                About Us
              </Typography>
              <Typography color="white" fontFamily="Vollkorn" fontSize="1.3rem" >
                A brief history of the Artficial Intelligence Society at UTD and how we&apos;ve grown over the years.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Container sx={{ marginTop: "3rem"}}>
          <Box marginBottom={5}>
            <Box>
              <Typography fontSize={40} fontFamily='Bentham' marginBottom={4}  variant='h2'>
                Our story
              </Typography>
              <svg width="398" height="3" viewBox="0 0 398 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.5" y1="1.5" x2="396.5" y2="1.5" stroke="url(#paint0_linear_263_1158)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                <linearGradient id="paint0_linear_263_1158" x1="0" y1="3" x2="398" y2="3" gradientUnits="userSpaceOnUse">
                <stop stopColor="#24314D"/>
                <stop offset="1" stopColor="#24314D" stopOpacity="0"/>
                </linearGradient>
                </defs>
              </svg>
            </Box>
            <Box marginTop={spacing}>
              {storyText.map((story, key) => {
                return (
                story[1] ? 
                <Typography color="#4F4F4F" fontWeight={800} marginBottom={5} key={key} fontSize={24} fontFamily='Vollkorn'>
                  {story[0]}
                </Typography> : 
                <Typography color="#4F4F4F" marginBottom={5} key={key} fontSize={24} fontFamily='Vollkorn'>
                {story[0]}
              </Typography>);
              })}
            </Box>
          </Box>
          <Box marginBottom={10} sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <Box>
              <Box marginBottom={5}>
                <Typography fontFamily="Bentham" fontSize={40}>Our Founder</Typography>
              </Box>
              <Box sx={{
                width: "15rem",
                border: "2px solid black",
                borderRadius: "5px",
              }}>
                <img src="images/founder.jpeg"></img>
              </Box>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Typography fontWeight={800} fontFamily="Avenir" color="#0B132A" fontSize={24}>Brian Hoang</Typography>
                <Typography fontFamily="Avenir" color="#666666" fontSize={24}>- Founder (SE &apos;18) -</Typography>
              </Box>
            </Box>
            <Box maxWidth={"60%"}>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.0833 52.5V29.1667H26.6L32.4333 17.5H15.6917L8.75 31.3833V52.5M26.25 46.6667H14.5833V32.7833L19.3083 23.3333H22.9833L17.15 35H26.25M61.25 52.5V29.1667H55.7667L61.6 17.5H44.8583L37.9167 31.3833V52.5M55.4167 46.6667H43.75V32.7833L48.475 23.3333H52.15L46.3167 35H55.4167V46.6667Z" fill="#0B132A" fillOpacity="0.8"/>
              </svg>
              <Typography fontFamily="Vollkorn" align='center' fontSize={24}>
              “A month after Mr. Bezos&apos; statement, the Artificial Intelligence Society (AIS) was born. In fact, our organization began under the general fascination of the impact that AI has already made on the world. Whether that be through Netflix&apos;s movie recommendations or Facebook&apos;s facial recognition software, it is incredible how ubiquitous AI has become in our daily lives. But as of today, many of the fascinating aspects of AI are largely unknown to the general public.”
              </Typography>
            </Box>
          </Box>
        </Container>
      </main>
    </div>
  );
}
