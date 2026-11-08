"use client";

import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Center,
  Float,
  ContactShadows,
  Environment,
  Text,
} from "@react-three/drei";
import * as THREE from "three";
import { Sliders, RotateCcw, Sparkles, Type, Palette, SunMedium } from "lucide-react";

// 1. Types & Configurations
export type SignageStyle = "neon" | "channel" | "acrylic" | "salon" | "custom";
export type LightingColor = "warm" | "cool" | "red" | "blue" | "pink" | "purple" | "green" | "gold";

interface ConfiguratorState {
  style: SignageStyle;
  text: string;
  color: LightingColor;
  intensity: number;
}

const COLOR_MAP: Record<LightingColor, { hex: string; emissive: string; point: string }> = {
  warm: { hex: "#FFF0D4", emissive: "#FFaa33", point: "#FFAA22" },
  cool: { hex: "#E6F4FF", emissive: "#3399FF", point: "#66B2FF" },
  red: { hex: "#FF3333", emissive: "#FF0000", point: "#FF1a1a" },
  blue: { hex: "#3399FF", emissive: "#0066FF", point: "#1a8cff" },
  pink: { hex: "#FF3399", emissive: "#FF007F", point: "#ff1aa3" },
  purple: { hex: "#9933FF", emissive: "#7F00FF", point: "#b366ff" },
  green: { hex: "#33FF66", emissive: "#00FF44", point: "#1aff53" },
  gold: { hex: "#FFD700", emissive: "#FFC000", point: "#ffcc00" },
};

interface SceneProps {
  config: ConfiguratorState;
}

// 2. 3D Procedural Signage Mesh Component with Realistic Extrusion & Glow
function SignageMesh({ config }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null!);

  const colorConfig = COLOR_MAP[config.color];
  const displayText = config.text.trim() || "NOOCKIE";

  // Create robust 3D extruded text geometry using Three.js ShapeUtils loaded via Canvas or procedural text buffers
  // Since we want 100% reliability without missing font JSON files, we construct sophisticated 3D extruded block lettering/boxes or canvas textures with depth.
  // Alternatively, using standard Three.js ExtrudeGeometry with font shapes:
  
  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
        <Center>
          {/* Main Signage Backing Panel (Dark matte architectural ACM board) */}
          <mesh position={[0, 0, -0.15]} receiveShadow>
            <boxGeometry args={[Math.max(displayText.length * 0.9, 4.5), 2.2, 0.1]} />
            <meshStandardMaterial color="#111113" roughness={0.8} metalness={0.2} />
          </mesh>

          {/* 3D Lettering Blocks with Style-Specific PBR Shaders */}
          <group position={[0, 0, 0]}>
            {config.style === "channel" && (
              // 3D Metal Channel Letters with Metallic Face & Warm Halo
              <ThreeDimensionalLetters 
                text={displayText} 
                faceColor="#E5C158" 
                sideColor="#1a1a1a" 
                intensity={config.intensity} 
                glowColor={colorConfig.point} 
              />
            )}

            {config.style === "neon" && (
              // LED Neon Flex Tubes with High Emissive Glow
              <NeonTubeLetters 
                text={displayText} 
                color={colorConfig.emissive} 
                intensity={config.intensity} 
              />
            )}

            {config.style === "acrylic" && (
              // Transparent Acrylic Backlit Sign with Edge Glow
              <AcrylicBacklitLetters 
                text={displayText} 
                faceColor="#FFFFFF" 
                glowColor={colorConfig.emissive} 
                intensity={config.intensity} 
              />
            )}

            {config.style === "salon" && (
              // Vibrant Magenta/Pink Salon Signage
              <SalonLetters 
                text={displayText} 
                faceColor="#FF3399" 
                glowColor="#FF007F" 
                intensity={config.intensity} 
              />
            )}

            {config.style === "custom" && (
              // Multicolour Custom Neon Signage
              <CustomNeonLetters 
                text={displayText} 
                intensity={config.intensity} 
              />
            )}
          </group>
        </Center>
      </Float>

      {/* Controlled Backlighting / Halo Point Lights */}
      <pointLight
        position={[0, 0, -0.6]}
        intensity={config.intensity * 4}
        color={colorConfig.point}
        distance={7}
      />
      <directionalLight
        position={[3, 3, 4]}
        intensity={config.intensity * 1.5}
        color={colorConfig.hex}
      />
    </group>
  );
}

