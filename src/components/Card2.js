import { Button } from "@mui/material";

export default function Card2() {
    return (
        <div
            style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1628133287836-40bd5453bed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D)`,

            }}
        >
            <br /> <br /><br /><br /><br /><br /><br /><br /><br />
            <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: "space-between" }}>
                <div>
                    <h6> Luxary Family Home</h6>
                    <p>132 Greene Ave</p>
                </div>
                <div>
                    <h6>$ 5,800</h6>
                </div>
            </div>
        </div>
    )


}