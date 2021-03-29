import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Hero = () => {
	useEffect(() => {
		const scene = new THREE.Scene();
		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true
		});
		const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000);

		camera.position.set(30, 30, 30);
		camera.lookAt(0, -4, 0);

		// scene.add(new THREE.AxesHelper(10));

		const loader = new GLTFLoader();
		loader.load('model/scene.gltf', (gltf) => {
			gltf.scene.name = 'coso3d';
			scene.add(gltf.scene);
			loop();
		});

		const light = new THREE.DirectionalLight('white', 1);
		light.position.set(0, 0, 5);
		scene.add(light);

		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth / 2, window.innerWidth / 2);
		document.querySelector('#myCanvas').appendChild(renderer.domElement);

		const loop = () => {
			requestAnimationFrame(loop);

			const coso3d = scene.getObjectByName('coso3d');
			coso3d.rotateY(0.005);

			renderer.render(scene, camera);
		};

		return () => {
			cancelAnimationFrame();
		};
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 1.5 }}
			className="bg-gradient-to-b from-gray-800 to-gray-900 h-screen justify-center flex overflow-hidden text-white"
		>
			<div className="flex-col z-10 self-center">
				<motion.div
					initial={{ opacity: 0, x: 120 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 1.7 }}
					className="text-4xl mb-4"
				>
					Hi
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 100, scale: 2 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.5, delay: 2 }}
					className="text-5xl mb-10"
				>
					I'm{' '}
					<motion.span
						initial={{ color: 'white' }}
						animate={{ color: 'yellow' }}
						transition={{ delay: 2.6 }}
						className="font-extrabold"
					>
						Facundo López
					</motion.span>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: -700, x: 50 }}
					animate={{ opacity: 1, y: 0, x: 0 }}
					transition={{ duration: 0.5, delay: 3 }}
					className="text-3xl"
				>
					Fullstack Developer
				</motion.div>
			</div>
			<motion.div
				id="myCanvas"
				initial={{ opacity: 0, y: -300, scale: 0.1 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ delay: 1.5, duration: 0.8 }}
			/>
		</motion.div>
	);
};

export default Hero;
