"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
function Model(){const g=useRef<THREE.Group>(null);useFrame((s,d)=>{if(g.current){g.current.rotation.y+=d*.08;g.current.rotation.x=s.pointer.y*.04;}});return <group ref={g}>{[0,1,2].map(l=><mesh key={l} position={[0,l*.9-.8,0]} rotation={[Math.PI/2,0,0]}><torusGeometry args={[2.5-l*.08,.08,6,64]}/><meshStandardMaterial color="#D4AF37" metalness={.6} roughness={.5}/></mesh>)}<mesh position={[0,.1,0]}><cylinderGeometry args={[2.5,2.8,.25,64]}/><meshStandardMaterial color="#E8DCC8" roughness={.7}/></mesh></group>}
export function Scene(){return <div className="relative h-[360px] w-full"><Canvas camera={{position:[7,4,8],fov:42}} dpr={[1,1.5]} fallback={<div className="absolute inset-0 grid place-items-center text-gold">3D unavailable</div>}><ambientLight intensity={.8}/><directionalLight position={[4,6,4]} intensity={3}/><Model/></Canvas></div>}