// Sub-components for specialized signage styles
function ThreeDimensionalLetters({ text, faceColor, sideColor, intensity, glowColor }: { text: string; faceColor: string; sideColor: string; intensity: number; glowColor: string }) {
  return (
    <group>
      <Text position={[0, 0, -0.08]} fontSize={1.1} fontWeight={700} color={sideColor}>
        {text}
        <meshStandardMaterial color={sideColor} metalness={0.7} roughness={0.3} />
      </Text>
      <Text position={[0, 0, 0.02]} fontSize={1.1} fontWeight={700} color={faceColor}>
        {text}
        <meshStandardMaterial color={faceColor} metalness={0.9} roughness={0.15} />
      </Text>
      <pointLight position={[0, 0, -0.5]} intensity={intensity * 5} color={glowColor} distance={6} />
    </group>
  );
}

function NeonTubeLetters({ text, color, intensity }: { text: string; color: string; intensity: number }) {
  return (
    <group>
      <Text fontSize={1.1} fontWeight={700} color={color} outlineWidth={0.025} outlineColor={color}>
        {text}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={intensity * 2.5}
          roughness={0.1}
        />
      </Text>
      <pointLight position={[0, 0, 0.2]} intensity={intensity * 2} color={color} distance={3} />
    </group>
  );
}

function AcrylicBacklitLetters({ text, faceColor, glowColor, intensity }: { text: string; faceColor: string; glowColor: string; intensity: number }) {
  return (
    <group>
      <Text fontSize={1.1} fontWeight={700} color={faceColor}>
        {text}
        <meshStandardMaterial
          color={faceColor}
          emissive={glowColor}
          emissiveIntensity={intensity * 1.8}
          roughness={0.1}
        />
      </Text>
      <pointLight position={[0, 0, -0.7]} intensity={intensity * 6} color={glowColor} distance={8} />
    </group>
  );
}

function SalonLetters({ text, faceColor, glowColor, intensity }: { text: string; faceColor: string; glowColor: string; intensity: number }) {
  return (
    <group>
      <Text fontSize={1.1} fontWeight={700} color={faceColor} outlineWidth={0.02} outlineColor={glowColor}>
        {text}
        <meshStandardMaterial
          color={faceColor}
          emissive={glowColor}
          emissiveIntensity={intensity * 2.2}
          roughness={0.2}
        />
      </Text>
      <pointLight position={[0, 0, -0.6]} intensity={intensity * 5} color={glowColor} distance={7} />
    </group>
  );
}

function CustomNeonLetters({ text, intensity }: { text: string; intensity: number }) {
  const letters = text.split("");
  const spacing = 0.85;
  const startX = -((letters.length - 1) * spacing) / 2;
  const neonColors = ["#FF3333", "#33FF66", "#3399FF", "#FF3399", "#9933FF", "#FFD700"];

  return (
    <group>
      {letters.map((char, i) => {
        const col = neonColors[i % neonColors.length];
        return (
          <group key={i} position={[startX + i * spacing, 0, 0]}>
            <Text fontSize={0.9} fontWeight={700} color={col} outlineWidth={0.02} outlineColor={col}>
              {char}
              <meshStandardMaterial color={col} emissive={col} emissiveIntensity={intensity * 2.5} />
            </Text>
            <pointLight position={[0, 0, 0.2]} intensity={intensity * 1.5} color={col} distance={2.5} />
          </group>
        );
      })}
    </group>
  );
}

