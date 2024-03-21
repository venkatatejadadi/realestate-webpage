import * as React from "react";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Box, Grid, Paper, Tab, Tabs, TextField, colors } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PortraitRoundedIcon from "@mui/icons-material/PortraitRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { styled } from "@mui/material/styles";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import StarIcon from "@mui/icons-material/Star";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import TuneIcon from "@mui/icons-material/Tune";
import PageviewIcon from "@mui/icons-material/Pageview";

export default function Home() {
    const [value, setValue] = React.useState("one");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={1.5}>
                    <Button variant="text">
                        <HomeRoundedIcon style={{ color: "red" }} />
                        Homez
                    </Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="text">
                        Ere <ArrowDropDownIcon />{" "}
                    </Button>
                </Grid>
                <Grid item xs={1.5}>
                    <Button variant="text">
                        Listings <ArrowDropDownIcon />{" "}
                    </Button>
                </Grid>
                <Grid item xs={1.5}>
                    {" "}
                    <Button variant="text">
                        Members <ArrowDropDownIcon />{" "}
                    </Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="text">
                        Blog <ArrowDropDownIcon />{" "}
                    </Button>
                </Grid>
                <Grid item xs={1.5}>
                    <Button variant="text">
                        Pages <ArrowDropDownIcon />{" "}
                    </Button>
                </Grid>
                <Grid item xs={1.5}>
                    <Button variant="text">
                        {" "}
                        <AccountCircleIcon /> Login/Register
                    </Button>
                </Grid>
                <Grid item xs={1.5}>
                    {" "}
                    <Button variant="outlined">
                        Add Property <ArrowOutwardIcon />{" "}
                    </Button>
                </Grid>{" "}
                <Grid item xs={1}>
                    <DragHandleIcon />
                </Grid>
            </Grid>
            <div
                style={{
                    backgroundImage: `url(https://aerainfra.com/wp-content/uploads/2022/09/house-banner.jpg)`,
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                }}
            >
                <h1>Easy way to Find a </h1>
                <h1> perfect Property</h1>
                <h3>From as low as $10 per day with limited time offer discounts. </h3>
                <div>
                    <div style={{ backgroundColor: "white", width: "25%" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                        >
                            <Tab value="one" label="Item One" />
                            <Tab value="two" label="Item Two" />
                            <Tab value="three" label="Item Three" />
                        </Tabs>
                    </div>
                    <div
                        style={{ backgroundColor: "white", width: "40%", display: "flex" }}
                    >
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: "100%",
                            }}
                        >
                            <TextField
                                fullWidth
                                label=" Enter an address, neighborhood,city, or zip code "
                                id="fullWidth"
                            />
                        </Box>
                        <TuneIcon />
                        <p>Advanced</p>
                        <Button>
                            {" "}
                            <PageviewIcon />
                        </Button>
                    </div>
                </div>
                <div style={{ color: "white" }}>
                    <Button>
                        <HomeRoundedIcon /> Houses
                    </Button>
                    <Button>
                        <HomeRoundedIcon /> Appartment
                    </Button>
                    <Button>
                        <HomeRoundedIcon /> office
                    </Button>
                    <Button>
                        <HomeRoundedIcon /> Villa
                    </Button>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "2",
                }}
            >
                <div>
                    {" "}
                    <img
                        style={{
                            borderRadius: "50%",
                            width: 80,
                            height: 80,
                            background: "red",
                            display: "block",
                        }}
                        src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWV8ZW58MHx8MHx8fDA%3D"
                    />
                    <h3>India</h3>
                </div>
                <div>
                    <img
                        style={{
                            borderRadius: "50%",
                            width: 80,
                            height: 80,
                            background: "red",
                            display: "block",
                        }}
                        src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWV8ZW58MHx8MHx8fDA%3D"
                    />
                    <h3>India</h3>
                </div>
                <div>
                    {" "}
                    <img
                        style={{
                            borderRadius: "50%",
                            width: 80,
                            height: 80,
                            background: "red",
                            display: "block",
                        }}
                        src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWV8ZW58MHx8MHx8fDA%3D"
                    />
                    <h3>India</h3>
                </div>
                <div>
                    {" "}
                    <img
                        style={{
                            borderRadius: "50%",
                            width: 80,
                            height: 80,
                            background: "red",
                            display: "block",
                        }}
                        src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWV8ZW58MHx8MHx8fDA%3D"
                    />
                    <h3>India</h3>
                </div>
                <div>
                    {" "}
                    <img
                        style={{
                            borderRadius: "50%",
                            width: 80,
                            height: 80,
                            background: "red",
                            display: "block",
                        }}
                        src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWV8ZW58MHx8MHx8fDA%3D"
                    />
                    <h3>India</h3>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <h2>Properties For Rent</h2>
                    <h5>Home/Villa/Gated/Duplex</h5>
                </div>
                <div>
                    <Button variant="outlined">House</Button>
                    <Button variant="outlined">Villa</Button>
                    <Button variant="outlined">Office</Button>
                    <Button variant="outlined">Apartments</Button>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8fDA%3D)`,
                    }}
                >
                    <br /> <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div style={{ padding: "10px" }}>
                        <div
                            style={{
                                backgroundColor: "white",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div>
                                <h6> Luxary Family Home</h6>
                                <p>132 Greene Ave</p>
                            </div>
                            <div>
                                <Button style={{ color: "black" }}>
                                    <h6>$ 5,800</h6>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <div
                    style={{
                        backgroundImage: `url(https://media.istockphoto.com/id/697705574/photo/3d-rendering-of-modern-cozy-house-summer-evening.webp?b=1&s=170667a&w=0&k=20&c=W4654K_3lKG7JneAorbvSCVa1FtJvcbwj_EpIbN0JrU=)`,
                    }}
                >
                    <br /> <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div style={{ padding: "10px" }}>
                        <div
                            style={{
                                backgroundColor: "white",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div>
                                <h6> Georgious Villa Bay</h6>
                                <p>18 Grattan Brooklyn</p>
                            </div>
                            <div>
                                <Button style={{ color: "black" }}>
                                    <h6>$ 4,800</h6>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <div
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1628133287836-40bd5453bed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D)`,
                    }}
                >
                    <br /> <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div style={{ padding: "10px" }}>
                        <div
                            style={{
                                backgroundColor: "white",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div>
                                <h6> Spacious Family Home</h6>
                                <p>538 Hart st,Brooklyn</p>
                            </div>
                            <div>
                                <h6>$ 500</h6>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div
                    style={{
                        backgroundImage: `url(https://media.istockphoto.com/id/473745680/photo/modern-architecture-design-93-for-house-bungalow.webp?b=1&s=170667a&w=0&k=20&c=A7Z72NHZ_WP7WKAMPOtt8_626drVJAWjWMQIDCg8GPk=)`,
                    }}
                >
                    <br /> <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div style={{ padding: "10px" }}>
                        <div
                            style={{
                                backgroundColor: "white",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div>
                                <h6> House on the Hollywood</h6>
                                <p>374 Johnson Ave</p>
                            </div>
                            <div>
                                <h6>$ 4,600</h6>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <div
                    style={{
                        backgroundImage: `url(https://media.istockphoto.com/id/1159873271/photo/residential-area-in-the-city-modern-apartment-buildings.webp?b=1&s=170667a&w=0&k=20&c=8bgBCOBBgVLLUbZeHkmhvvh52dSGsZ6_FnJ77UBwM4w=)`,
                    }}
                >
                    <br /> <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div style={{ padding: "10px" }}>
                        <div
                            style={{
                                backgroundColor: "white",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div>
                                <h6> Luxary Family Home</h6>
                                <p>132 Greene Ave</p>
                            </div>
                            <div>
                                <h6>$ 5,800</h6>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <div
                    style={{
                        backgroundImage: `url(https://media.istockphoto.com/id/1257575119/photo/luxury-community-centre-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=5xv9TL_GecQVesC1oUgmBVcDLRXAe-o5v0EspvWPcjI=)`,
                    }}
                >
                    <br /> <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div style={{ padding: "10px" }}>
                        <div
                            style={{
                                backgroundColor: "white",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div>
                                <h6> Luxary Family Home</h6>
                                <p>132 Greene Ave</p>
                            </div>
                            <div>
                                <h6>$ 5,800</h6>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ backgroundColor: "pink" }}>
                    <h4>Lets find the right </h4>
                    <h4>selling opertunity for you</h4>
                    <div style={{ display: "flex" }}>
                        <div>
                            <PortraitRoundedIcon />
                        </div>
                        <div>
                            <h4>Property Management</h4>
                            <p>
                                Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown ...
                            </p>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <VpnKeyRoundedIcon />
                        <div>
                            <h4>Mortgage Service</h4>
                            <p>
                                Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown ...
                            </p>
                        </div>
                    </div>

                    <div style={{ display: "flex" }}>
                        <CurrencyExchangeRoundedIcon />
                        <div>
                            <h4>Currency service</h4>
                            <p>
                                Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown ...
                            </p>
                        </div>
                    </div>
                    <Button style={{ background: "black", color: "white" }}>
                        Learn more <ArrowOutwardIcon />{" "}
                    </Button>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1522444195799-478538b28823?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWUlMjBmYW1pbHl8ZW58MHx8MHx8fDA%3D" />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <h2>4M</h2>
                    <p>Award winning</p>
                </div>
                <div>
                    {" "}
                    <h2>18K</h2>
                    <p>Property Ready</p>
                </div>
                <div>
                    <h2>23M</h2>
                    <p>Happy Customers</p>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <h2>Explore Property Type</h2>
                    <p>Lorem Ipsum has been the industry's</p>
                </div>
                <div>
                    <h3>
                        All Type <ArrowOutwardIcon />
                    </h3>
                </div>
            </div>
            <Grid container spacing={3}>
                <Grid style={{ padding: '0' }} item xs={3}>
                    {" "}
                    <img

                        src="h1.png"
                    />
                    <h3>Houses</h3>
                    <p>3 Properties</p>
                </Grid>
                <Grid style={{ padding: '0' }} item xs={3}>
                    <img
                        src="h2.png"
                    />
                    <h3>Appartment</h3>
                    <p>3 Properties</p>
                </Grid>
                <Grid style={{ padding: '0' }} item xs={3}>
                    <img
                        src="h3.png"
                    />
                    <h3>Office</h3>
                    <p>3 Properties</p>
                </Grid>
                <Grid style={{ padding: '0' }} item xs={3}>
                    <img
                        src="h4.png"
                    />
                    <h3>Villa</h3>
                    <p>3 Properties</p>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                    <div>
                        <h2>Trusted By Best</h2>
                        <h2>Exclusive Agents</h2>
                        <p>Lorem Ipsum has been the industry's standard</p>{" "}
                        <p> dummy text ever since the 1500s,</p>
                        <h4>
                            <CheckCircleRoundedIcon />
                            Find Exclusive Deals
                        </h4>
                        <h4>
                            <CheckCircleRoundedIcon />
                            Friendly Host & Fast Support
                        </h4>
                        <h4>
                            <CheckCircleRoundedIcon /> List Your Own Property
                        </h4>
                        <Button style={{ background: "black", color: "white" }}>
                            See More <ArrowOutwardIcon />{" "}
                        </Button>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <h2>People Love Living With Homez</h2>
                    <p>Lorem Ipsum has been the industry's standard</p>
                </Grid>
                <Grid item xs={6}>
                    <></>
                    <MoreHorizRoundedIcon />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Paper>
                        <> </>
                        <h4>Great work</h4>
                        <p>
                            {" "}
                            Lorem Ipsum has been the industry's standard dummy text ever since
                            the 1500s, when an unknown ...
                        </p>
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <hr />
                        <div style={{ display: "flex" }}>
                            <img
                                style={{
                                    borderRadius: "50%",
                                    width: 80,
                                    height: 80,
                                    background: "red",
                                    display: "block",
                                }}
                                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWV8ZW58MHx8MHx8fDA%3D"
                            />
                            <div>
                                <h3>Ali Tufan</h3>
                                <h6>Marketing</h6>{" "}
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    {" "}
                    <Paper>
                        <> </>
                        <h4>Good Job</h4>
                        <p>
                            {" "}
                            Lorem Ipsum has been the industry's standard dummy text ever since
                            the 1500s, when an unknown ...
                        </p>
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon />
                        <hr />
                        <div style={{ display: "flex" }}>
                            <img
                                style={{
                                    borderRadius: "50%",
                                    width: 80,
                                    height: 80,
                                    background: "red",
                                    display: "block",
                                }}
                                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWV8ZW58MHx8MHx8fDA%3D"
                            />
                            <div>
                                <h3>Ali Tufan</h3>
                                <h6>Deasigner</h6>{" "}
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    {" "}
                    <Paper>
                        <> </>
                        <h4>Perfect</h4>
                        <p>
                            {" "}
                            Lorem Ipsum has been the industry's standard dummy text ever since
                            the 1500s, when an unknown ...
                        </p>
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon />
                        <hr />
                        <div style={{ display: "flex" }}>
                            <img
                                style={{
                                    borderRadius: "50%",
                                    width: 80,
                                    height: 80,
                                    background: "red",
                                    display: "block",
                                }}
                                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWV8ZW58MHx8MHx8fDA%3D"
                            />
                            <div>
                                <h3>Ali Tufan</h3>
                                <h6>Developer</h6>{" "}
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    {" "}
                    <Paper>
                        <> </>
                        <h4>Hard Work</h4>
                        <p>
                            {" "}
                            Lorem Ipsum has been the industry's standard dummy text ever since
                            the 1500s, when an unknown ...
                        </p>
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <hr />
                        <div style={{ display: "flex" }}>
                            <img
                                style={{
                                    borderRadius: "50%",
                                    width: 80,
                                    height: 80,
                                    background: "red",
                                    display: "block",
                                }}
                                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWV8ZW58MHx8MHx8fDA%3D"
                            />
                            <div>
                                <h3>Ali Tufan</h3>
                                <h6>Marketing</h6>{" "}
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <h6 style={{ textAlign: "center" }}>Trusted By The World's Best</h6>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <img
                        style={{ height: "70%", width: "70%" }}
                        src="https://thumbs.dreamstime.com/b/amazon-logo-editorial-vector-illustration-market-136495269.jpg"
                    />
                </Grid>
                <Grid item xs={2}>
                    <img
                        style={{ height: "40%", width: "70%" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/1200px-AMD_Logo.svg.png"
                    />
                </Grid>
                <Grid item xs={2}>
                    <img
                        style={{ height: "70%", width: "70%" }}
                        src="https://w7.pngwing.com/pngs/458/779/png-transparent-cisco-systems-hewlett-packard-logo-dell-business-hewlett-packard-blue-computer-network-text.png"
                    />
                </Grid>
                <Grid item xs={2}>
                    <img
                        style={{ height: "70%", width: "70%" }}
                        src="https://www.logotypes101.com/logos/243/75E781849F2B17F25B7DA5E7B48C6EE9/dropcam_logo.png"
                    />
                </Grid>
                <Grid item xs={2}>
                    <img
                        style={{ height: "70%", width: "70%" }}
                        src="https://1000logos.net/wp-content/uploads/2020/05/Logitech-Logo-2012.jpg"
                    />
                </Grid>
                <Grid item xs={2}>
                    <img
                        style={{ height: "70%", width: "70%" }}
                        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
                    />
                </Grid>
            </Grid>
            <div style={{ textAlign: "center" }}>
                <h2>From Our Blogs</h2>
                <p>Lorem Ipsum has been the industry's standard</p>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <img
                        style={{ height: "50%", width: "70%" }}
                        src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <p>Townhome </p>
                    <h4>Lorem Ipsum has been the industry's standard</h4>
                </Grid>
                <Grid item xs={4}>
                    <img
                        style={{ height: "50%", width: "70%" }}
                        src="https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <p>Villa </p>
                    <h4>Lorem Ipsum has been the industry's standard</h4>
                </Grid>
                <Grid item xs={4}>
                    <img
                        style={{ height: "50%", width: "70%" }}
                        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <p>Townhome </p>
                    <h4>Lorem Ipsum has been the industry's standard</h4>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <h3>Get Your Deram Home</h3>
                    <p>Lorem Ipsum has been the industry's standard</p>
                    <p> dummy text ever since the 1500s...</p>
                    <Button style={{ background: "black", color: "white" }}>
                        get Started <ArrowOutwardIcon />{" "}
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <img
                        style={{ height: "50%", width: "70%" }}
                        src="https://images.unsplash.com/photo-1619542402915-dcaf30e4e2a1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Grid>
            </Grid>
            <div style={{ textAlign: "center" }}>
                <h2>Subscribe Our Newletters</h2>
                <p>We dont spend spam so dont worry</p>
                <div>
                    <TextField id="filled-basic" label="Your E-mail" variant="filled" />
                    <Button style={{ backgroundColor: "maroon", color: "white" }}>
                        Subscribe
                    </Button>
                </div>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <h3>
                        <HomeRoundedIcon style={{ color: "red" }} />
                        Homez
                    </h3>
                    <p> </p>
                    <p>Address</p>
                    <h5>Lorem Ipsum has been the industry's</h5>
                    <h5>dummy text ever since the 1500s...</h5>
                    <p>Total Free Customer care</p>
                    <h5>
                        <a href="tel:+1 770-558-1119">+91 9876543210</a>
                    </h5>
                    <p>Live Support</p>
                    <h4>hi@Homez.com</h4>
                </Grid>
                <Grid item xs={3}>
                    <h3>Popular Search</h3>
                    <p>Appartment for sale</p>
                    <p>Appartment for Rent</p>
                    <p>Office for sale</p>
                    <p>Office for Rent</p>
                </Grid>
                <Grid item xs={3}>
                    <h3>Quick links</h3>
                    <p>Terms of use </p>
                    <p>Privacy policy</p>
                    <p>pricing plans</p>
                    <p>Our Services</p>
                    <p>Contact</p>
                    <p>Careers</p>
                    <p>FAQs</p>
                </Grid>
                <Grid item xs={3}>
                    <h3>Apps</h3>
                    <Button style={{ display: "flex" }}>
                        <AppleIcon />
                        <div>
                            <p>Download on the</p>
                            <h6>Apple Store</h6>
                        </div>
                    </Button>
                    <Button style={{ display: "flex" }}>
                        <PlayArrowIcon />
                        <div>
                            <p>Get it on </p>
                            <h6>Google Play</h6>
                        </div>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
