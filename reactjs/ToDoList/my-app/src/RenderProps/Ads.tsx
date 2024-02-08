// import { withMouseTracker } from "./MouseTracker";

export default function Ads({ x, y, visible }: { x: number; y: number; visible: boolean }) {
    return (
        <>
            <div>
                <p>position mouse</p>
                <ul>
                    <li>x: {x}</li>
                    <li>y: {y}</li>
                </ul>
            </div>
        </>
    )
}

// export default withMouseTracker(Ads)