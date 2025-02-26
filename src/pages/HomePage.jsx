const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL;

export default function HomePage () {
    return (
        <>
        <div style={{backgroundColor: "#F5F5F5"}}>
        <div className="container">
            <div className="text-center d-flex justify-content-center">
                <img
                src={`${PUBLIC_URL}/1727712696713.jpg`}
                alt="home"
                style={{ height: "100vh", width: "100%", objectFit: "cover" }}
                />
            </div>
        </div>
        </div>
        </>
    )
}