// 3. Main Exported Component with UI Configurator
export default function ThreeCanvas() {
  const [config, setConfig] = useState<ConfiguratorState>({
    style: "neon",
    text: "NOOCKIE",
    color: "red",
    intensity: 1.2,
  });

  const resetConfig = () => {
    setConfig({
      style: "neon",
      text: "NOOCKIE",
      color: "red",
      intensity: 1.2,
    });
  };

  return (
    <div className="relative w-full h-[580px] bg-[#0A0A0B] rounded-2xl overflow-hidden border border-accent/40 shadow-2xl flex flex-col lg:flex-row">
      
      {/* Interactive Control Sidebar */}
      <div className="w-full lg:w-80 bg-charcoal/95 backdrop-blur-xl border-b lg:border-b-0 lg:border-r border-white/10 p-5 flex flex-col justify-between z-20 overflow-y-auto">
        <div className="space-y-6">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-accent" />
              <span className="font-display font-bold text-sm text-ivory uppercase tracking-wider">
                Signage Studio
              </span>
            </div>
            <button
              onClick={resetConfig}
              className="text-white/40 hover:text-accent transition-colors p-1"
              title="Reset Configurator"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Signage Style Selector */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-accent" /> Signage Style
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "neon", label: "LED Neon" },
                { id: "channel", label: "3D Channel" },
                { id: "acrylic", label: "Backlit" },
                { id: "salon", label: "Salon Sign" },
                { id: "custom", label: "Custom Neon" },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setConfig({ ...config, style: s.id as SignageStyle })}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all text-left ${
                    config.style === s.id
                      ? "bg-accent text-white border-accent shadow-lg shadow-accent/20 font-bold"
                      : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Text Input */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2 flex items-center gap-1.5">
              <Type className="w-3 h-3 text-accent" /> Signage Text (Max 10 Chars)
            </label>
            <input
              type="text"
              maxLength={10}
              value={config.text}
              onChange={(e) => setConfig({ ...config, text: e.target.value })}
              placeholder="ENTER TEXT"
              className="w-full bg-charcoal border border-white/15 rounded-lg px-3.5 py-2.5 text-ivory text-xs font-mono tracking-widest focus:outline-none focus:border-accent"
            />
          </div>

          {/* Lighting Color Selector */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2.5 flex items-center gap-1.5">
              <Palette className="w-3 h-3 text-accent" /> Illumination Color
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { id: "red", bg: "#FF3333", label: "Red" },
                { id: "green", bg: "#33FF66", label: "Green" },
                { id: "blue", bg: "#3399FF", label: "Blue" },
                { id: "pink", bg: "#FF3399", label: "Pink" },
                { id: "purple", bg: "#9933FF", label: "Purple" },
                { id: "gold", bg: "#FFD700", label: "Gold" },
                { id: "warm", bg: "#FFF0D4", label: "Warm" },
                { id: "cool", bg: "#E6F4FF", label: "Cool" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setConfig({ ...config, color: c.id as LightingColor })}
                  className={`h-9 rounded-lg border flex items-center justify-center transition-all ${
                    config.color === c.id
                      ? "border-white scale-105 shadow-md"
                      : "border-white/15 opacity-70 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: c.bg }}
                  title={c.label}
                />
              ))}
            </div>
          </div>

          {/* Lighting Intensity Slider */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono text-white/50 mb-2">
              <span className="flex items-center gap-1.5">
                <SunMedium className="w-3 h-3 text-accent" /> Glow Intensity
              </span>
              <span className="text-ivory font-bold">{Math.round(config.intensity * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2.0"
              step="0.1"
              value={config.intensity}
              onChange={(e) => setConfig({ ...config, intensity: parseFloat(e.target.value) })}
              className="w-full accent-accent cursor-pointer bg-white/10 rounded-lg h-2"
            />
          </div>

        </div>

        {/* Studio Badge */}
        <div className="pt-4 mt-4 border-t border-white/10 text-[10px] font-mono text-white/40 flex items-center justify-between">
          <span>NOOCKIE GRAPHICS 3D</span>
          <span className="text-accent">LIVE RENDER</span>
        </div>
      </div>

      {/* R3F WebGL Canvas Viewport */}
      <div className="relative flex-grow h-[350px] lg:h-full">
        <div className="absolute top-4 right-4 z-10 text-[10px] font-mono text-white/40 bg-charcoal/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-none">
          [ Drag to Rotate • Scroll to Zoom ]
        </div>

        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.3} />
          
          <SignageMesh config={config} />

          {/* Realistic Floor Contact Shadows & Environment */}
          <ContactShadows
            position={[0, -1.6, 0]}
            opacity={0.8}
            scale={10}
            blur={2.0}
            far={4}
          />
          <Environment preset="night" />

          <OrbitControls
            enableZoom={true}
            minDistance={3}
            maxDistance={8}
            enablePan={false}
            autoRotate={false}
          />
        </Canvas>
      </div>

    </div>
  );
}