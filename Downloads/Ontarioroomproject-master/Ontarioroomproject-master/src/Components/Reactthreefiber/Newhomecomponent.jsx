import React,{useState, useRef,useEffect,Suspense, useMemo, useCallback} from 'react'
import styled,{keyframes} from 'styled-components'
import {Canvas,useFrame,useThree,extend, useLoader} from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'
import style from '../../static/staticcss';
import circleimg from '../../assets/circle.png'
import { BufferAttribute } from 'three';

extend({OrbitControls})



const Specialship = () =>{
  const [model,setmodel] = useState()
  useEffect(()=>{
    new GLTFLoader().load('/scene.gltf',setmodel)
  },[])

  return (
   model ? (<animated.primitive object={model.scene} position={[-5,5,0]}/>) : null 
  )
}

const animationd = keyframes`
    0% {
        background-size: 100%;
    }
    80% {
        background-size: 650%;
    }
    100% {
        background-size: 650%;
    }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  position: relative;
 
`;
const Textfile = styled.h1`
  font-weight: 800;
  font-size: 12em;
  text-align: center;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
     45deg,
        #CA4246 16.666%, 
        #E16541 16.666%, 
        #E16541 33.333%, 
        #F18F43 33.333%, 
        #F18F43 50%, 
        #8B9862 50%, 
        #8B9862 66.666%, 
        #476098 66.666%, 
        #476098 83.333%, 
        #A7489B 83.333%);
  position: absolute;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${animationd} 5s infinite ease forwards;
`;

const Controls = () =>{
  const orbitref = useRef()
  const {camera, gl} = useThree()

  useFrame(() => {
    orbitref.current.update()
  });

  return (
    <orbitControls
      enableDamping={true}
      enableZoom={false}
      zoomSpeed={0.2}
      ref={orbitref}
      args={[camera, gl.domElement]}
      autoRotate
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
  );
}

const Points = () =>{
  const imgtex = useLoader(THREE.TextureLoader,circleimg)
  const bufferref =useRef()
  let t = 0;
  let f = 0.002;
  let a = 3;
  const graph = useCallback((x,z)=>{
    return Math.sin(f*(x**2+z**2+t))*a;
  },[t,f,a])

  const count = 25;
  const sep = 3;
  let positions = useMemo(()=>{
    let positions = []
    for(let xi = 0; xi < count; xi++){
      for(let zi = 0; zi < count; zi++){
       let x = sep * (xi - count / 2);
       let z = sep * (zi - count / 2);
        let y = graph(x,z)
        positions.push(x,y,z)
      }
    }
    return new Float32Array(positions);
  },[count,sep, graph])

  useFrame(()=>{
    t += 15
    const positions = bufferref.current.array;
    
    let i = 0
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        positions[i+1] = graph(x,z);
        i +=3;
      }
    }

    bufferref.current.needsUpdate = true;
  })

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferref}
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={imgtex}
        color={0xffffff}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

const Boxcontents = () =>{
  // const mashref = useRef();
  const [hover,sethover] = useState(false)
  const [active,setactive] = useState(false)
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hover ? "hotpink" : "grey"
  });
 
 
  return (
    <animated.mesh
      // ref={mashref}
      onPointerOver={() => sethover(true)}
      onPointerOut={() => sethover(false)}
      onClick={() => setactive(!active)}
      scale={props.scale}
      castShadow
    >
    
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <animated.meshPhysicalMaterial attach="material" color={props.color} />
    </animated.mesh>
  );
}

const Plane = () =>{
  return (
    <mesh rotation={[-Math.PI/ 2, 0, 0]} position={[0,-0.5,0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshPhysicalMaterial attach="material" color="white" />
    </mesh>
  );
}

const Newhomecomponent = () => {
  return (
    <>
      <Wrapper>
        <Canvas
          camera={{ position: [10, 10, 0], fov: 75}}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}
          colorManagement={false}
        >
          <Suspense fallback={null}>
            <Points />
          </Suspense>
          <fog attach="fog" args={['rgba(244,244,244)', 30, 30 ]} />
          {/* <Controls />
          <ambientLight intensity={0.5} />
          <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
          <Specialship /> */} 
        </Canvas>
        <Textfile>ON ROOM</Textfile>
      </Wrapper>
    </>
  );
}

export default Newhomecomponent
