import { Box, Typography, useMediaQuery } from "@mui/material";

const sponsorDir = "sponsors"
const sponsersLogos = [ ["AWS_logo_RGB.svg", "mavs-logo.png", "RISE1.png"],
                        ["Jasper.svg", "richardson-iq-logo.png", "geico.svg"], 
                        ["respell.svg", "TT.svg",  "Blackstone.png" ],
                        ["JSOM.svg", "CAIML.svg", "re-vvive-logo.png"] ]
const sponsorLinks =    [
                            "https://aws.amazon.com/machine-learning/",
                            "https://www.mavs.com/",
                            "https://jindal.utdallas.edu/centers-of-excellence/retail-innovation-strategy-excellence/",
                            "https://www.jasper.ai/",
                            "https://richardsoniq.com",
                            "https://careers.geico.com/us/en/c/information-technology-jobs",
                            "https://respell.ai/",
                            "https://techtitans.org/",
                            "https://innovation.utdallas.edu/programs/blackstone-launchpad/",
                            "https://jindal.utdallas.edu/",
                            "https://cs.utdallas.edu/caiml/",
                            "https://re-vive.com/",
                        ]
const sponsorPaths = sponsersLogos.map((row) => row.map((path) => sponsorDir + '/' + path))

const fontSize =  {
    title: "3rem",
    subHeading: "1.2rem",
}

function displaySponsors() {
    const mobile = useMediaQuery('(max-width:1023px)');

    return (
        sponsorPaths.map((row, rowIndex) => 
            <Box key={rowIndex}
            sx={ mobile ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt:2
            } : {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                pt:2
            }}>
                {row.map( (path, colIndex) => 
                    <img
                        key={colIndex}
                        src={path}
                        onClick={() => window.open(sponsorLinks[rowIndex*3 + colIndex], "_blank")}
                        className="h-[20vh] w-[20vw] object-contain [cursor:pointer]"
                    />
                )}
            </Box>
        )
    );
}

function Partners() {
    return (
        <Box marginY="3rem"  className="mb-20" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Box color="#1A2025" sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <div className="text-ais-navy text-3xl font-bold mb-6 mt-8">2022 Sponsors</div>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                width: "70%"
            }}>
                {displaySponsors()}
            </Box>
        </Box>
    );
}

export default Partners;