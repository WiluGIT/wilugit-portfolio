import { Canvas } from "@react-three/fiber";
import Mac from './Mac';
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import { CanvasLoader } from "..";

const TabletCanvas = () => {
    return (
        <Canvas>
            <Suspense fallback={<CanvasLoader />}>
                <Stage environment="city" intensity={0.6} scale={20}>
                    <Mac scale={0.1} />
                </Stage>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                />
            </Suspense>
        </Canvas>
    );
}

export default TabletCanvas;