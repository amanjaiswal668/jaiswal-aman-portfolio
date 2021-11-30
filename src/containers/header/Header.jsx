import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import { useSpring } from '@react-spring/core'
import { a } from "@react-spring/three"
import Earth from '../../assets/Earth.fbx';


// Three js

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from "three";
import { OrbitControls, Stars } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'



const Boxes = ({ position }) => {
    const [active, setActive] = useState(0)
    const activeRef = useRef(active)
    activeRef.current = active

    useEffect(() => {
        let timeout
        const toggleActive = () => {
            timeout = setTimeout(() => {
                setActive(Number(!activeRef.current))
                toggleActive()
            }, Math.random() * 2000 + 1000)
        }
        toggleActive()
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    const { spring } = useSpring({
        spring: active,
        config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 }
    })

    const scale = spring.to([0, 1], [1, 2])
    const rotation = spring.to([0, 1], [0, Math.PI])
    const color = spring.to([0, 1], ["#e63946", "#34a0a4"])

    return (
        <a.mesh
            rotation-y={rotation}
            scale-x={scale}
            scale-y={scale}
            scale-z={scale}
            position={position}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <a.meshStandardMaterial roughness={0.5} attach="material" color={color} />
        </a.mesh>
    )
}






const Header = () => {
    const url = "https://api.countapi.xyz/update/amanjaiswal/user/?amount=1";
    const [count, visitorsCount] = useState(0);

    useEffect(() => {
        fetch(url).then(r => r.json()).then(a => visitorsCount(a.value));
    }, [])

    // const Scene = () => {
    //     const fbx = useLoader(FBXLoader, Earth);

    //     return <primitive object={fbx} scale={0.005} />;
    // };
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Hello</h1>
                <h1 className="gradient__text">I am Aman Jaiswal, a full-stack and iOS developer</h1>

                <div className="gpt3__header-content__input">
                    {/* <input type="email" placeholder="Your Email Address" /> */}
                    <button type="button"><a href="mailto:amanjaiswal159.aj@icloud.com">Let&apos;s Connect</a></button>

                </div>

                <div className="gpt3__header-content__people">
                    {/* <img src={people} /> */}

                    <p>{count} Visitors and more counting.</p>
                </div>
            </div>

            <div className="gpt3__header-image">
                {/* <img src={aiImage} /> */}

                <Canvas camera={{ position: [-10, 10, 10], fov: 50 }}>

                    <OrbitControls />

                    {/* <Scene /> */}
                    <Stars />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 15, 10]} angle={0.7} />
                    <pointLight position={[-10, 10, -10]} castShadow />
                    {[-5, 0, 8].map((x) =>
                        [-5, 0, 5].map((z) => <Boxes position={[x, 0, z]} />)
                    )}

                    {/* <Boxes /> */}
                </Canvas>
            </div>



        </div>
    )
};

export default Header
